import React, { useState } from "react";

const Main = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");

  // Use local variable for audio chunks
  let audioChunks = [];

  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        setIsRecording(true);
        recorder.start();
        console.log("Recording started");

        recorder.ondataavailable = (event) => {
          // Directly push to the audioChunks array
          audioChunks.push(event.data);
        };

        recorder.onstop = () => {
          console.log("Recording stopped");
          setIsRecording(false);

          // Create Blob from audio chunks
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
          console.log(audioBlob); // Check if this prints a Blob with size > 0
          const audioURL = URL.createObjectURL(audioBlob);
          setAudioUrl(audioURL);

          // Send audio to the server
          const formData = new FormData();
          formData.append("audio", audioBlob);

          fetch("/transcribe", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network error");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Server response:", data);
              if (data.transcription) {
                setTranscription(data.transcription);
              } else if (data.error) {
                setTranscription("An error occurred during recording");
              }
            })
            .catch((error) => {
              console.error("Error sending audio:", error);
            });
        };
      })
      .catch((error) => {
        console.error("Error accessing the microphone:", error);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    } else {
      console.error("MediaRecorder is not defined");
    }
  };

  return (
    <div className="text-center container-fluid">
      <h1>Scribify | Speak It Out, Anytime, Anywhere.</h1>
      <section className="container">
        <audio id="audio-player" controls src={audioUrl}></audio>
        <br />
        <br />

        <button
          type="button"
          className="btn btn-success"
          id="start-btn"
          onClick={handleStartRecording}
          disabled={isRecording}
        >
          Record
        </button>
        <button
          type="button"
          className="btn btn-danger"
          id="stop-btn"
          onClick={handleStopRecording}
          disabled={!isRecording}
        >
          Stop
        </button>

        <div className="response">
          <p className="text-response">{transcription}</p>
        </div>
      </section>
    </div>
  );
};

export default Main;

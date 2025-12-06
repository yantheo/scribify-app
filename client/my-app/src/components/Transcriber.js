import { useState } from "react";
import { Mic, Square, Volume2, FileText } from 'lucide-react';

const Transcriber = ({ onBackHome }) => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  let audioChunks = [];

  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        setIsRecording(true);
        setTranscription("");
        setAudioUrl("");
        recorder.start();

        recorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        recorder.onstop = () => {
          setIsRecording(false);
          setIsProcessing(true);

          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
          const audioURL = URL.createObjectURL(audioBlob);
          setAudioUrl(audioURL);

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
              if (data.transcription) {
                setTranscription(data.transcription);
              } else if (data.error) {
                setTranscription("An error occurred during recording");
              }
              setIsProcessing(false);
            })
            .catch((error) => {
              console.error("Error sending audio:", error);
              setTranscription("Error: Unable to transcribe audio");
              setIsProcessing(false);
            });
        };
      })
      .catch((error) => {
        console.error("Error accessing the microphone:", error);
        alert("Unable to access microphone. Please check your permissions.");
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  return (
    // NOUVEAU FOND : Clair (gris pâle/blanc)
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            {/* Titre : Texte sombre */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Scribify
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Speak It Out, Anytime, Anywhere.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Carte principale : Blanc/Gris clair, bordures nettes */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 md:p-12">

            {isRecording && (
              <div className="mb-8 flex items-center justify-center space-x-3">
                <div className="flex space-x-1">
                  {/* Indicateurs : Couleur Rouge standard pour l'enregistrement */}
                  <div className="w-2 h-8 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-12 bg-red-500 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-10 bg-red-500 rounded-full animate-pulse delay-150"></div>
                </div>
                <span className="text-red-500 font-semibold">Recording...</span>
              </div>
            )}

            <div className="flex flex-col items-center space-y-6 mb-8">
              <div className="flex space-x-4">
                {/* Bouton Record : Émeraude */}
                <button
                  onClick={handleStartRecording}
                  disabled={isRecording}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg border transition-all duration-200 ${
                    isRecording
                      ? 'bg-gray-400 cursor-not-allowed border-gray-300'
                      : 'bg-emerald-500 hover:bg-emerald-600 border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 active:scale-95'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                  <span>Record</span>
                </button>

                {/* Bouton Stop : Rouge (pour l'urgence) */}
                <button
                  onClick={handleStopRecording}
                  disabled={!isRecording}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg border transition-all duration-200 ${
                    !isRecording
                      ? 'bg-gray-400 cursor-not-allowed border-gray-300'
                      : 'bg-red-500 hover:bg-red-600 border-red-400/30 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 active:scale-95'
                  }`}
                >
                  <Square className="w-5 h-5" />
                  <span>Stop</span>
                </button>
              </div>
            </div>

            {audioUrl && (
              <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Volume2 className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Audio Recording</h3>
                </div>
                <audio
                  controls
                  src={audioUrl}
                  className="w-full bg-slate-100 rounded"
                ></audio>
              </div>
            )}

            {isProcessing && (
              <div className="p-6 bg-emerald-500/10 border border-emerald-300 rounded-xl text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
                  <span className="text-emerald-700 font-medium">Processing transcription...</span>
                </div>
              </div>
            )}

            {transcription && !isProcessing && (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-5 h-5 text-slate-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Transcription</h3>
                </div>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {transcription}
                </p>
              </div>
            )}

            {!isRecording && !audioUrl && !transcription && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 border border-emerald-300 mb-4">
                  <Mic className="w-10 h-10 text-emerald-600" />
                </div>
                <p className="text-slate-500">
                  Click the Record button to start capturing audio
                </p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcriber;
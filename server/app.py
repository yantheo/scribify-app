import io
from flask import Flask, request, jsonify
from openai import OpenAI
from dotenv import find_dotenv, load_dotenv
from flask_cors import CORS
import os

app = Flask(__name__)

# Configure CORS
CORS(app)

load_dotenv()

# Assurez-vous que vous avez bien configuré la clé d'API OpenAI
openai_api_key = os.getenv("OPENAI_API_KEY")
if not openai_api_key:
    raise ValueError(
        "La clé d'API OpenAI n'est pas définie dans les variables d'environnement."
    )

# Initialiser le client OpenAI avec la clé d'API
client = OpenAI(api_key=openai_api_key)


@app.route("/")
def index():
    return {"Hello": "World"}


@app.route("/transcribe", methods=["POST"])
def transcribe_audio():
    if request.method == "POST":
        if "audio" not in request.files:
            return jsonify({"error": "No audio file found in the request"}), 400

        audio_file = request.files["audio"]
        buffer = io.BytesIO(audio_file.read())
        buffer.name = "audio.ogg"
        try:
            # Create a BytesIO stream from the bytes
            transcription = client.audio.transcriptions.create(
                model="whisper-1", file=buffer
            )
            return jsonify({"transcription": transcription.text}), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)

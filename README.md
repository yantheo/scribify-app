A web application for voice transcription built with React and Flask, dockerized for easy deployment. This application utilizes OpenAI's API for advanced transcription capabilities. Users can record audio and receive transcriptions in real-time. The app features a React frontend for user interaction and a Flask backend that processes audio and communicates with OpenAI's API.

## Features
- Record audio directly from the browser
- Real-time transcription of recorded audio using OpenAI's API
- User-friendly interface with Bootstrap
- Backend powered by Flask for audio processing and API integration
- Dockerized setup for both frontend and backend services

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the `client` directory and install frontend dependencies: `npm install`
3. Navigate to the `server` directory and install backend dependencies: `pip install -r requirements.txt`
4. Build and run the application using Docker: `docker-compose up --build`

## Usage
Access the application on `http://localhost:3000` for the frontend and ensure the backend is available at `http://localhost:5000`.

## Contributing
Feel free to open issues or submit pull requests to improve the project.

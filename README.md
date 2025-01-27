# IELTS Speaking Test Simulator

## Overview
This project is an **IELTS Speaking Test Simulator** that uses **MistralAI** to analyze spoken responses and provide scores for fluency, vocabulary, and grammar. It consists of:
- A **React frontend** for real-time speech-to-text and user interaction.
- A **Python Flask backend** for processing requests and integrating with MistralAI.

## Why MistralAI?
MistralAI was chosen for this project because:
1. **Open Source**: MistralAI provides open-source models like `open-mistral-nemo`, which are free to use and highly customizable.
2. **Performance**: Mistral models are optimized for natural language understanding and generation, making them ideal for educational applications like IELTS scoring.
3. **Cost-Effective**: Unlike proprietary APIs, MistralAI allows for local deployment, reducing costs and ensuring data privacy.

## Tech Stack
- **Frontend**: React, JavaScript, HTML, CSS
  - Libraries: `react-speech-recognition`, `pdfmake`, `axios`
- **Backend**: Python, Flask
  - Libraries: `mistralai`, `flask-cors`, `python-dotenv`
- **AI Integration**: MistralAI (`open-mistral-nemo`)

## Features
- **Real-Time Speech-to-Text**: Uses browser-based speech recognition.
- **IELTS Scoring**: Provides scores for fluency, vocabulary, and grammar.
- **PDF Reports**: Generates downloadable reports with feedback.
- **Error Handling**: Gracefully handles API failures and user errors.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ielts-simulator.git
   cd ielts-simulator
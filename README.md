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
# IELTS Exam Simulator


--

## **Legacy Integration: Python and Java**  
The initial version of the IELTS Simulator utilized both **Python** and **Java** to balance rapid AI development with high-performance execution.  

### **Why Python Was Used**  
- **Natural Language Processing (NLP)**:  
  Python’s rich ecosystem (e.g., `mistralai`, `spaCy`) enabled efficient analysis of spoken/written responses for fluency, vocabulary, and grammar.  
- **Backend Services**:  
  A lightweight **Flask API** handled HTTP requests, processed user inputs, and integrated with MistralAI models.  
- **Rapid Prototyping**:  
  Python’s simplicity allowed quick iteration for testing new scoring algorithms or feedback mechanisms.  

### **Why Java Was Included**  
- **Performance-Critical Tasks**:  
  Java managed time-sensitive operations like real-time audio recording, multithreaded timers, and UI responsiveness.  
- **Legacy Code Reuse**:  
  Existing Java modules (e.g., audio processing utilities, PDF report generators) were reused to avoid redundant development.  
- **Cross-Platform Stability**:  
  Java ensured core functionalities (e.g., file I/O, background services) worked consistently across Windows, macOS, and Linux.  

---

### **How Python and Java Interacted**  
The two languages were integrated through a **decoupled, modular architecture**:  

1. **Subprocess Calls**:  
   Java invoked Python scripts for NLP tasks using `ProcessBuilder`, passing user inputs as arguments:  
   ```java  
   // Example: Calling a Python script from Java  
   ProcessBuilder pb = new ProcessBuilder("python", "analyzer.py", "--text", userResponse);  
   Process process = pb.start();  
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
     git clone https://github.com/Masotlaabel/projectzero.git
   cd projectzero

## Set Up Backend:

## Navigate to the backend folder:
cd backend

## Install dependencies:

pip install -r requirements.txt
## Run the Flask server:
python app.py
## Set Up Frontend:

**Navigate to the frontend folder:**
cd frontend
 ## Install dependencies:
npm install

## Start the React app:
npm start
## Access the App:

Open http://localhost:3000 in your browser.

## Demo Video
Watch the demo video here: [Loom Video Link](https://www.loom.com/share/e3935e619f1a4935a7abd9bc2e8cad99?sid=6f6a5497-81bb-4703-b547-d70af26e9d0d)

## Future Improvements
Add pronunciation feedback using phoneme analysis.

Implement progress tracking for users over time.

Support multiple languages for non-native English speakers.


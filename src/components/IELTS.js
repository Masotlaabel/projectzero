import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import axios from 'axios';

// Initialize PDFMake fonts with error handling
pdfMake.vfs = pdfFonts.pdfMake?.vfs || {};

export default function IELTS() {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [feedback, setFeedback] = useState({ 
    fluency: "N/A", 
    vocabulary: "N/A", 
    grammar: "N/A" 
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const analyzeResponse = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/analyze', {
        text: transcript,
        section: 'Part 1'
      });
      setFeedback(response.data);
      setError(null);
    } catch (err) {
      setError('Analysis failed. Ensure the backend is running and check console.');
      console.error("API Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const generatePDF = () => {
    const docDefinition = {
      content: [
        { text: 'IELTS Speaking Test Report', style: 'header' },
        `Fluency: ${feedback?.fluency || "N/A"}/9`,
        `Vocabulary: ${feedback?.vocabulary || "N/A"}/9`,
        `Grammar: ${feedback?.grammar || "N/A"}/9`,
      ],
      styles: { header: { fontSize: 18, bold: true } }
    };
    pdfMake.createPdf(docDefinition).download('IELTS_Report.pdf');
  };

  if (!browserSupportsSpeechRecognition) {
    return <div className="error">Browser does not support speech recognition.</div>;
  }

  return (
    <div>
      <button 
        onClick={SpeechRecognition.startListening}
        disabled={isLoading}
      >
        Start Recording
      </button>
      
      <button 
        onClick={() => { 
          SpeechRecognition.stopListening(); 
          analyzeResponse(); 
        }}
        disabled={isLoading}
      >
        {isLoading ? "Analyzing..." : "Stop & Analyze"}
      </button>

      <button onClick={resetTranscript} disabled={isLoading}>
        Reset
      </button>

      <p>You said: {transcript || "Nothing recorded yet"}</p>

      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {feedback && (
        <div>
          <h3>Feedback</h3>
          <p>Fluency: {feedback.fluency}/9</p>
          <p>Vocabulary: {feedback.vocabulary}/9</p>
          <p>Grammar: {feedback.grammar}/9</p>
          <button 
            onClick={generatePDF} 
            disabled={!feedback?.fluency || isLoading}
          >
            Download Report
          </button>
        </div>
      )}
    </div>
  );
}
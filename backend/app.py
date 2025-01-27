from flask import Flask, request, jsonify
from flask_cors import CORS
from mistralai import Mistral
import os
import re

# Set up Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# MistralAI configuration
API_KEY = os.environ.get("MISTRAL_API_KEY", "xTcUgByGNjdbHTgB2C2cBD8Q6l2RT9wt")  # Replace with your Mistral API key if not using environment variables
MODEL_NAME = "open-mistral-nemo"  # Specify the desired Mistral model

# Initialize Mistral client
client = Mistral(api_key=API_KEY)

# Helper function to parse IELTS feedback
def parse_ielts_feedback(text):
    try:
        fluency = re.search(r"Fluency: (\d)/9", text).group(1)
    except AttributeError:
        fluency = "N/A"
    try:
        vocabulary = re.search(r"Vocabulary: (\d)/9", text).group(1)
    except AttributeError:
        vocabulary = "N/A"
    try:
        grammar = re.search(r"Grammar: (\d)/9", text).group(1)
    except AttributeError:
        grammar = "N/A"
    
    return {
        "fluency": fluency,
        "vocabulary": vocabulary,
        "grammar": grammar,
    }

# Analyze route
@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        # Extract input data from the request
        data = request.json
        section = data.get('section', 'IELTS Writing')
        response_text = data.get('text', '')

        # Construct the prompt for the Mistral model
        prompt = f"""
        Act as an IELTS examiner. For {section}, score this response: "{response_text}".
        Provide scores (0-9) strictly in this format:
        Fluency: [score]/9  
        Vocabulary: [score]/9  
        Grammar: [score]/9  
        Corrections: [your corrections]
        """

        # Send the prompt to Mistral
        chat_response = client.chat.complete(
            model=MODEL_NAME,
            messages=[
                {"role": "user", "content": prompt},
            ],
        )

        # Extract and parse the response
        feedback_text = chat_response.choices[0].message.content
        scores = parse_ielts_feedback(feedback_text)

        # Return the structured feedback as JSON
        return jsonify(scores)

    except Exception as e:
        # Handle errors gracefully
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

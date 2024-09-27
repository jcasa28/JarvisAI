from flask import Flask, jsonify, request
import os
from openai import OpenAI
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.route('/api/chat', methods=['POST'])
def chat_with_gpt():
    prompt = request.json.get("prompt")
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages = [
        {"role": "system", "content": "You are Jarvis, an AI assistant. Respond in a polite and informative manner. Like in the ironman movie"},
        {"role": "user", "content": prompt}
    ]
    )
    return jsonify({"response": response.choices[0].message.content.strip()})

if __name__ == "__main__":
    app.run(debug=True)

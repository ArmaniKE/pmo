from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-2.0-flash')

chat_session = model.start_chat(history=[])

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_message = data['message']
        response = chat_session.send_message(user_message)
        return jsonify({
            'answer': response.text,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'answer': f"Sorry, I encountered an error: {str(e)}",
            'status': 'error'
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
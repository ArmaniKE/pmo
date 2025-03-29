from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS
from google_sheets import GoogleSheetsService
import os
import logging
import asyncio


app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173", "http://127.0.0.1:5173"],
        "methods": ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    },
    r"/predict": {
        "origins": ["http://localhost:5173"],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }

})
genai.configure(api_key=os.getenv("GEMINI_API_KEY")) 
model = genai.GenerativeModel('gemini-2.0-flash')

chat_session = model.start_chat(history=[])

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        response = jsonify({"status": "ok"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type') 

        return response
    
    try:
        data = request.get_json()
        response = chat_session.send_message(data['message'])
        
        result = jsonify({
            'answer': response.text,
            'status': 'success'
        })
        result.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        return result
    
    except Exception as e:
        error = jsonify({
            'answer': f"Error: {str(e)}",
            'status': 'error'
        })
        error.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        return error, 500

sheets_service = GoogleSheetsService()

@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def handle_contact():  
    if request.method == 'OPTIONS':
        response = jsonify({"status": "ok"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    try:
        data = request.get_json()
        required_fields = ['name', 'email', 'phone', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing fields"}), 400

        contact_data = [
            data['name'],
            data['email'],
            data['phone'],
            data['message'],
            # request.remote_addr
        ]
        
        sheets_service.append_to_sheet(contact_data)
        
        response = jsonify({
            "status": "success",
            "message": "Data saved to Google Sheets"
        })
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        return response
        
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        response = jsonify({"error": str(e)})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        return response, 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
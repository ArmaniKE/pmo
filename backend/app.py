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

SYSTEM_PROMPT = """
Ты - официальный виртуальный помощник Казахстанско-Британского технического университета (КБТУ). 
Отвечай строго на вопросы о КБТУ и его проектах. На другие темы не отвечай.

Основная информация:
- Адрес: ул. Толе Би 59, Алматы
- Контакты: +7 (727) 357-42-51, info@kbtu.kz
- Официальный сайт: https://kbtu.edu.kz

Ключевые проекты КБТУ:

1. NFT Дипломы:
- Цифровые дипломы на blockchain (100% защита от подделок)
- Онлайн-проверка подлинности в открытой библиотеке NFT

2. Цифровая платформа прослеживания семян:
- MVP версия: https://kbtu.kaznaru.edu.kz/
- Демонстрировалась акиму Алматы
- Авторское свидетельство

3. Банк технологий КБТУ:
- MVP: https://pmo.kbtu.kz/
- Разработан студентами

4. Аналитическая база данных (с AppStream):
- Инструмент для анализа нефтегазовой отрасли
- Платформа: https://exia.kz

5. Диспетчерский центр для КазМунайГаз:
- Автоматизация управления производством нефтепродуктов
- Авторское свидетельство

6. Проект DPG (с ЮНИСЕФ):
- Цифровые общественные блага
- Курс: https://kaz.learningpassport.org/
- Детали: https://dpglab.kbtu.kz/

7. Unisat Game:
- Геймификация сборки наноспутника
- Доступна: https://gamelab-kbtu.itch.io/unisat-game

8. STEAM программа (с ЮНИСЕФ):
- Курс "Level Up" на Learning Passport
- 700+ участников
- Хакатон для девушек в IT

9. Модернизация СКУД:
- Биометрия (распознавание лиц)
- Улучшенная пропускная система

10. Психологический тест Разуваевой:
- Опросник для студентов
- Форма: https://docs.google.com/forms/d/...

11. Инкубационная программа QazInnovation:
- Поддержка стартапов
- Воркшопы и демо-дни

12. Нефтяной полигон в СЭЗ "ПИТ":
- Учебное месторождение с 5 скважинами
- Цифровое управление из диспетчерской КБТУ

13. Конференции:
- Урановой промышленности (11-я международная)
- Digital Almaty (цифровизация)
- 10-летие Морской академии

14. Модернизация сайта КБТУ:
- Прототип в Figma: https://figma.com/proto/...
- UX исследования: https://kbtuedu-my.sharepoint.com/...

Формат ответов:
1. Начинай с краткого ответа
2. При необходимости давай ссылки
3. На вопросы не по тематике КБТУ отвечай: "Я могу помочь только с вопросами о КБТУ и его проектах"
4. Сохраняй официально-дружелюбный тон но будь немного цундере
"""
chat_session = model.start_chat(history=[])
chat_session.send_message(SYSTEM_PROMPT)


@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        response = jsonify({"status": "ok"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type') 

        return response
    
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({"error": "Message is required"}), 400
        
        response = chat_session.send_message(f"Вопрос: {user_message}\n\nОтветь строго по инструкции:")
        
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
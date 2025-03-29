import os
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import logging
from dotenv import load_dotenv  

load_dotenv()

class GoogleSheetsService:
    def __init__(self):
        self._setup_client()

    def _setup_client(self):
        try:
            credentials_info = {
                "type": "service_account",
                "client_email": os.getenv("GOOGLE_CLIENT_EMAIL"),
                "private_key": os.getenv("GOOGLE_PRIVATE_KEY").replace('\\n', '\n'),
                "token_uri": "https://oauth2.googleapis.com/token"
            }
            
            credentials = service_account.Credentials.from_service_account_info(
                credentials_info,
                scopes=["https://www.googleapis.com/auth/spreadsheets"]
            )
            
            self.service = build('sheets', 'v4', credentials=credentials)
            logging.info("Google Sheets client initialized successfully")
            
        except Exception as e:
            logging.error(f"Error initializing Google Sheets client: {str(e)}")
            raise

    def append_to_sheet(self, data: list): 
        try:
            spreadsheet_id = os.getenv("GOOGLE_SHEET_ID")
            body = {'values': [data]}
            
            result = self.service.spreadsheets().values().append(
                spreadsheetId=spreadsheet_id,
                range="'Лист1'!A1:F1",
                valueInputOption='RAW',
                insertDataOption='INSERT_ROWS',
                body=body
            ).execute()
            
            logging.info(f"Data appended: {result}")
            return True
        except Exception as e:
            logging.error(f"Error: {str(e)}")
            raise
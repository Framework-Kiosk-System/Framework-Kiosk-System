import sqlite3, os
from pathlib import Path

class DatabaseConnector:
    
    def __init__(self) -> None:
        self.db_connection: sqlite3.Connection
    
    def CreateDatabase(self, file_path: str):
        with open(f"{file_path}.db", 'w') as db_file:
            self.db_connection = sqlite3.connect(f"{file_path}.db")
        
    def DeleteDatabase(self, file_path: str):
        if os.path.exists(f"{file_path}.db"):
            os.remove(f"{file_path}.db")
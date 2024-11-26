import unittest, os
from TableGenerator.DatabaseConnector import DatabaseConnector

class DatabaseConnectorTest(unittest.TestCase):
    
    def setUp(self) -> None:
        self.db_connector = DatabaseConnector()
    
    def CreateTest(self):
        self.db_connector.CreateDatabase("Testing/test.db")
        self.assertEqual(os.path.exists("Testing/test.db"), True)
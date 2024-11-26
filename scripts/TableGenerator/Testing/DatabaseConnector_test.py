import unittest

from TableGenerator.DatabaseConnector import DatabaseConnector

class DatabaseConnectorTest(unittest.TestCase):
    
    def setUp(self) -> None:
        self.db_connector = DatabaseConnector()
    
    def CreateTest(self):
        pass
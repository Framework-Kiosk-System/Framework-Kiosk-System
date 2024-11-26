import argparse
from .DatabaseConnector import DatabaseConnector

def ParseArguments():

    parser = argparse.ArgumentParser(prog='TableGenerator', description='Builds Tables & API Interfaces for them.')
    general = parser.add_argument_group('general')
    general.add_argument('-c', '--create', help='Creates a new Database')
    general.add_argument('-d', '--delete', help='Deletes Database')

    args = parser.parse_args()
    return  args.create, args.delete

def main():
    create, delete = ParseArguments()
    
    connector = DatabaseConnector()
    if create:
        connector.CreateDatabase(create)

if __name__ == '__main__':
    main()
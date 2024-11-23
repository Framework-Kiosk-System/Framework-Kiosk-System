import argparse

parser = argparse.ArgumentParser(prog='TableGenerator', description='Builds Tables & API Interfaces for them.')
general = parser.add_argument_group('general')
general.add_argument('-c', '--create', help='Creates a new Database')
general.add_argument('-d', '--delete', help='Deletes Database')

args = parser.parse_args()

def main():
    print("That worked")
    print(args)

if __name__ == '__main__':
    print("Yarak")
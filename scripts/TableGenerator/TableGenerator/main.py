from argparse import ArgumentParser

parser = ArgumentParser(prog='TableGenerator', description='Builds Tables & API Interfaces for them.')
general = parser.add_mutually_exclusive_group()
general.add_argument('-c', '--create', help='Creates a new Database')
general.add_argument('-d', '--delete', help='Deletes Database')
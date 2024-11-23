from setuptools import setup
from TableGenerator import __version__

setup(
   name='tablegenerator',
   version=__version__,
   description='A useful module',
   author='Fynn Schotten',
   author_email='fynnschotten@gmail.com',
   packages=['tablegenerator'],
   entry_points={
      'console_scripts': ['tablegenerator=TableGenerator.main:main'],
   }
)
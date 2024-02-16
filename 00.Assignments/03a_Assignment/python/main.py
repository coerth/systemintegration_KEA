from fastapi import FastAPI
from data.Python.file_type_reader import read_json_from_file, read_csv_from_file_pandas, read_xml_from_file, read_yaml_from_file, read_text_file
import os
from pathlib import Path


app = FastAPI()

json_file_path = os.path.join(Path(__file__).parent,"data","data", 'me.json')
csv_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.csv')
xml_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.xml')
yaml_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.yaml')
txt_file_path = os.path.join(Path(__file__).parent.parent.parent, 'me.txt')


@app.get("/")
def root():
    return {"message": "Welcome to our first server"}

@app.get("/firstRoute")
def root():
    return {"message": "First route. Home of cuban Pete",
            "cuban": "Pete"
            }

# make endpoint that takes the python filereader function from the data folder and returns the data
@app.get("/readJSON")
def read_json():
    return read_json_from_file('00.Assignments\03a_Assignment\data\data\me.json')

@app.get("/readCSV")
def read_csv():
    return read_csv_from_file_pandas('00.Assignments\03a_Assignment\data\data\me.csv')

@app.get("/readXML")
def read_xml():
    return read_xml_from_file('00.Assignments\03a_Assignment\data\data\me.xml')

@app.get("/readYAML")
def read_yaml():
    return read_yaml_from_file('00.Assignments\03a_Assignment\data\data\me.yaml')

@app.get("/readText")
def read_text():
    return read_text_file('00.Assignments\03a_Assignment\data\data\me.txt')

# %%

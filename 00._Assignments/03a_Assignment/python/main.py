from fastapi import FastAPI
from file_type_reader import read_JSON_from_file, read_XML_from_file, read_YAML_from_file, read_text_file, read_CSV_from_file_pandas
import os
import requests
from pathlib import Path

app = FastAPI()

json_file_path = os.path.join(Path(__file__).parent.parent,"data", 'me.json')
csv_file_path = os.path.join(Path(__file__).parent.parent,"data", 'me.csv')
xml_file_path = os.path.join(Path(__file__).parent.parent,"data", 'me.xml')
yaml_file_path = os.path.join(Path(__file__).parent.parent,"data", 'me.yaml')
txt_file_path = os.path.join(Path(__file__).parent.parent,"data", 'me.txt')

@app.get("/")
def root():
    return {"message": "Welcome to our first server"}

@app.get("/firstRoute")
def root():
    return {"message": "First route. Home of cuban Pete",
            "cuban": "Pete"
            }

# make endpoint that takes the python filereader function from the data folder and returns the data
@app.get("/json")
def read_json():
    return read_JSON_from_file(json_file_path)

@app.get("/nodejson")
def read_nodejson():

    resp = requests.get('http://localhost:8080/json')
    data = resp.json()

    return {"data": data}

@app.get("/csv")
def read_csv():
    return read_CSV_from_file_pandas(csv_file_path)

@app.get("/nodecsv")
def read_nodecsv():
    resp = requests.get('http://localhost:8080/csv')
    data = resp.json()

    return {"data": data}

@app.get("/xml")
def read_xml():
    return read_XML_from_file(xml_file_path)

@app.get("/nodexml")
def read_nodeXML():
    resp = requests.get('http://localhost:8080/xml')
    data = resp.json()

    return {"data": data}

@app.get("/yaml")
def read_yaml():
    return read_YAML_from_file(yaml_file_path)

@app.get("/nodeyaml")
def read_nodeYAML():
    resp = requests.get('http://localhost:8080/yaml')
    data = resp.json()

    return {"data": data}

@app.get("/txt")
def read_text():
    return read_text_file(txt_file_path)

@app.get("/nodetxt")
def read_nodeText():
    resp = requests.get('http://localhost:8080/txt')
    data = resp.json()

    return {"data": data}

# %%

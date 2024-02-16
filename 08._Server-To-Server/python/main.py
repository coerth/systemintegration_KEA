from fastapi import FastAPI
import requests

app = FastAPI()


@app.get("/fastapiData")
def root():
    return {"data": [1,2,3,4,5,6,7,8,9,10]
            }

@app.get("/")
def root():
    return {"message": "Welcome to our first server"}

@app.get("/expressData")
def root():
    # Get data from express server
    resp = requests.get('http://localhost:8080/nodeData')
    data = resp.json()

    return {"data": data}
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Welcome to our first server"}

@app.get("/firstRoute")
def root():
    return {"message": "First route. Home of cuban Pete",
            "cuban": "Pete"
            }


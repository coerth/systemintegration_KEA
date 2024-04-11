from fastapi import FastAPI, Form

app = FastAPI()

@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(...)):
    print(username, password)
    return {}

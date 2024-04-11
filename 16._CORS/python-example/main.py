from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

#PORT
import os
port = int(os.environ.get("PORT", 8000))

#CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/timestamp")
async def read_timestamp():
    return {"timestamp": datetime.now()}

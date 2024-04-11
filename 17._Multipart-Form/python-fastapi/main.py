from fastapi import FastAPI, Form, File, UploadFile
import aiofiles
from typing import Optional

app = FastAPI()

@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(...)):
    print(username, password)
    return {}

# @app.post("/fileform")
# def file_form(file:bytes =File(...)):
#     with open('file', 'wb') as f:
#         f.write(file)

#         return {"message": "File uploaded successfully"}
    
# @app.post("/fileform")
# def file_form(file: UploadFile = File(...)):
#     with open('file', 'wb') as f:
#         f.write(file.file.read())

#         return {"message": "File uploaded successfully"}

# @app.post("/fileform")
# async def file_form(file: UploadFile = File(...)):
#     safe_filename = file.filename.replace('/', '_').replace('\\', '_')
#     with open(safe_filename, 'wb') as f:
#         # walrus operator
#         while content:= await file.read(1024): #read 1kb at a time
#             f.write(content)

@app.post("/fileform")
async def file_form(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    safe_filename = file.filename.replace('/', '_').replace('\\', '_')
    with aiofiles.open(safe_filename, 'wb') as f:
        # walrus operator
        while content:= await file.read(1024): #read 1kb at a time
            await f.write(content)
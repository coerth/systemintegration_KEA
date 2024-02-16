import express from 'express';

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});

app.get('/requestFastAPI', async (req, res) => {
    //send request to FastAPI

    const url = "http://localhost:8000/fastapiData";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    res.send({data});
});

app.get("/nodeData" , (req, res) => {
    res.send({message: "This is from the Node.js server!", data: {name: "Node.js", version: "14.17.0"}});
});
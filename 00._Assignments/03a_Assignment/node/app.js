import express from 'express';
import { readYAMLFromFile, readJSONFromFile, readXMLFromFile, readCSVFromFile, readTextFile } from './FileReader.js';
import fetch from 'node-fetch';

const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

app.get('/json', (req, res) => {
    res.json(readJSONFromFile('../data/me.json'));
});

app.get('/pythonjson', async (req, res) => {
    const url = "http://localhost:8000/json";
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

app.get('/xml', (req, res) => {
    res.json(readXMLFromFile('../data/me.xml'));
});

app.get('/pythonxml', async (req, res) => {
    const url = "http://localhost:8000/xml";
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

app.get('/yaml', (req, res) => {
    res.json(readYAMLFromFile('../data/me.yaml'));
});

app.get('/pythonyaml', async (req, res) => {
    const url = "http://localhost:8000/yaml";
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

app.get('/csv', (req, res) => {
    readCSVFromFile('../data/me.csv')
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json({error: error});
    });
});

app.get('/pythoncsv', async (req, res) => {
    const url = "http://localhost:8000/csv";
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

app.get('/txt', (req, res) => {
    res.json(readTextFile('../data/me.txt'));
});

app.get('/pythontxt', async (req, res) => {
    const url = "http://localhost:8000/txt";
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



const PORT = 8080
app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});
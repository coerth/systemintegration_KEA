import express from 'express';
//import the jsfilereader module
// import readJSONFromFile from '../../01a Assignment/JS/fileReader.js';

import pkg from '../../01a Assignment/JS/fileReader.js';
const { readYAMLFromFile, readJSONFromFile, readXMLFromFile, readCSVFromFile, readTextFile } = pkg;

const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

app.get('/otherRoute', (req, res) => {
    res.send({message: 'Other Route'});
});

app.post('/postRequest', (req, res) => {
    res.send({message: 'Post Request'});
});

app.get('/json', (req, res) => {
    res.json(readJSONFromFile('../../01a Assignment/data/me.json'));
});

app.get('/xml', (req, res) => {
    res.json(readXMLFromFile('../../01a Assignment/data/me.xml'));
});

app.get('/yaml', (req, res) => {
    res.json(readYAMLFromFile('../../01a Assignment/data/me.yaml'));
});

app.get('/csv', (req, res) => {
    readCSVFromFile('../../01a Assignment/data/me.csv')
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json({error: error});
    });
});

app.get('/txt', (req, res) => {
    res.json(readTextFile('../../01a Assignment/data/me.txt'));
});

const PORT = 8080
app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});
import express from 'express';
import * as readerFunctions from './fileReader.js';

const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

app.get('/json', (req, res) => {
    res.json(readerFunctions.readJSONFromFile('../data/me.json'));
});

app.get('/xml', (req, res) => {
    res.json(readerFunctions.readXMLFromFile('../data/me.xml'));
});

app.get('/yaml', (req, res) => {
    res.json(readerFunctions.readYAMLFromFile('../data/me.yaml'));
});

app.get('/csv', (req, res) => {
    readerFunctions.readCSVFromFile('../data/me.csv')
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json({error: error});
    });
});

app.get('/txt', (req, res) => {
    res.json(readerFunctions.readTextFile('../data/me.txt'));
});

const PORT = 8080
app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});
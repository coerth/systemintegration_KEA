// Import the functions
const { decode } = require('punycode');
const readerFunctions = require('./fileReader.js');
const path = require('path');

const dataFolder = path.join(__dirname, '..', '..');

// Subfolders for each data type
const yamlFolderPath = path.join(dataFolder, 'me.yaml');
const jsonFolderPath = path.join(dataFolder, 'me.json');
const xmlFolderPath = path.join(dataFolder, 'me.xml');
const csvFolderPath = path.join(dataFolder, 'me.csv');
const txtFolderPath = path.join(dataFolder, 'me.txt');

console.log(dataFolder)

// Example usage
const yamlData = readerFunctions.readYAMLFromFile(yamlFolderPath);
console.log(yamlData);

const jsonData = readerFunctions.readJSONFromFile(jsonFolderPath);
console.log(jsonData);

const xmlData = readerFunctions.readXMLFromFile(xmlFolderPath);
console.log(xmlData);

const csvData = readerFunctions.readCSVFromFile(csvFolderPath);
console.log(csvData);

const txtData = readerFunctions.readTextFile(txtFolderPath);
console.log(txtData);


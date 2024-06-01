// Import the functions
import * as readerFunctions from './fileReader.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFolder = join(__dirname, '..', 'data');

// Subfolders for each data type
const yamlFolderPath = join(dataFolder, 'me.yaml');
const jsonFolderPath = join(dataFolder, 'me.json');
const xmlFolderPath = join(dataFolder, 'me.xml');
const csvFolderPath = join(dataFolder, 'me.csv');
const txtFolderPath = join(dataFolder, 'me.txt');

console.log(dataFolder)

// Example usage
const yamlData = readerFunctions.readYAMLFromFile(yamlFolderPath);
console.log(yamlData);

const jsonData = readerFunctions.readJSONFromFile(jsonFolderPath);
console.log(jsonData);

const xmlData = readerFunctions.readXMLFromFile(xmlFolderPath);
console.log(xmlData);

const csvData = readerFunctions.readCSVFromFile(csvFolderPath)
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});

const txtData = readerFunctions.readTextFile(txtFolderPath);
console.log(txtData);


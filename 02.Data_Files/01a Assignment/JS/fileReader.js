const fs = require('fs');
const yaml = require('js-yaml');
const xml2js = require('xml2js');
const csv = require('csv-parser');

function readYAMLFromFile(path) {
    try {
      const fileContents = fs.readFileSync(path, 'utf8');
      const data = yaml.load(fileContents);
      return data;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error(`Error: File not found at ${path}`);
      } else {
        console.error(`An unexpected error occurred: ${error.message}`);
      }
    }
  }

  function readJSONFromFile(path) {
    try {
      const fileContents = fs.readFileSync(path, 'utf8');
      const data = JSON.parse(fileContents);
      return data;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error(`Error: File not found at ${path}`);
      } else {
        console.error(`An unexpected error occurred: ${error.message}`);
      }
    }
  }

  function readXMLFromFile(path) {
    try {
      const fileContents = fs.readFileSync(path, 'utf8');
      let data;
      xml2js.parseString(fileContents, (err, result) => {
        if (err) {
          throw err;
        }
        data = result;
      });
      return data;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error(`Error: File not found at ${path}`);
      } else {
        console.error(`An unexpected error occurred: ${error.message}`);
      }
    }
  }

  function readCSVFromFile(path) {
    try {
      const fileContents = fs.readFileSync(path, 'utf8');
      const data = [];
  
      fileContents
        .split('\n')
        .forEach((line) => {
          if (line.trim() !== '') {
            data.push(line.split(','));
          }
        });
  
      return data;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error(`Error: File not found at ${path}`);
      } else {
        console.error(`An unexpected error occurred: ${error.message}`);
      }
    }
  }

  function readTextFile(filePath) {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const lines = fileContents.split('\n').map(line => line.trim());
      
      // Assuming the order is fixed and known
      const data = {
        name: lines[0],
        money: parseInt(lines[1]),
        country: lines[2],
        alcoholTolerance: lines[3],
        hobbies: lines[4].split(',').map(hobby => hobby.trim())
      };
  
      return data;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error(`Error: File not found at ${filePath}`);
      } else {
        console.error(`An unexpected error occurred: ${error.message}`);
      }
    }
  }

module.exports = {
readYAMLFromFile,
readJSONFromFile,
readXMLFromFile,
readCSVFromFile,
readTextFile,
};
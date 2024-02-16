const fs = require('fs');
const csv = require('csv-parser');
const yaml = require('js-yaml');
const xml2js = require('xml2js');

// import fs from 'fs';
// import csv from 'csv-parser';
// import yaml from 'js-yaml';
// import xml2js from 'xml2js';


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
      const parser = new xml2js.Parser({explicitArray : false});
      parser.parseString(fileContents, (err, result) => {
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
  return new Promise((resolve, reject) => {
      try {
          const data = [];
          fs.createReadStream(path)
              .pipe(csv())
              .on('data', (row) => {
                  // Split the 'hobbies' field into an array of strings
                  row.hobbies = row.hobbies.split(',');
                  data.push(row);
              })
              .on('end', () => {
                  resolve(data);
              })
              .on('error', (error) => {
                  if (error.code === 'ENOENT') {
                      console.error(`Error: File not found at ${path}`);
                  } else {
                      console.error(`An unexpected error occurred: ${error.message}`);
                  }
                  reject(error);
              });
      } catch (error) {
          reject(error);
      }
  });
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
    readTextFile
  };

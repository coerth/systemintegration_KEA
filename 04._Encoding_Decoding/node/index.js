//encode a string
function encodeString(string) {
    return Buffer.from(string).toString('base64');
  }
  
//decode a string
function decodeString(string) {
return Buffer.from(string, 'base64').toString('utf8');
}

const base64EncodedString = btoa('Hello, World!');
console.log(base64EncodedString);

const base64DecodedString = atob(base64EncodedString);

console.log(base64DecodedString);
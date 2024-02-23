console.log(new Date());

console.log(Date());

console.log(Date.now());

// 8601  - ISO 8601 Date and Time format

const date = new Date()

const danishDate = Intl.DateTimeFormat('da-dk').format(date);
console.log(danishDate);

const americanDate = Intl.DateTimeFormat('en-us').format(date);
console.log(americanDate);


// iso 9001 standard

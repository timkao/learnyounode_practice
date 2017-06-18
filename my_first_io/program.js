var fs = require('fs');
var testFile = fs.readFileSync(process.argv[2]).toString();
var resultArray = testFile.split('\n');

console.log(resultArray.length - 1);
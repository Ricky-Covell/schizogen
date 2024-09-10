const fs = require("fs");

function writeArray(data){
    fs.writeFile('englishWords.js', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully\n");
        }
    })
}

fs.readFile('englishWords.txt', 'utf8', function (err,data) {
  if (err) { return console.log(err); }
  let returnString = 'let englishDictionary = [ '
  let toArray = data.split('\n');


  for (let line of toArray){
    returnString += `\`${line}\`, `
  }

  returnString += ' ]'
  writeArray(returnString);
});




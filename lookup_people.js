const tscript = require('./test_script');

const name = process.argv[2];
const nameID = Number.parseInt(name);
// console.log(nameID)
// console.log(Number.isNaN(nameID))

if (name) {
  tscript.findPerson(name);
}



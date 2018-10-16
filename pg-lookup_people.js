const tscript = require('./test_script');

const name = process.argv[2];



if (name) {
  tscript.findPerson(name);
}



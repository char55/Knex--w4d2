const pg = require("pg");
const settings = require("./settings"); // settings.json



const client = new pg.Client({
  user : settings.user,
  password : settings.password,
  database : settings.database,
  host : settings.host,
  port : settings.port,
  ssl : settings.ssl
});


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
});


const findPerson = function(name) {
  client.query('SELECT * FROM famous_people WHERE first_name=$1::text', [name], function(err, results) {
    console.log('Searching...')
    print(name, results.rows)
    client.end();
  });
};



const print = function(name, found) {
  console.log('Found ', found.length, ' person(s) by the name ', name);
  found.forEach(person => {
    console.log(`- ${person.id} : ${person.first_name} ${person.last_name}, born ${person.birthdate}`)
  })
};


module.exports = {
  findPerson: findPerson,
  print: print
};
// const pg = require("pg");
const settings = require('./settings'); // settings.json
const name = process.argv[2]


var knex = require('knex')({
  client: 'pg',
  connection : {
  user : settings.user,
  password : settings.password,
  database : settings.database,
  host : settings.host,
  port : settings.port,
  ssl : settings.ssl
  }
})


const findPersonByFirstName = function(name) {
knex
  .select('*')
  .from('famous_people')
  .where({first_name : name})
  .then((rows) => {
    rows.forEach(person => {
      console.log(`- ${person.id} : ${person.first_name} ${person.last_name}, born ${person.birthdate}`)
    })
  })
  .catch((err) => { console.log(err); throw err } )
  .finally(() => {
    knex.destroy();
  })
}



if (name) {
  findPersonByFirstName(name)
} else {
  console.log('Error no name')
}

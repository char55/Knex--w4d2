const settings = require('./settings')
const params = process.argv.slice(2);


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


const add_person = function(strParams) {
  const addition = [
    {
      first_name : strParams[0],
      last_name  : strParams[1],
      birthdate  : strParams[2]
    }
  ]
  knex('famous_people')
    .insert(addition)
    .then(() => console.log('sucess'))
    .catch((err) => { console.log(err); throw err})
    .finally(() => {
      knex.destroy()
    })

}

add_person(params)
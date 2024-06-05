const mysql2 = require('mysql2');


// development  
// const pool = mysql2.createPool({
//   host: "localhost",
//   user: "forumadmin",
//   password: "123456789",
//   database: "evangadiforum",
//   connectionLimit: 10
// })



// // production
const pool = mysql2.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
})



module.exports = pool.promise()

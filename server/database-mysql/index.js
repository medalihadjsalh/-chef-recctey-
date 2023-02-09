const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'data1'
});
connection.connect((err)=>(
 err?console.log(err):console.log("db connected")
))

module.exports = connection;
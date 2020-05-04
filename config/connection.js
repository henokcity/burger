//Require mysql npm package to create a connection to the mysql database.
var mysql = require("mysql");

//Use production database when deployed.
if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
  //else use localhost database for local development.
  //MySQL password is passed into connection.js from the .env file using the dotenv npm package.
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
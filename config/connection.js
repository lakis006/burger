const mysql = require('mysql');
 const connection = mysql.createConnection ({
	host: "localhost",
	port: 3306,
 	user: "root",
 	password: "#Jsquadisgr8",
	database: "burgers_db",
	multipleStatements: true 
 });
 
 connection.connect(function(err) {
 	if (err) {
	 console.error("Error connecting: " + err.stack);
	 return;
	}
	console.log("connected as id " + connection.threadId);
 });
 
 module.exports = connection; 
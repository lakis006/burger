var mysql = require("mysql");

var source = {
    localhost: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "#Jsquadisgr8",
        database: "burgers"
    }
}

var connection;

if(process.env.JAWSDB_URL) {

connection= mysql.createConnection(process.env.JAWSDB_URL)
} else {
    mysql.createConnection(source.localhost);
}
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
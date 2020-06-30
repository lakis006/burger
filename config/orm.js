var connection = require("./connection.js");

var tableName = "burgers";

var orm = {
    selectAll: function(callback) {
        var s = "SELECT * FROM" +  tableName;

        connection.query(s, function(err, result) {
            callback(result);
        });
    },



    insertOne: function(insert, callback) {
        var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        insert.complete = insert.complete || 0;
        connection.query(s, [insert.text, insert.complete], function(err, result) {
            callback(result)
        });
    },


    updateOne: function(insert, callback) {
        var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(s, [
            insert.text, insert.id
        ], function(err, result) {
            callback(result)
        });
    }

};

module.exports = orm;
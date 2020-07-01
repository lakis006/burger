var connection = require("./connection.js");

var tableName = "burgers";

var orm = {
    selectAll: function(cb) {
        var s = "SELECT * FROM" +  tableName;

        connection.query(s, function(err, result) {
            cb(result);
        });
    },



    insertOne: function(insert, cb) {
        var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        insert.complete = insert.complete || 0;
        connection.query(s, [insert.text, insert.complete], function(err, result) {
            cb(result)
        });
    },


    updateOne: function(insert, cb) {
        var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(s, [
            insert.text, insert.id
        ], function(err, result) {
            cb(result)
        });
    }

};

module.exports = orm;
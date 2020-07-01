var connection = require("./connection.js");

var tableName = "burgers";

var orm = {
    selectAll: function(cb) {
        var s = "SELECT * FROM" +  tableName;
        cb = function() {
            connection.query(s, function(err, result) {
                return result;
            });
        }
        
        return cb;
    },



    insertOne: function(insert, cb) {
        var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        insert.complete = insert.complete || 0;
        cb = function() {
            connection.query(s, [insert.text, insert.complete], function(err, result) {
                return result;
            });
        }
        return cb;
    },


    updateOne: function(insert, cb) {
        var s = "UPDATE " + tableName + " SET text=? WHERE id=?";
        cb = function() {
            connection.query(s, [
                insert.text, insert.id
            ], function(err, result) {
                return result;
            });
        }
        return cb;
    }

};

module.exports = orm;
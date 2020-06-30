const orm = require("../config/orm.js");


let mainFunctions = {
    selectAll: function (callback) {
        orm.selectAll("burgers" , function (res) {
            callback(res);
        });
    },
    insertOne: function (callback) {
        orm.insertOne("burgers", function (res) {
            callback(res);
        });
    },
    updateOne: function (id, callback) {
        orm.updateOne("burgers", "devoured", false, id, function (res) {
            callback(res);
        });
    }
};


module.exports = mainFunctions;
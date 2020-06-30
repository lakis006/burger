const express = require("express");
const router = express.Router();
const mainFunctions = require("../models/burger.js");

router.get("/", function (req, res) {
    mainFunctions.selectAll(function (input) {
        let result = {
            mainFunctions: input
        };
        res.render("index", result);
    });
});

router.put("/burgers", function (req, res) {
    mainFunctions.insertOne([], function (input) {
    });
});

router.post("/burgers", function (req, res) {
    burger.updateOne([], function (input) {
    });
});

module.exports = router;
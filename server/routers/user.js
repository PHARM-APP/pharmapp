var express = require("express");
var user = require("../../DB/controler/userControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {});

module.exports = router;

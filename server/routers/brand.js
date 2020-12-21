var express = require("express");
var { createbrand, findbrand } = require("../../DB/controler/brandControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {
  findbrand((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});
router.route("/").post(function (req, res) {
  console.log(req.body);
  createbrand(req.body, (er, data) => {
    if (er) {
      res.sendStatus(500);
    }
    res.send("brand add it");
  });
});
module.exports = router;

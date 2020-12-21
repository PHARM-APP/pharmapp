var express = require("express");
var {
  createcategorie,
  findcategorie
} = require("../../DB/controler/categorieControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {
  findcategorie((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});
router.route("/").post(function (req, res) {
  console.log(req.body);
  createcategorie(req.body, (er, data) => {
    if (er) {
      res.sendStatus(er);
    }
    res.send(data);
  });
});
module.exports = router;

var mongoose = require("mongoose");
var express = require("express");
var {
  createone,
  findAll,
  deleteCustumer,
  updatecustumer
} = require("../../DB/controler/custumerControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {
  findAll(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
router.route("/").post(function (req, res) {
  createone(req.body, function (err, data) {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
router.route("/:_id").delete(function (req, res) {
  deleteCustumer({ _id: req.params._id }, function (err, data) {
    console.log(req.params._id);
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.send(data);
    }
  });
});
router.route("/").put(function (req, res) {
  console.log(req.body);
  updatecustumer(req.body, function (err, data) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;

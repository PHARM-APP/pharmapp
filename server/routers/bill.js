var mongoose = require("mongoose");
var express = require("express");
var {
  createone,
  findAll,
  updatebill,
  deletebill
} = require("../../DB/controler/billcontrole.js");

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

router.post("/cart", (request, response) => {
  const { quantity, totalAmount, totalDiscount, MRid, productId } = req.body;
  createone(req, body)
    .then((res) => res.send(res))
    .catch((err) => console.log(err));
});

router.route("/").post(function (req, res, next) {
  console.log(req.body);
  res.send(req.body);
  createone(req.body)
    .then((res) => res.send(res))
    .catch((err) => console.log(err));
});

router.route("/:id").delete((req, res) => {
  console.log(req.params.id);
  deletebill(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/").post(function (req, res) {
  console.log(req.body);
  res.send(req.body);
  createone(req.body)
    .then((res) => res.send(res))
    .catch((err) => console.log(err));
  //   function (err, data) {
  //   console.log(req.body);
  //   if (err) {
  //     console.log(err);
  //     res.send("hello oussema");
  //   } else {
  //     res.send(data);
  //   }
  // });
});

router.route("/").put(function (req, res) {
  console.log(req.body);
  updatebill(req.body, function (err, data) {
    if (err) {
      console.log(err);
      res.send("hello oussema");
    } else {
      res.send(data);
    }
  });
});

module.exports = router;

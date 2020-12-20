var express = require("express");
const router = express.Router();
var { Model } = require("../../DB/models/userModel");
var passport = require("passport");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

router.route("/login").post(function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send(err);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(req.user);
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.route("/register").post(function (req, res) {
  Model.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new Model({
        username: req.body.username,
        password: hashedPassword,
        role: "register",
        attempt: false
      });
      await newUser.save();
      res.send(req.body);
    }
  });
});
router.route("/user").get(function (req, res) {
  console.log(req.user, "hello");
  if (req.user) {
    Model.find({ username: req.user.username }, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  } else {
    res.send([{ username: "", role: "" }]);
  }
});

module.exports = router;

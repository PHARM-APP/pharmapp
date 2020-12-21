var express = require("express");
const router = express.Router();
const { statproduct } = require("../../DB/controler/stat.js");

router.route("/").get((req, res) => {
  statproduct((err, data) => {
    res.send(data);
  });
});

module.exports = router;

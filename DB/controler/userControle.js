var { Model } = require("../models/userModel.js");



var findone = function (user, callbacks) {
  Model.find({ username: user }).exec(callbacks);
};
var creatone = function ({ username, password }, callbacks) {
  const user = new Model({
    username: username,
    password: password,
    role: "register",
    attempt: true
  });
  user.creatone(user).exec(callbacks);
};
module.exports.findone = findone;
module.exports.creatone = creatone;


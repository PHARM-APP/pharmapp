var mongoose = require("mongoose");

var { CusModel } = require("../models/custumerModel.js");

var findAll = function (callbacks) {
  CusModel.find().exec(callbacks);
};
var createone = function (
  { id, name, genre, date, phone, email, points },
  callbacks
) {
  const custumer = new CusModel({
    id: id,
    name: name,
    genre: genre,
    date: date,
    phone: phone,
    email: email,
    points: points
  });
  custumer.save(callbacks);
};
var deleteCustumer = function (id, callbacks) {
  CusModel.findByIdAndRemove(id).exec(callbacks);
};
var updatecustumer = function (custumer, callbacks) {
  CusModel.findByIdAndUpdate(
    { _id: custumer._id },
    custumer,
    { upsert: true },
    callbacks
  );
};
var donothing = function (callbacks) {
  var x = 0;
};

module.exports.findAll = findAll;
module.exports.createone = createone;
module.exports.deleteCustumer = deleteCustumer;
module.exports.updatecustumer = updatecustumer;

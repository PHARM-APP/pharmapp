var mongoose = require("mongoose");
var { Modelproduct } = require("../models/productModel.js");
var { Modelbill } = require("../models/billModel.js");

var findAll = function (callbacks) {
  Modelbill.find().populate("custumer").populate("product").exec(callbacks);
};
var createone = async function ({ custumer, order, total }, callback) {
  const bill = new Modelbill({
    custumer: custumer,
    order: order,
    total: total
  });
  for (let i = 0; i < order.length; i++) {
    await Modelproduct.findByIdAndUpdate(order[i].product, {
      $inc: { quantity: -order[i].quantity }
    }).exec((er, data) => {
      console.log(data);
    });
  }
  bill.save((err, data) => {
    callback(err, data);
  });
};
var deletebill = function (id, callback) {
  Modelbill.findByIdAndRemove({ _id: id }).exec(callback);
};
// var updatebill = function (bill, callbacks) {
//   console.log("bill is", bill);
//   Modelbill.findByIdAndUpdate(
//     { _id: bill._id },
//     bill,
//     { upsert: true },
//     callbacks
//   );
// };

module.exports.findAll = findAll;
module.exports.createone = createone;
// module.exports.updatebill = updatebill;
module.exports.deletebill = deletebill;
module.exports.findAll = findAll;

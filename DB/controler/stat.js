const { Callbacks } = require("jquery");
const { Mongoose } = require("mongoose");
var { Modelbill } = require("../models/billModel.js");

// var statproduct = function (callback) {
//   Modelbill.aggregate([
//     {
//       $group: {
//         _id: "$custumer",
//         totalAmount: { $sum: "$total" }
//       }
//     }
//   ]).exec(callback);
// };
var statproduct = function (callback) {
  Modelbill.aggregate([
    {
      $unwind: "$order"
    },
    {
      $group: {
        _id: "$order.name",

        total: { $sum: "$order.quantity" }
      }
    }
  ]).exec(callback);
};
module.exports.statproduct = statproduct;

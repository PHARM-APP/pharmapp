const { Modelproduct } = require("../models/productModel");


module.exports.findproduct = function (callbacks) {
  Modelproduct.find({}).populate("brand").populate("categorie").exec(callbacks);
};


var update = function (obj, callback) {
  Modelproduct.findOneAndUpdate(
    { _id: obj._id },
    obj,
    { upsert: true },
    callback
  );
};
var deleteproduct = function (id, callback) {
  Modelproduct.findByIdAndRemove({ _id: id }).exec(callback);
};
module.exports.update = update;
module.exports.deleteproduct = deleteproduct;

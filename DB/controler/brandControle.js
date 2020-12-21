var { Modelbrand } = require("../models/brandModel.js");

var findbrand = function (callbacks) {
  Modelbrand.find().exec(callbacks);
};
var createbrand = function ({ id, name, description }, callbacks) {
  const brand = new Modelbrand({
    id: id,
    name: name,
    description: description
  });
  brand.save(callbacks);
};
module.exports.findbrand = findbrand;
module.exports.createbrand = createbrand;

var { Modelcategorie } = require("../models/categorieModel.js");

var findcategorie = function (callbacks) {
  Modelcategorie.find().exec(callbacks);
};
var createcategorie = function ({ id, name, description }, callbacks) {
  const categorie = new Modelcategorie({
    id: id,
    name: name,
    description: description
  });
  categorie.save(callbacks);
};
module.exports.findcategorie = findcategorie;
module.exports.createcategorie = createcategorie;

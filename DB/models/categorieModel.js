var mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  description: String
});

const Modelcategorie = mongoose.model("categorie", categorieSchema);

module.exports.Modelcategorie = Modelcategorie;

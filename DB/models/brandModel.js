var mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  description: String
});

const Modelbrand = mongoose.model("brand", brandSchema);

module.exports.Modelbrand = Modelbrand;

var mongoose = require("mongoose");
const custumerSchema = new mongoose.Schema({
  id:{ type: String,
    required: true,
    unique: true},
  name: { type: String,
    required: true},
  genre: String,
  date: String,
  phone:{ type: Number,
    required: true,
    unique: true},
  email: { type: String,
    required: true,
    unique: true},
  points: Number
});
var CusModel = mongoose.model("custumer", custumerSchema);
module.exports.CusModel = CusModel;

var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  },
  password: String,
  role: String,
  attempt: Boolean
});

const Model = mongoose.model("user", UserSchema);

module.exports.Model = Model;

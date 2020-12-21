var mongoose = require("mongoose");

const BillSchema = mongoose.Schema({
  custumer: { type: mongoose.Schema.Types.ObjectId, ref: "custumer" },
  order: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      quantity: Number,
      name: String
    }
  ],
  total: Number
});

const Modelbill = mongoose.model("bill", BillSchema);

module.exports.Modelbill = Modelbill;

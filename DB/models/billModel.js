var mongoose = require("mongoose");

const BillSchema = mongoose.Schema({
  custumer: { type: mongoose.Schema.Types.ObjectId, ref: "custumer" },
  order: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      quantity: Number,
      name: String,
      price: Number
    }
  ],
  total: Number
});

const Modelbill = mongoose.model("bill", BillSchema);

module.exports.Modelbill = Modelbill;

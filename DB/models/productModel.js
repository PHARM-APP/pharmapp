var mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  // categorie: { type: mongoose.Schema.Types.ObjectId, ref: "categorie" },
  // brand: { type: mongoose.Schema.Types.ObjectId, ref: "brand" },
  price: Number,
  discount: String,
  DoesInMG:String,
  quantity: Number,
  image: String,
  description: String
});

const Modelproduct = mongoose.model("product", productSchema);

module.exports.Modelproduct = Modelproduct;

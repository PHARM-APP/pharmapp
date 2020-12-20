var express = require("express");
const mongoose = require("mongoose");
// var {
//   createProduct,
//   findproduct,
//   update,
//   deleteproduct
// } = require("../../DB/controler/productControle.js");
const ProductControle = require("../../DB/controler/productControle.js");
var { Modelproduct } = require("../../DB/models/productModel");
const router = require("express").Router();

const multer = require("multer");

// const upload = multer();

// router.post('/',upload.single('file'),ProductControle.createProduct)
// router.get('/',ProductControle.findproduct)

const DIR = "./myapp/src/assets/uploads/products/";
var nom_file;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    nom_file = fileName;
    cb(null, fileName);
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});
router.post("/", upload.single("file"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const product = new Modelproduct({
    _id: new mongoose.Types.ObjectId(),
    id: req.body.id,
    name: req.body.name,
    price:req.body.price,
    discount: req.body.discount,
    doseInMG: req.body.doseInMG,
    quantity: req.body.quantity,
    image: nom_file,
    description: req.body.description
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User registered successfully!",
        productCreated: {
          _id: result._id,
          name: result.name,
          image: result.image
        }
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err
        });
    });
});

router.route("/").get(function (req, res) {
  ProductControle.findproduct((err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});




router.route("/:id").get((req, res) => {
  Modelproduct.findById({ _id: req.params.id }).exec(function (err, product) {
    if (err) {
      console.error("Error retrieving all product by id!");
    } else {
      console.log("server product = " + JSON.stringify(product));
      res.json(product);
    }
  });
});

router.route("/").put(function (req, res) {
  console.log(req.body);
  ProductControle.update(req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/:id").delete((req, res) => {
  console.log(req.params.id);
  ProductControle.deleteproduct(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
module.exports = router;

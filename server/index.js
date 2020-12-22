var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var auth = require("./routers/auth.js");
var user = require("./routers/user.js");
var product = require("./routers/product.js");
var categorie = require("./routers/categorie.js");
var brand = require("./routers/brand.js");
var custumer = require("./routers/custumer.js");
var mongoose = require("mongoose");
var passport = require("passport");
var passporLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bill = require("./routers/bill.js");
const stat = require("./routers/stat.js");
var app = express();

mongoose.connect(
  "mongodb+srv://nouha:nouha123@cluster0.swnxc.mongodb.net/pharm-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  { useMongoClient: true }
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error", err));

// app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("useCreateIndex", true);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:8000", //
//     credentials: true
//   })
// );

app.use(cookieParser("secretcode"));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./routers/passportConfig")(passport);

app.use("/api/auth", auth);

app.use("/api/user", user);

app.use("/api/product", product);

app.use("/api/categorie", categorie);

app.use("/api/brand", brand);

app.use("/api/custumer", custumer);

app.use("/api/stat", stat);

app.use("/api/bill", bill);
app.listen(3000, function () {
  console.log("listening on port 3000");
});

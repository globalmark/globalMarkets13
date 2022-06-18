const express = require("express");
const mongoose = require("mongoose");
const useRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const engine=require('ejs-mate');
const { Session } = require("inspector");
const port = process.env.PORT || 9000;
const session=require('express-session');
const flash= require('connect-flash');
const passport = require("passport");

//setting
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');

//middleware
app.use(passport.initialize());
app.use(session({
   secret:'danielpercoromero',
  resave:true,
  saveUninitialized:true
}))
app.use(flash());
app.use(morgan("dev")); // nos permite que la aplicacion muestre los datos que se estan enviando
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use((req,res,next)=>{
  
  res.locals.success_msg=req.flash('success_msg');

  next();
})
//Routes
app.use("/", useRoutes);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/test", (req, res) => {
  res.send({ status: "Bien!" });
})

//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect to MomgoDB Atlas"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("servidor escuchando ", port));
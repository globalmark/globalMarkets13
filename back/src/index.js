const express = require("express");
const mongoose = require("mongoose");
const useRoutes=require("./routes/index");
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
//const passport = require("passport");

// app.use(cors());

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));




// todo el mundo connect
// app.use( "/",function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", req.header('Origin'));
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
// app.use("/", function (req, res)  {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
//    });

//setting
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');

//middleware
// app.use(passport.initialize());
// app.use(passport.session());
app.use(session({
   secret:'danielpercoromero',
  resave:true,
  saveUninitialized:true
}))
app.use(flash());
app.use(morgan("dev")); // nos permite que la aplicacion muestre los datos que se estan enviando
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
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
app.use(express.urlencoded({ extended: false }));
app.use("/test", (req, res) => {
  res.send({ status: "Bien!" });
})

//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect to MomgoDB Atlas"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("servidor escuchando ", port));
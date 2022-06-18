const express = require('express');
const mongoose = require('mongoose');
const useRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const logger = require("morgan");


const port = process.env.PORT || 9000;
require('dotenv').config();
//middleware
app.use(morgan('tiny'));// nos permite que la aplicacion muestre los datos que se estan enviando
app.use(helmet())
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use('/', useRoutes);
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/test', (req, res) => {
    res.send({ status: 'Bien!' })
})
//Routes



//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("connect to MomgoDB Atlas")).catch(err => console.log(err));




app.listen(port, () => console.log('servidor escuchando ', port))

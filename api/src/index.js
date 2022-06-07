const express = require('express');
const mongoose = require('mongoose');
const useRoutes = require('./routes/index');

require('dotenv').config();
const app = express();


const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/', useRoutes);


//Routes



//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("connect to MomgoDB Atlas")).catch(err => console.log(err));




app.listen(port, () => console.log('servidor escuchando ', port))

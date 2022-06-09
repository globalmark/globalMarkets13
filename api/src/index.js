const express = require('express');
const mongoose = require('mongoose');
const useRoutes = require('./routes/index');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();
const app = express();


const port = process.env.PORT || 9000;

app.use(cors());
//middleware
app.use(express.json())
app.use(morgan('tiny'));
app.use(helmet());
app.use('/', useRoutes);

app.use('/test', (req, res) => {
    res.send({ status: 'Bien!' })
})


//Routes



//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("connect to MomgoDB Atlas")).catch(err => console.log(err));




app.listen(port, () => console.log('servidor escuchando ', port))

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "client"],
      message: "{values} no es un role válido",
      default: "client",
      required: true,
    },
<<<<<<< HEAD
  },
});
=======
    surname: {
        type: String,
        required: true

    },
    Username: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true,
        unique:true
    },
    dni:{
        type: Number,
        required: true

    },
    age: {
        type: Number,
        required: true

    },
    address: {
        type: String,
        required: true

    },
    phoneNumber:{
        type:Number,
        require:true
    },
    role:{
        type: String,
        enum:{
            values: ['admin','client'],
            message: '{values} no es un role válido',
            default: 'client',
            required: true
        }

    }
})



module.exports = mongoose.model('User', userSchema);
>>>>>>> 3ef89821c320638f6027b6f075359acc9f8b4d62

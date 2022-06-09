const { Console } = require('console');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const userSchema = require('../../models/user');
const createUsuario = (req, res) => {

    const errors = validationResult(req);
    let password = req.body.password;
    password = bcrypt.hashSync(password, 10);
    let username = req.body.Username;
    let email = req.body.email;
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    const user = userSchema(req.body);   // se requiere  bcrypt , validators de express-validator,moment,                                  //jwt-simp 
    user.save()
        .then((data) => {
            console.log(data);
            res.json(data);            //responde con los datos del usuario creado     
        })
        .catch((err) => {
            res.json({ message: err });
        });
}


module.exports = createUsuario;
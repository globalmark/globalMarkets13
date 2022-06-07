const userSchema = require('../../models/user');

const getIdUser = (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)

        .then((data) => {
            res.json(data);//responde con los datos del usuario creado     
        })
        .catch((err) => {
            res.json({ message: err });
        });
}

module.exports = getIdUser;
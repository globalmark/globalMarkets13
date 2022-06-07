const express = require('express');
const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const getUser = require('../controllers/user/getUsers');
const getIdUser = require('../controllers/user/getIdUser');
const deleteUser = require('../controllers/user/deleteUser');

const router = express.Router();

router.get('/', getUser);
router.get('/:id', getIdUser);
router.post('/create', createUser);
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;
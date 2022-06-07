const express = require('express');
const createUser = require('../controllers/createUser');
const updateUser = require('../controllers/updateUser');
const getUser = require('../controllers/getUsers');
const getIdUser = require('../controllers/getIdUser');
const deleteUser = require('../controllers/deleteUser');

const router = express.Router();

router.get('/', getUser);
router.get('/:id', getIdUser);
router.post('/create', createUser);
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;
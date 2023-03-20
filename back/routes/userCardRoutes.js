const express = require('express');
const router = express.Router();

const UserCardController = require('../controllers/userCardController');

const userCardController = new UserCardController();

router.get('/', userCardController.getUsers);

module.exports = router;

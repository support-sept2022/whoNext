const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userCardController');

const userController = new UserController();

router.get("/", userController.getUsers);

module.exports = router;

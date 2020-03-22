const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/getUsers')
  .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

module.exports = router;

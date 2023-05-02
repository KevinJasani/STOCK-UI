var express = require('express');
//sas
const router = express.Router();

var userController = require('../src/user/userController');

 router.route('/user/getAll').get(userController.getDataConntrollerfn);

 router.route('/user/create').post(userController.createUserControllerFn);
 // sign up data
 router.route('/userdata/create').post(userController.signupdataFn);
 router.route('/login').post(userController.signIn);

 router.route('/user/update/:id').patch(userController.updateUserController);

 router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router;
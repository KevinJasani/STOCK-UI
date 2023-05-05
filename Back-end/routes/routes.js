var express = require('express');
//sas
const router = express.Router();

var userController = require('../src/user/userController');

 router.route('/user/getAll').get(userController.getDataConntrollerfn);

 router.route('/user/create').post(userController.createUserControllerFn);
 // sign up data
 router.route('/userdata/create').post(userController.signupdataFn);
 router.route('/userdata/getAll').get(userController.getlogindataFn);
 //router.route('/login').post(userController.signIn);
//Stock list data
router.route('/stocklist/getAll').get(userController.stocklistdataFn);
router.route('/stocklist/create').post(userController.createstocklistFn);
//portfollio for user
router.route('/portfollio/create').post(userController.createportfollioFn);

 router.route('/user/update/:id').patch(userController.updateUserController);

 router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router;

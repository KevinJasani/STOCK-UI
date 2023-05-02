var userService = require('./userService');


var getDataConntrollerfn = async (req, res) =>
{
    try {
        var empolyee = await userService.getDataFromDBService();
        res.send({ "status": true, "data": empolyee });
        // do something with the result
      } catch (error) {
        console.error(error);
      }
    
   
}
var createUserControllerFn = async (req, res) => {
    try {
        var status = await userService.createUserDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "User created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    } catch (error) {
        console.error(error);
        res.send({ "status": false, "message": "123 Error creating user" });
    }
}
// sign up data
var signupdataFn = async (req, res) => {
    try {
        var status = await userService.signupUserDbService(req.body);
        if (status) {
            res.send({ "status": true, "message": "User created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    } catch (error) {
        console.error(error);
        res.send({ "status": false, "message": "123 Error creating user" });
    }
}
var updateUserController = async (req, res) =>
{
    console.log(req.params.id);
    console.log(req.body);
    
    var result = await userService.updateUserDBService(req.params.id,req.body);
 
     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
}

var deleteUserController = async (req, res) =>
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController, signupdataFn };



const signupModel = require('./signupModel');
var userModel = require('./userModel');
var listingModel = require('./listingModel.js');
const portfollioModel = require('./portfollioModel');
// try {
module.exports.getDataFromDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
}
//logindata check
module.exports.getlogindataDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        signupModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
}
// stock listing 
module.exports.getstocklistDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        listingModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
}
//get portfollio list data
module.exports.getportfolliolistDbService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        portfollioModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
}

// create stock listing
module.exports.createstockDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new listingModel();
        userModelData.stockName = userDetails.stockName;
        userModelData.details = userDetails.details;
        userModelData.value = userDetails.value;
        userModelData.quantity = userDetails.quantity;
        userModelData.total = userDetails.total;
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}
// create and add stock to portfollio

module.exports.createstockportfollioDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new portfollioModel();
        userModelData.stockName = userDetails.stockName;
        userModelData.details = userDetails.details;
        userModelData.value = userDetails.value;
        userModelData.quantity = userDetails.quantity;
        userModelData.total = userDetails.total;
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}
// sign yp data serivce data
module.exports.signupUserDbService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new signupModel();
        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}
module.exports.updateUserDBService = (id,userDetails) => {    
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
    });
}
module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
}
// delete stock portfollio
module.exports.removestockDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        portfollioModel.findByIdAndDelete(id, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
}

// }
// catch(error) {
//   console.log(error);
//   console.log('Ordering a pizza!')
// }
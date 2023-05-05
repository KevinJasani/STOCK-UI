var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var signupSchema = new Schema({

    stockName: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('stocklist',signupSchema);

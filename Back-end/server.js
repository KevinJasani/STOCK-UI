var express = require('express')
var server = express() //1 step
var mongoose = require('mongoose'); // 2nd step
var routes = require('./routes/routes') // 3rd stepp
var cors = require('cors') //4rth step
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/StockManager",{useNewUrlParser: true,useUnifiedTopology: true}, function checkDB(error){
    if(error)
    {
        console.log("error db")
    }else{
        console.log("DB started")
    }
})
//lkklklklklkklk
// server.get('/', function (req, res) {
//   res.send('Hello World')
// })dasdaddasds
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000,function check(error)
{
    if(error)
    {
        console.log("erroe")
    }else{
        console.log("started")
    }
}); 
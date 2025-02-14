
//List Users

const express = require('express');
const app = express();
const fs = require("fs");
app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      res.end( data );
   });
})
const server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");

});


//Show Detail


app.get('/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       const users = JSON.parse( data );
       const user = users["user" + req.params.id] 
       res.end( JSON.stringify(user));
    });
 })


//Add User

 const bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));

app.post('/', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      const users = JSON.parse( data );
      const user = req.body.user4;
      users["user"+user.id] = user
      res.end( JSON.stringify(users));
   });
})


//Delete user

app.delete('/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       const id = "user"+req.params.id;
       const user = data[id];
       delete data[ "user"+req.params.id];
       res.end( JSON.stringify(data));
    });
 })
//Update user

app.put("/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       
       const users = JSON.parse( data );
       const id = "user"+req.params.id;      
       users[id]=req.body;
       res.end( JSON.stringify(users));
    })
 })
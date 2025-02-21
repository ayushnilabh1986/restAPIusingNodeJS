
//List Users
const cors = require("cors");
require('dotenv').config()


const express = require('express');
const mongoose=require('mongoose');
const app = express();

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

// middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
//app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  });

// ----------------------



// app.use(cors());

// mongoose.connect("mongodb+srv://ayushnilabhsingh1986:ayushnilabhsingh@cluster0.vpewl.mongodb.net/crud")
// const userSchema=new mongoose.Schema ({
//    name: String,
//       email:String,
//       password:String

// })
// const userModel=mongoose.model("emp", userSchema);


// const server = app.listen(5002, function () {
//    console.log("Express App running at http://127.0.0.1:5002/");

// });


// const fs = require("fs");
// app.get('/', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       res.end( data );
//    });
// })
// const server = app.listen(5002, function () {
//    console.log("Express App running at http://127.0.0.1:5002/");

// });


// //Show Detail


// app.get('/:id', function (req, res) {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        const users = JSON.parse( data );
//        const user = users["user" + req.params.id] 
//        res.end( JSON.stringify(user));
//     });
//  })


// //Add User

//  const bodyParser = require('body-parser')
// app.use( bodyParser.json() );      
// app.use(bodyParser.urlencoded({  extended: true }));

// app.post('/', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       const users = JSON.parse( data );
//       const user = req.body.user4;
//       users["user"+user.id] = user
//       res.end( JSON.stringify(users));
//    });
// })


// //Delete user

// app.delete('/:id', function (req, res) {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        const id = "user"+req.params.id;
//        const user = data[id];
//        delete data[ "user"+req.params.id];
//        res.end( JSON.stringify(data));
//     });
//  })
// //Update user

// app.put("/:id", function(req, res) {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       
//        const users = JSON.parse( data );
//        const id = "user"+req.params.id;      
//        users[id]=req.body;
//        res.end( JSON.stringify(users));   
//     })
//  })
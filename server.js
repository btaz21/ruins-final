const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const session = require('express-session')
const app = express();
const path = require("path")
const port = process.env.PORT || 5000;
require ('dotenv').config();


app.use(cors({
    origin:['https://ruinfindr.herokuapp.com'],
    methods:['GET','POST', 'DELETE', 'PUT'],
    credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized:false
}))
app.use(express.static(path.join(__dirname, "client", "build")))



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true} );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDV db connection established");
})


const ruinsController = require('./controllers/ruins.js');
const usersController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js');


app.use('/ruins', ruinsController);
app.use('/users', usersController);
app.use('/sessions', sessionsController)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(port, () => {
  console.log('server running on port ' + port);
})

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const FreelanceModel = require('./models/freelance')
const Sequelize = require('sequelize')

const Freelance = FreelanceModel(sequelize, Sequelize)


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var user = require('./service/user');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'db4free.net',
    port: '3306',
    user: 'adminicardata',
    password: 'dkSB4!_aRAwMCTa',
    database: 'icardatabase'
});

connection.connect();

global.db = connection;


var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

// API calls
app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express'});
});

app.get('/api/allfreelances', (req, res) => {

    res.send({express: 'Retourne toute les freelances'});
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


app.post('/login', user.login);
app.get('/logout', user.logout);



if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Listening on port ${port}`));

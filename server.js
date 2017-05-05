
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Login credentials for database
var credentials = require('credentials.json');
var userName = credentials.username;
var passWord = credentials.password;
var dataBase = credentials.database;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
  res.json({message: 'Working'});
});

app.use('/api', router);

app.listen(port);
console.log('Currently doing things on port ' + port);

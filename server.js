var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/blackbelt');
mongoose.Promise = global.Promise;

app.use(session({secret: 'parsonss'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './angularApp/dist')));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
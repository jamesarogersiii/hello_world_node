const express = require('express');
const greeter = require('./greeter')
const app = express();

app.get('/', function (req, res) { res.send(greeter.greeting()) });

app.listen(8080, function () { console.log("Service running https://localhost:8080") });

module.exports = app;
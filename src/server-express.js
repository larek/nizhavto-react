'use strict';
require('babel-register')({presets: ['react', 'es2015']});
const express = require('express');
const app = express();
const path = require('path');

let html = require('./server-render.jsx');

app.use(express.static(path.join(__dirname,'../public')));

console.log(path.join(__dirname, '../public'));


app.get('*', function (req, res) {
  res.send("<!DOCTYPE html>" + html.html);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
let mocks = require('./services/MockConfigurer');

const {check, validationResult} = require('express-validator/check');
let test = require('./controllers/Test');
let endpoints = require('./controllers/EndpointsController');

var app = express();
app.use(express.json());

app.use('/mocks', mocks);
app.use('/test', test);
app.use('/endpoints', endpoints);

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(400).json(err);
});

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


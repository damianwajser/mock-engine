const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mocks = require('./services/MockConfigurer');
var test = require('./controllers/Test');

var app = express();

app.use('/mocks', mocks);
app.use('/test', test);

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
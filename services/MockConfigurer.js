const express = require('express')
let router = express.Router();
let mockService = require("./MockService.js");

const testFolder = './mocks/';
const fs = require('fs');

function getConfigFiles(){
  return fs.readdirSync(testFolder)
           .map(file => JSON.parse((fs.readFileSync(testFolder + file))));
};

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

getConfigFiles().forEach(c => mockService.createPath(router, c));

module.exports = router;
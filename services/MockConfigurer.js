const express = require('express')
const fs = require('fs');
const {Endpoint} = require('../config/sequelize');
let router = express.Router();
let mockService = require("./MockService.js");

const testFolder = './mocks/';

express().on('listening', ()=> init());

function getConfigFiles(){
  return fs.readdirSync(testFolder)
           .map(file => JSON.parse((fs.readFileSync(testFolder + file))));
};

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

async function init(){
  let a = await Endpoint.findAll();
  console.log("enpoints",a);
  getConfigFiles().concat(a).forEach(c => mockService.createPath(router, c));
}

module.exports = router;
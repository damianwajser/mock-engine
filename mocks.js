const express = require('express')
var router = express.Router();

const testFolder = './mocks/';
const fs = require('fs');

var errors={};

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    fs.readFile(testFolder + file, (err, data) => {
        try{
            console.log("parseando....", data);
            let json = JSON.parse(data);
            console.log(json);
            // define the home page route
            createPath(router, json);
        }catch(e){
            console.error(e);
            errors[file] = "error parser";
        }
    });
  });
});

function createResponse(res, config){
    res.status(config.status).json(config.response);
}

function createPath(router, config){
    let path = '/'+config.path;
    switch (config.method){
        case "POST":
            router.post(path, (req, res) => {
                createResponse(res, config)
            });
            break;
        default: 
            router.get(path, (req, res) => {
                createResponse(res, config)
            });
    }
}
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });



  // define the home page route
  router.get('/errors', function(req, res) {
    res.send(errors);
  });

  module.exports = router;
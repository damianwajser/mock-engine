
var express = require('express');
const {check, validationResult} = require('express-validator/check');
var router = express.Router();
const {Endpoint} = require('../config/sequelize');
const validationHelper = require('../ErrorsHandlers/ValidationHelper');

let validations = [check('path', 'Class Year should be a number').not().isEmpty()];
// define the about route
router.get('/', function(req, res) {
   Endpoint.findAll().then(e=>res.status(200).json(e));
});

router.post('/', validations, function(req, res, next) {
   validationHelper(req, next);
   console.log("req",req.body)
   Endpoint.create(req.body).then(e=>res.status(200).json(e));
 });


module.exports = router;
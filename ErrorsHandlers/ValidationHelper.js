const {validationResult} = require('express-validator/check');
module.exports= (req, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        let err = new Error("validation error", errors);
        next(err);
        throw err;
    } 
}
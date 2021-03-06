//const { when } = require('@hapi/joi');
const joi = require('@hapi/joi');

const roomTimeTableschema = joi.object({

    roomName: joi.string()
        .required()
        .min(1)
        .max(1024),

    timeTable: joi.object().pattern(
        joi.string(),
        joi.string()
    ),
});

function roomTimeTableValidation(req, res, next) { 
    const validate = roomTimeTableschema.validate(req.body);
    
    if(validate.error){
        console.log('Error in validation');
        res.send(validate.error);
    }
    else{
        next();
    }
}

module.exports.roomTimeTableValidation = roomTimeTableValidation;
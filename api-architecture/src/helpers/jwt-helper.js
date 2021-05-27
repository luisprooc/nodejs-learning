const {sign} = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

module.exports.generateToke = function(user){
    return sign({user},JWT_SECRET, {expiresIn:"6h"});
};
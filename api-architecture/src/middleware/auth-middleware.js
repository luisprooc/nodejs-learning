const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const {ErrorHelper} = require("../helpers");

module.exports = function(req,res,next){
    const token = req.headers["authorization"];
    ErrorHelper(token, "Token must be sent" ,400);

    jwt.verify(token, JWT_SECRET, function(err,decodedToken){
        ErrorHelper(err, "Invalid token", 401);

        req.user = decodedToken.user;
        next();
    });
};
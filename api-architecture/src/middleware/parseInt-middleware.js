module.exports = function(req,res, next){
    const queryStrings = req.query;

    for(let key in queryStrings){
        const len = queryStrings[key].length;
        const isValid = len > 20 ? false : !isNaN(parseInt(queryStrings[key]));

        if(isValid) queryStrings[key] = parseInt(queryStrings[key]);
    }

    req.query = queryStrings;
    next();

};
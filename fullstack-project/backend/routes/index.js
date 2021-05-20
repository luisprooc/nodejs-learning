const express = require("express");
const router = express.Router;

module.exports = function(){ 
    router.get("/", (req,res) => {
        console.log("A")
    });
    
    return router;
};
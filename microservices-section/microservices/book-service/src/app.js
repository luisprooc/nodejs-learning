const express = require("express");
const app = express();

const response = {
    data: [],
    services: "Book Service",
    architecture: "Microservice"
};

const logger = message => console.log("[📒 Book Service]: " + message);

app.use((req,res,next) => {
    response.data = [];
    next();
});

app.use(express.json());

app.get("/api/v2/books", (req, res) => {
    response.data.push("Clean code", "Soft skills");
    logger("Get Book Data");
    return res.send(response);
});

module.exports = app;
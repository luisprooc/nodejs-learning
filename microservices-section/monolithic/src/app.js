const express = require("express");
const app = express();

const response = {
    data: [],
    services: "Monolithic Service",
    architecture: "Monolithic"
};

app.use((req,res,next) => {
    response.data = [];
    next();
});

app.use(express.json());

app.get("/api/v1/users", (req,res) => {
    response.data.push("Luis", "Nathaly", "Pedro");
    return res.send(response);
});

app.get("/api/v1/books", (req, res) => {
    response.data.push("Clean code", "Soft skills");
    return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
    response.data.push("FERRARI", "BMW");
    return res.send(response);
});

module.exports = app;
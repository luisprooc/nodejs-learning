const express = require("express");
const app = express();

const response = {
    data: [],
    services: "Car Service",
    architecture: "Microservice"
};

const logger = message => console.log("[🚗 Car Service]: " + message);

app.use((req,res,next) => {
    response.data = [];
    next();
});

app.use(express.json());

app.get("/api/v2/cars", (req, res) => {
    response.data.push("FERRARI", "BMW");
    logger("Get Car Data");
    return res.send(response);
});

module.exports = app;
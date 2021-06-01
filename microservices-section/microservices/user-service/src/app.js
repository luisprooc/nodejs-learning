const express = require("express");
const app = express();

const response = {
    data: [],
    services: "User Service",
    architecture: "Microservice"
};

const logger = message => console.log("[🧍‍♂️ User Service]: " + message);

app.use((req,res,next) => {
    response.data = [];
    next();
});

app.use(express.json());

app.get("/api/v2/users", (req,res) => {
    response.data.push("Luis", "Nathaly", "Pedro");
    logger("Get User Data");
    return res.send(response);
});

module.exports = app;
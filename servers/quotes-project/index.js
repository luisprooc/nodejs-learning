const express = require("express");
const server = express();
const { PORT } = require("./config");
//const HomeRoutes from "./routes/;

server.use(express.static("./public"));
server.use(express.json());

server.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
});
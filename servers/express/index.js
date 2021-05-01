import express from "express";

const server = express();


server.listen(6000, () => {
    console.log("SERVER IS RUNNING ON PORT " + 6000);
});
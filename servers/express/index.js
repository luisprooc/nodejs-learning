import express from "express";

const server = express();


server.get("/", (req,res) => {
    res.send("HELLO WORLD");
});

server.listen(8080, () => {
    console.log("SERVER IS RUNNING ON PORT " + 8080);
});
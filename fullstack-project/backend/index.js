const server = require("./server");
const {PORT} = require("./config");

server.listen(PORT, ()=>{
    console.log(`SERVER RUNNING IN PORT ${PORT}`);
})
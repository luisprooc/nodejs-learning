const server = require("./src/app");
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`SERVER RUNNING IN PORT ${PORT}`)
});
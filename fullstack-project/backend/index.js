const server = require("./server");
const {PORT, MONGO_URI} = require("./config");
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    server.listen(PORT, ()=>{
        console.log(`SERVER RUNNING IN PORT ${PORT}`);
    });

})
.catch(console.log);
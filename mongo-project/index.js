const mongoose = require("mongoose");
const connectionString = "mongodb+srv://admin:admin@cluster0.k9xnh.mongodb.net/dbTest?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
    useNewUrlParser: true
});
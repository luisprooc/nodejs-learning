const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BreakingNewSchema = new Schema({
    title: String,
    link: String
});

module.exports = mongoose.model("BreakingNew",BreakingNewSchema);
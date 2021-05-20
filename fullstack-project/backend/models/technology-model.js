const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const TechnologySchema = new Schema({
    name: {type: String, maxlength: 50},
    description: String,
    logo: String,
    tags: [{ type: String }]
},{ timestamps: {createdAt: true, updatedAt: true} }
);

module.exports = mongoose.model("Technology", TechnologySchema);
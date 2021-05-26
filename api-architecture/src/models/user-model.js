const mongoose = require("mongoose");
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require("bcryptjs");

const UserSchema = new Schema({
    name: {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true}
});

UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.methods.comparePassword = function(password){
    return compareSync(password, this.password);
};

UserSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")) return next();

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();

});

module.exports = mongoose.model("user", UserSchema);
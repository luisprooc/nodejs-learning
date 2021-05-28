const {JwtHelper,ErrorHelper} = require("../helpers");
let _userService = null;

class AuthService {
    constructor({UserService}){
        _userService = UserService;
    }

    async signUp(user){
        const {username} = user;
        const userExist = await _userService.getUserByUsername(username);
        ErrorHelper(!userExist, "User already exists", 400);

        return await _userService.create(user);
    };

    async signIn(user){
        const {_id,username, password} = user;
        const userExist = await _userService.getUserByUsername(username);
        ErrorHelper(userExist, "User does not exists");

        const validPassword = userExist.comparePasswords(password);
        ErrorHelper(validPassword, "Invalid password",401);

        const userToEncode = {
            username,
            id: _id,
        };

        const token = JwtHelper.generateToke(userToEncode);

        return {token, user:userExist}

    };
};

module.exports = AuthService;
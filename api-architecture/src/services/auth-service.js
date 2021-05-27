const {JwtHelper,ErrorHelper} = require("../helpers");
let _userService = null;

class AuthService {
    constructor({UserService}){
        this._userService = UserService;
        this._message = null;
        this.setMessage = (message) => {
            _message = message;
        }
    }

    async signUp(user){
        const {username} = user;
        //const userExist = await _userService.getUserByUsername(username);
        //this.setMessage("User already exists")
        //ErrorHelper(userExist, this._message, 400);

        return await _userService.create(user);
    };

    async signIn(user){
        const {_id,username, password} = user;
        const userExist = await _userService.getUserByUsername(username);
        this.setMessage("User does not exists");
        ErrorHelper(userExist, this._message);

        const validPassword = userExist.comparePasswords(password);
        this.setMessage("Invalid password");
        ErrorHelper(validPassword, this._message,401);

        const userToEncode = {
            username,
            id: _id,
            
        };

        const token = JwtHelper.generateToke(userToEncode);

        return {token, user:userExist}

    };
};

module.exports = AuthService;
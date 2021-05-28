const BaseService = require("./base-service");
let _userRepository = null;

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository);
        _userRepository = UserRepository;
    }

    async getUserByUsername(username){
        return await _userRepository.getUserByUsername(username);
    }

    async comparePasswords(password){
        return await _userRepository.comparePasswords(password);
    }
};

module.exports = UserService;
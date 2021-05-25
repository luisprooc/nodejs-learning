const {createContainer, asClass, asValue, asFunction} = require("awilix");

// Services
const {HomeService} = require("../services");

// Controllers
const {HomeController} = require("../controllers");

const container = createContainer();

container.register({
    HomeService: asClass(HomeService).singleton()
});

module.exports = container;
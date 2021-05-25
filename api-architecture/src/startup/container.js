const {createContainer, asClass, asValue, asFunction} = require("awilix");

// config
const config = require("../config");

// Services
const {HomeService} = require("../services");

// Controllers
const {HomeController} = require("../controllers");

//Routes
const {HomeRoutes} = require("../routes/index-routes");
const Routes = require("../routes");

// APP
const app = require(".")

const container = createContainer();

container
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        app: asClass(app).singleton()
    })

module.exports = container;
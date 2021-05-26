const {createContainer, asClass, asValue, asFunction} = require("awilix");

// config
const config = require("../config");

// Services
const {HomeService,CommentService,IdeaService,UserService} = require("../services");

// Controllers
const {HomeController,CommentController,IdeaController,UserController} = require("../controllers");

//Routes
const {HomeRoutes} = require("../routes/index-routes");
const Routes = require("../routes");

// Models
const {Comment, Idea, User} = require("../models");

// Repositories
const {UserRepository, CommentRepository, IdeaRepository} = require("../repositories");

// APP
const app = require(".");

const container = createContainer();

container
    .register({
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        app: asClass(app).singleton()
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton(),
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)

    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
    })

module.exports = container;
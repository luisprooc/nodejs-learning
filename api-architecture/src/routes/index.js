const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const {ErrorMiddleware, NotFoundMiddleware} = require("../middleware");
require("express-async-errors");

module.exports = function({HomeRoutes,UserRoutes, IdeaRoutes, CommentRoutes}){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression())

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
};
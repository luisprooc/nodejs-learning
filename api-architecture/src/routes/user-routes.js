const {Router} = require("express");
const {AuthMiddleware,ParseIntMiddleware,CacheMiddleware} = require("../middleware");
const {CacheTime} = require("../helpers");

module.exports = function({UserController}) {
    const router = Router();

    router.get("/",[ParseIntMiddleware,CacheMiddleware(CacheTime.ONE_HOUR)],UserController.getAll);
    router.get("/:userId",[AuthMiddleware],UserController.get);
    router.patch("/:userId",[AuthMiddleware],UserController.update);
    router.delete("/:userId",[AuthMiddleware],UserController.delete);
    
    return router;
}
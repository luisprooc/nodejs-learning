const {Router} = require("express");
const {ParseIntMiddleware,AuthMiddleware} = require("../middleware");
module.exports = function({IdeaController}) {
    const router = Router();

    router.get("/",[ParseIntMiddleware],IdeaController.getAll);
    router.get("/:ideaId",IdeaController.get);
    router.post("/",[AuthMiddleware],IdeaController.create)
    router.patch("/:ideaId",[AuthMiddleware],IdeaController.update);
    router.delete("/:ideaId",[AuthMiddleware],IdeaController.delete);
    router.get("/:userId/all",[AuthMiddleware],IdeaController.getUserIdeas);
    router.post("/:ideaId/upvote",[AuthMiddleware],IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote",[AuthMiddleware],IdeaController.downvoteIdea);
    
    return router;
}
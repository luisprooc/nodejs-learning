const {Router} = require("express");

module.exports = function({IdeaController}) {
    const router = Router();

    router.get("/",IdeaController.getAll);
    router.get("/:ideaId",IdeaController.get);
    router.post("/",IdeaController.create)
    router.patch("/:ideaId",IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    router.get("/:userId/all", IdeaController.getUserIdeas);
    router.post("/:ideaId/upvote",IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote",IdeaController.downvoteIdea);
    
    return router;
}
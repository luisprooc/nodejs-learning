const {Router} = require("express");

module.exports = function({CommentController}) {
    const router = Router();

    router.get("/:commentId/unique",CommentController.get);
    router.get("/:ideaId", CommentController.getIdeaComments);
    router.post("/",CommentController.createComment)
    router.path("/:commentId",CommentController.update);
    router.delete("/:commentId", CommentController.delete);
    
    return router;
}
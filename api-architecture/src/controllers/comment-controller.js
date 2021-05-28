let _commentService = null;

class CommentController {
    constructor({CommentService}){
        _commentService = CommentService;
    }

    async get(req,res){
        const {commentId} = req.params;
        const comment = await _commentService.get(commentId);
        return res.send(comment);
    }

    async createComment(req,res){
        const {body} = req;
        const {ideaId} = req.params;

        const createdComment = await _commentService.createComment(body, ideaId);
        return res.status(201).send(createdComment);
    }

    async update(req,res){
        const {body} = req;
        const {commentId} = req.params;
        const updateComment = await _commentService.update(commentId, body);
        return res.send(updateComment);
    }

    async delete(req,res){
        const {commentId} = req.params;
        const deletedComment = await _commentService.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeaComments(req,res){
        const {ideaId} = req.params;
        const Comments = await _commentService.getIdeaComments(ideaId);
        return res.send(Comments);
    }
}

module.exports = CommentController;
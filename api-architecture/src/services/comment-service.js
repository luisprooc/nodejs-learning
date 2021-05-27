const BaseService = require("./base-service");
const {ErrorHelper} = require("../helpers");

let _commentRepository = null,
    _ideaRepository = null;

class CommentService extends BaseService{
    constructor({CommentRepository, IdeaRepository}){
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComments(ideaId){
        this.setMessage("ideaId must be sent");
        ErrorHelper(ideaId, this._message);

        const idea = await _ideaRepository.get(ideaId);

        this.setMessage("Idea does not exist");
        ErrorHelper(idea, this._message);

        const {comments} = idea;

        return comments;
    }

    async createComment(comment, ideaId){
        this.setMessage("ideaId must be sent");
        ErrorHelper(ideaId, this._message);

        const idea = await _ideaRepository.get(ideaId);

        this.setMessage("Comment must be sent");
        ErrorHelper(idea, this._message);

        const createdComment = await _commentRepository.create(comment);
        idea.comments.push(createdComment);

        return await _ideaRepository.update(ideaId, {comments: idea.comments});
    }
};

module.exports = CommentService;
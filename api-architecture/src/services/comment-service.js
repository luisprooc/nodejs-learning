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
        ErrorHelper(ideaId, "ideaId must be sent");
        const idea = await _ideaRepository.get(ideaId);

        ErrorHelper(idea, "Idea does not exist");
        const {comments} = idea;

        return comments;
    }

    async createComment(comment, ideaId){
        ErrorHelper(ideaId, "ideaId must be sent");
        const idea = await _ideaRepository.get(ideaId);

        ErrorHelper(idea, "Comment must be sent");

        const createdComment = await _commentRepository.create(comment);
        idea.comments.push(createdComment);

        return await _ideaRepository.update(ideaId, {comments: idea.comments});
    }
};

module.exports = CommentService;
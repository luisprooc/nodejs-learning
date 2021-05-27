const BaseService = require("./base-service");
const {ErrorHelper} = require("../helpers")
let _ideaRepository = null;

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUserIdeas(author){
        this.setMessage("userId must be sent");
        ErrorHelper(author, this._message);

        return await _ideaRepository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId){
        this.setMessage("ideaId must be sent");
        ErrorHelper(ideaId, this._message);

        const idea = await _ideaRepository.get(ideaId);

        this.setMessage("idea does not exist");
        ErrorHelper(idea, this._message);

        idea.upvotes.push(true);

        return await _ideaRepository.update(ideaId, {upvotes: idea.upvotes});
    }

    async downvoteIdea(ideaId){
        this.setMessage("ideaId must be sent");
        ErrorHelper(ideaId, this._message);

        const idea = await _ideaRepository.get(ideaId);

        this.setMessage("idea does not exist");
        ErrorHelper(idea, this._message);

        idea.downvotes.push(true);

        return await _ideaRepository.update(ideaId, {downvotes: idea.downvotes});
    }
};

module.exports = IdeaService;
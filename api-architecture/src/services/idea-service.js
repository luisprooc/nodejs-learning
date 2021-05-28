const BaseService = require("./base-service");
const {ErrorHelper} = require("../helpers")
let _ideaRepository = null;

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUserIdeas(author){
        ErrorHelper(author, "userId must be sent");

        return await _ideaRepository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId){
        ErrorHelper(ideaId, "ideaId must be sent");
        const idea = await _ideaRepository.get(ideaId);

        ErrorHelper(idea, "idea does not exist");
        idea.upvotes.push(true);

        return await _ideaRepository.update(ideaId, {upvotes: idea.upvotes});
    }

    async downvoteIdea(ideaId){
        ErrorHelper(ideaId, "ideaId must be sent");
        const idea = await _ideaRepository.get(ideaId);

        ErrorHelper(idea, "idea does not exist");
        idea.downvotes.push(true);

        return await _ideaRepository.update(ideaId, {downvotes: idea.downvotes});
    }
};

module.exports = IdeaService;
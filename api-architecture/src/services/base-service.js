const {ErrorHelper} = require("../helpers");

class BaseService {
    constructor(repository){
        this.repository = repository;
    }

    async get(id){
        ErrorHelper(id, "id must be sent");
        const currentEntity = await this.repository.get(id);

        return currentEntity;
    }

    async getAll(pageSize, pageNum){
        return await this.repository.getAll(pageSize, pageNum);
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
        ErrorHelper(id, "id must be sent");
        return await this.repository.update(id,entity); 
    }

    async delete(id){
        ErrorHelper(id,"id must be sent");

        return await this.repository.delete(id);
    }
};

module.exports = BaseService;
const {ErrorHelper} = require("../helpers");

class BaseService {
    constructor(repository){
        this.repository = repository;
    }

    async get(id){
        ErrorHelper(id, message="id must be sent")

        const currentEntity = await this.repository.get(id);

        ErrorHelper(currentEntity, message="Entity does not found");

        return currentEntity;
    }

    async getAll(){
        return await this.repository.getAll();
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
        oldEntity = this.get(id);

        return await this.repository.update(id,entity); 
    }

    async delete(id){
        entity = this.get(id);

        return await this.repository.delete(id);
    }
};

module.exports = BaseService;
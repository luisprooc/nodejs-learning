const {ErrorHelper} = require("../helpers");

class BaseService {
    constructor(repository){
        this.repository = repository;
        this._message = null;
        this.setMessage = (message) => {
            this._message = message;
        };
    }

    async get(id){
        this.setMessage("id must be sent");
        ErrorHelper(id, this._message);

        const currentEntity = await this.repository.get(id);

        this.setMessage("Entity does not found");
        ErrorHelper(currentEntity, this._message);

        return currentEntity;
    }

    async getAll(){
        return await this.repository.getAll();
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
        this.setMessage("id must be sent");
        ErrorHelper(id, this._message);

        return await this.repository.update(id,entity); 
    }

    async delete(id){
        this.setMessage("id must be sent");
        ErrorHelper(id, this._message);

        return await this.repository.delete(id);
    }
};

module.exports = BaseService;
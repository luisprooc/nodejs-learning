const { CRUD } = require("./helpers");
const db = require("./models");


if(  process.argv.length <=2){
    process.exit(0);
}

const args = process.argv.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch(command){
    case CRUD.CREATE:
        const data = {};
        args.slice(1).forEach(arg => {
            const tmp = arg.split("=");
            data[tmp[0].substring(2)] = tmp[1];
        });
        
        db[entity]
            .create(data)
            .then(() => console.log("CREATED!!!"))
            .catch(console.log)

        break;

    case CRUD.READ:
         db[entity]
            .findAll()
            .then(console.log)
            .catch(console.log)
        break;

    case CRUD.DELETE:

        const params = args.slice(1)[0];
        const id = params.split(":")[1];
        
        db[entity]
            .findByPk(id)
            .then( data => data.destroy())
            .catch(console.log)
        
        break;

    default:
        console.log("OPERATION NOT FOUND 💥");
        break;
}
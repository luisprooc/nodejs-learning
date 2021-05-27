const errorHelper = (id,message,status=400) => {
    if(!id) {
        const error = new Error();
        error.status = status;
        error.message = message;
    
        throw error;
    }

}


module.exports =  errorHelper;
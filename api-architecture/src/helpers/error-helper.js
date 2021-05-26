const errorHelper = (id,message,status=400) => {
    if(!id) {
        const error = new Error({
            status,
            message 
        });
    
        throw error;
    }

}


module.exports =  errorHelper;
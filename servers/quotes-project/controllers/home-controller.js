class HomeController {
    async index(req,res){
        return res.send({message:"HELLO WORLD"});
    }
}

export default HomeController;
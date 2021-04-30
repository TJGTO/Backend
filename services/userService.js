const UserRepository = require('../reposotories/userrepository');

module.exports = class UserService {
    constructor(){
        this.repository = new UserRepository();
    }

    async getdata(){

        try{
            const record = await this.repository.getallthedata();

            return record;

        }catch(err){
            
            console.log(err);
             
            let string = "erro occur";
            return string;

        }
    }
};
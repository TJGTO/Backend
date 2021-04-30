
const RoleRepository = require('../reposotories/rolereposotory');

module.exports = class RoleService{

   constructor(){
    this.repository = new RoleRepository();
   }

   async getrolesdata(){

       try{

          const record = await this.repository.getalldata();
          return record;

       }catch(err){
            let error = "error";
           return error;
       }
   }

};
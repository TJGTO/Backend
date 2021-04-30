
const Users = require("../models").Users;

module.exports = class UserRepository {

    async getallthedata(){
      
        const data = await Users.findAll({
            attributes: ['firstName', 'rolecode']
        });

        return data;
    }
};
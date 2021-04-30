const Roles = require('../models').Roles;

module.exports = class RoleReposotory{

    async getalldata(){
       
        const record = await Roles.findAll({
             attributes :['roleName','roleCode']
        });

        return record;
    }
};


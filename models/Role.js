var Sequelize = require("sequelize");

module.exports=function(sequelize, DataTypes){ 
  return Roles = sequelize.define("Roles", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4 ,      
        primaryKey: !0
    },
    roleName: {               
      type: DataTypes.STRING,  
      field: "rolename"      
    },
    roleCode: {                
      type: DataTypes.STRING,  
      field: "rolecode"       
    },
  
  });
};
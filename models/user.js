var Sequelize = require("sequelize");

module.exports=function(sequelize, DataTypes){ 
  return Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER, 
      field: "id",             
      autoIncrement: !0,       
      primaryKey: !0
    },
    firstName: {               
      type: DataTypes.STRING,  
      field: "first_name"      
    },
    lastName: {                
      type: DataTypes.STRING,  
      field: "last_name"       
    },
  
  });
};
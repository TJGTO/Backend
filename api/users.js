var express = require('express')
  , usersRouter = express.Router()

  const Users = require("../models").Users;

// Handles requests made to /api/users

usersRouter.get('/inserttesting',async (req , res)=>{

    
    const data = await Users.findAll({
        attributes: ['firstName', 'lastName']
    });
    
    // const data = "Hello  uihugidh";
    res.send(data);
})



module.exports =  usersRouter;

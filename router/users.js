const express = require('express');
const userRouter = express.Router();
const userModel = require('../model/user.model');


userRouter.get('/', (req , res)=>{
    res.send('User Page')
});

// Get All users
userRouter.get('/users_list', async (req, res)=>{

    const user_data = await userModel.find();

    try{
        res.json(user_data);
    }catch(err){
        res.json(err);
    }
    

});


// Edit user role permission
userRouter.patch('/user_role_edit' , async (req ,res)=>{
   
    const id = req.body.id;
    const roleVal = req.body.role;
    const updateRoleValue = ( { role: roleVal } );
    const options = { new : true };

    const result =  await userModel.findByIdAndUpdate(id,updateRoleValue ,options);

    try {

        res.json(result.role);
       
    } catch (error) {
        res.json(error);
    }
   

});

module.exports = userRouter;
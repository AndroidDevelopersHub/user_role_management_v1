const express = require('express');
const actionRouter = express.Router();
const actionModel = require('../model/action.model');


actionRouter.get('/', (req , res)=>{
    res.send('Action Page')
});

// Get All action list
actionRouter.get('/action_list', async (req, res)=>{

    const action_data = await actionModel.find();

    try{
        res.json(action_data);
    }catch(err){
        res.json(err);
    }
    

});


// Add new Action
actionRouter.post('/action_add_new' , async (req ,res) =>{

    //label ,tag , type
    const mLabel = req.body.label;
    const mTag = req.body.tag;
    const mType = req.body.type;

    const data = new actionModel({
        label: mLabel,
        tag: mTag,
        type : mType
   });

   data.save().then( mData =>{ 
      res.status(200).json(mData)
   });


});


// Edit Single Action
actionRouter.patch('/action_edit', async (req ,res) =>{

    const id = req.body.id;
    const label = req.body.label;
    const tag = req.body.tag;
    const type = req.body.type;

    const updateValue = (
        {
           label: label,
           tag: tag,
           type: type
        }
    );

    const options = { new : true };

    const updateResult = await actionModel.findByIdAndUpdate(id , updateValue , options)

    try {
        res.json(updateResult);
    } catch (error) {
        res.json(error);
    }

});


actionRouter.delete('/action_delete', async (req ,res) =>{

    const id = req.body.id;

    const delete_action_result = await actionModel.deleteOne({_id: id});
    try {
        res.json(delete_action_result.deletedCount);
    } catch (error) {
        res.json(error);
    }

});



// Edit user role permission
/* userRouter.patch('/user_role_edit' , async (req ,res)=>{
   
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
   

}); */

module.exports = actionRouter;
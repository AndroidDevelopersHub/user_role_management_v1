const mongoose = require('mongoose');


// username , email , password , role
const actionSchema = new mongoose.Schema({

   label:{
       type : String,
       required: true
   },
  tag:{
       type : String,
       required: true
  },
  type:{
       type : String,
       required: true
    }

});


module.exports = mongoose.model('action_list', actionSchema ,'action_list');
const mongoose = require('mongoose');
const userSchema = new  mongoose.Schema({
    id:{
      type:Number,
      required: true,
    },
    username:{
        type:String,
    },

  details:{
      address:{
          type:String
      }
  }

});

module.exports = mongoose.model('User',userSchema);

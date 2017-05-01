const mongoose = require('mongoose');
const userSchema = new  mongoose.Schema({
    _id:{
      type:Number,
      required: true,
    },
    username:{
        type:String,
    },
  /*  details:{
        address:{
            city:{
                type:String,
            },
            zipcode:{
                type:Number,
            }
        }
    }*/
  details:{
      address:{
          type:String
      }
  }

});

module.exports = mongoose.model('User',userSchema);

const { Schema, model } = require('mongoose');

const {v4: uuid} = require("uuid");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username:{
    type:String,
    require: true,
  },

  password: {
    type: String,
    required: true
  }, 
  type: {
    type: String,
    requires: true,

  }

  // default user type should always be "USER" and admins should always be "ADMIN" - could crypt these 
  // -- althogh that would be reversible it should not be voulnerable with an "undefined" crypt and salt, then on the back end we will store the admin crypts to check them against.
  
});

const User = model('User', userSchema);
module.exports = User;

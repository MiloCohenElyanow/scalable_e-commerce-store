const {Schema, Model} = require ("mongoose");

const cartSchema = new Schema({
  items:{
    type: Array,

  },
  id: {

  }

});


const Cart = model("Cart", cartSchema);
module.exports = Cart; 


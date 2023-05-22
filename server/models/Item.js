const {Schema, model} = require("mongoose"); 

const itemSchema = new Schema ({  
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  stock: {
    type: Number,
    require: true,
  }
})

const Item = model("Item", itemSchema);
module.exports = Item;
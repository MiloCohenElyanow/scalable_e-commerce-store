const {Schema, model} = require("mongoose"); 

const itemSchema = new Schema ({  
  name: {
    type: string,
    required: true,
  },
  description: {
    type: string, 
    required: true,
  },
  stock: {
    type: Number,
    require: true,
  }
})

const Item = model("Item", itemSchema);
module.exports = Item;
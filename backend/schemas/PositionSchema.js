const mongoose = require("mongoose");
const PositionSchema = new mongoose.Schema({
    product: {
type:String,
    },
    name: {
        type:String,
    },
    qty: {
        type:Number, 
    },
    avg: {
        type:Number, 
    },
    price: {
        type:Number, 
    },
    net: {
        type:String, 
    },
    day: {
        type:String, 
    },
    isLoss:{
        type:Boolean,
    },
});

module.exports = mongoose.model("PositionModel", PositionSchema);

const mongoose = require("mongoose");
const uniqid = require('uniqid');

const ProductSchema = new mongoose.Schema({
    productID: {
        type: String,
        required: true,
        unique: true,
        default: () => uniqid("data")
    },
    productCode: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    group:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    image: {
        type:String,
        required:true
    },
});

//Creating index  on the basis of some field;
ProductSchema.index({ productCode: 1,productId: 1 });

//Setting some field not to send in response
ProductSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});


const Product = mongoose.model('product', ProductSchema)
module.exports = Product;
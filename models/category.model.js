const mongoose = require("mongoose");
const uniqid = require('uniqid');

const CategorySchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true,
        unique: true,
        default: () => uniqid("data")
    },
    group: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

//Creating index  on the basis of some field;
CategorySchema.index({ categoryId: 1 });

//Setting some field not to send in response
CategorySchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});


const Category = mongoose.model('category', CategorySchema)
module.exports = Category;
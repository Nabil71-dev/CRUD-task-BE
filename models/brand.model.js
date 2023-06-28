const mongoose = require("mongoose");
const uniqid = require('uniqid');

const BrandSchema = new mongoose.Schema({
    brandId: {
        type: String,
        required: true,
        unique: true,
        default: () => uniqid("data")
    },
    brandName: {
        type: String,
        required: true,
    }
});

//Creating index  on the basis of some field;
BrandSchema.index({ brandId: 1 });

//Setting some field not to send in response
BrandSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});


const Brand = mongoose.model('brand', BrandSchema)
module.exports = Brand;
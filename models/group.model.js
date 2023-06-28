const mongoose = require("mongoose");
const uniqid = require('uniqid');

const GroupSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true,
        unique: true,
        default: () => uniqid("data")
    },
    group: {
        type: String,
        required: true,
    },
});

//Creating index  on the basis of some field;
GroupSchema.index({ groupId: 1 });

//Setting some field not to send in response
GroupSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});


const Group = mongoose.model('group', GroupSchema)
module.exports = Group;
const Group = require('../models/group.model');

exports.groupCreate = async (req, res) => {
    try {
        const newGroup = new Group(req.body);

        const response = await newGroup.save()
        return res.status(200).send({
            message: "Group successfully added!",
            data: response
        });
    }
    catch (error) {
        return res.status(400).send({
            message: "Something went wrong",
            data: error
        });
    }
}

exports.allGroups = async (req, res) => {
    try {
        const response = await Group.find();
        return res.status(200).send({
            message: "All groups",
            data: response
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}

exports.groupDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Group.findOneAndDelete({ groupId: id })
        return res.status(200).send({
            message: "Group successfully deleted!",
            data: response?.groupId
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}
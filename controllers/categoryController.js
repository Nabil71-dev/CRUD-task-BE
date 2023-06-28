const Category = require('../models/category.model');

exports.categoryCreate = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const response = await newCategory.save()
        return res.status(200).send({
            message: "Category successfully added!",
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

exports.allCategories = async (req, res) => {
    try {
        const response = await Category.find();
        return res.status(200).send({
            message: "All categories",
            data: response
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}

exports.categoryDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Category.findOneAndDelete({ categoryId: id })
        return res.status(200).send({
            message: "category successfully deleted!",
            data: response?.categoryId
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}
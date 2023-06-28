const Product = require('../models/product.model');
const uniqid = require('uniqid');

exports.productCreate = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        if (!newProduct.productCode) {
            newProduct.productCode = uniqid()
        }
        const response = await newProduct.save()
        return res.status(200).send({
            message: "Product successfully added!",
            data: response
        });
    }
    catch (error) {
        return res.status(400).send({
            message: "Something went wrong",
            data: error
        })
    }
}

exports.allProducts = async (req, res) => {
    try {
        const response = await Product.find();
        return res.status(200).send({
            message: "All products",
            data: response
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}

exports.oneProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Product.findOne({ productID: id });
        return res.status(200).send({
            message: "successfull!",
            data: response
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}

exports.productUpdate = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Product.findOne({ productID: id });

        const updates = { response, ...req.body.product };
        const updatedProduct = await Product.findOneAndUpdate({ productID: id }, updates, { returnDocument: 'after' });

        return res.status(200).send({
            message: "Product update successfull!",
            data: updatedProduct
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}

exports.productDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Product.findOneAndDelete({ productID: id })
        return res.status(200).send({
            message: "Product deletion successfull!",
            data: response?.productID
        });
    }
    catch (error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}
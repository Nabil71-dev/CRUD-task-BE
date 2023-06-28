const Brand = require('../models/brand.model');

exports.brandCreate = async (req, res) => {
    try {
        const newBrand = new Brand(req.body);
        const response = await newBrand.save()
        return res.status(200).send({
            message: "Brand successfully added!",
            data: response
        });
    }
    catch(error) {
        return res.status(400).send({
            message: "Something went wrong",
            data: error
        });
    }
}

exports.allBrands = async (req, res) => {
    try {
        const response = await Brand.find();
        return res.status(200).send({
            message: "All brands",
            data: response
        });
    }
    catch(error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}

exports.brandDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Brand.findOneAndDelete({ brandId: id })
        return res.status(200).send({
            message: "Brand successfully deleted!",
            data: response?.brandId
        });
    }
    catch(error) {
        return res.status(401).send({
            message: 'Somthing went wrong, try again later!'
        })
    }
}
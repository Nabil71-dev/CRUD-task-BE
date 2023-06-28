const express=require('express');
const routes=express.Router()
const productController=require('../controllers/productController')

routes.get('/all-products',productController.allProducts);
routes.post('/create',productController.productCreate);
routes.put('/update/:id',productController.productUpdate);
routes.delete('/delete/:id',productController.productDelete);
routes.get('/one/:id',productController.oneProduct);

module.exports=routes;
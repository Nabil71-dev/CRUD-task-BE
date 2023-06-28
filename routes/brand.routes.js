const express=require('express');
const routes=express.Router()
const brandController=require('../controllers/brandController')

routes.get('/all-brands',brandController.allBrands);
routes.post('/create',brandController.brandCreate);
routes.delete('/delete/:id',brandController.brandDelete);

module.exports=routes;
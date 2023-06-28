const express=require('express');
const routes=express.Router()
const categoryController=require('../controllers/categoryController')

routes.get('/all-categories',categoryController.allCategories);
routes.post('/create',categoryController.categoryCreate);
routes.delete('/delete/:id',categoryController.categoryDelete);

module.exports=routes;
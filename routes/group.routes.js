const express=require('express');
const routes=express.Router()
const groupController=require('../controllers/groupController')

routes.get('/all-groups',groupController.allGroups);
routes.post('/create',groupController.groupCreate);
routes.delete('/delete/:id',groupController.groupDelete);

module.exports=routes;
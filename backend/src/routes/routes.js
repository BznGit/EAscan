const express = require('express');
const route = express.Router();

route.get('/albums', function(req, res, next){
    console.log('d>')
    
});
route.post('/admin', function(req, res, next){
        console.log(req.body)
        console.log(admin)
        if(admin.login===req.body.name && admin.password===req.body.password) {
            
             res.send('ok')
       } else {
        res.send('not')
       }
  
        res.end();
});

route.get('/delete/:id', function(reg, res, next){
    console.log('id>', reg.params.id)
  
});

route.get('/delete-file/:fold/:id', function(req, res, next){
    console.log('id>', req.params.id)
    console.log('id>', req.params.fold)
    
});

route.post('/upload/:fold/:id', function(req, res, next){
    console.log('id>--', req.params.fold)
  
    
});

route.post('/addfolder', function(req, res, next){
    console.log(req.body)
   
});



module.exports = route;
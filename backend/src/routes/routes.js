const express = require('express');
const route = express.Router();
const DbController = require('../controllers/dbController');

const db = new DbController();

route.get('/nodes', function(req, res, next){
    console.log('get nodes')
    db.getPools().then((nodes)=>{         
        if(nodes){
            res.send(JSON.stringify(nodes));
            res.end();
        }else{
            res.statusCode=403;
            res.send('get nodes request error in router.js');
            res.end();
        }
    })
});




module.exports = route;
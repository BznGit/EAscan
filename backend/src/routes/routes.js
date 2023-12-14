const express = require('express');
const route = express.Router();
const DbController = require('../controllers/dbController');

const db = new DbController();

route.get('/nodes', function(req, res, next){
    console.log('get nodes')
    db.getNodes().then((nodes)=>{         
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

route.get('/snapshot/:hash', function(req, res, next){
    console.log('/snapshot: ', req.params.hash)
    db.getSnapshot(req.params.hash).then((snapshot)=>{         
        if(snapshot){
            res.send(JSON.stringify(snapshot));
            res.end();
        }else{
            res.statusCode=403;
            res.send('get snapshot request error in router.js');
            res.end();
        }
    })
});




module.exports = route;
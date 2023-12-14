
const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const multer  = require('multer')
var history = require('connect-history-api-fallback');

const routes = require('./routes/routes.js');


let MainApp = class {
    start(){
        app.use(history({
            rewrites: [
              /*  {
                  from: /^\/nodes\/*$/,
                  to: function (context) {
                    console.log('--',context.parsedUrl.path)
                     return context.parsedUrl.path
                    }
                },
                {
                    from: /^\/admin\/*$/,
                    to: function (context) {
                      console.log('--',context.parsedUrl.path)
                       return context.parsedUrl.path
                      }
                  },
                  {
                    from: /^\/delete\/*/,
                  /*  to: function (context) {
                      console.log('--',context.parsedUrl.path)
                       return context.parsedUrl.path
                      }
                  }*/
              ]
        }))
        app.use(bodyParser.json());
        const storageConfig = multer.diskStorage({
            destination: (req, file, cb) =>{
                cb(null, "uploads");
            },
            filename: (req, file, cb) =>{
                cb(null, file.originalname);
            }
        });
        //app.use(multer({storage:storageConfig}).array('file'));
        app.use('/', routes);
        server.listen(8080, ()=>console.log("EAscan server started"));
        app.use(express.static('./dist')); 
    }
}

module.exports = MainApp;
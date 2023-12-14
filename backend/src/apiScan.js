
const settings = require('./nodesSettings.json');
const DbController = require('./controllers/dbController');
const ApiController = require('./controllers/apiController');
const api = new ApiController();
const db = new DbController();

let oldTopSnapshotHash = 'null';

const apiScanStarter  = function(){
    api.getGeneral().then((res)=>{
        if(!res) return;
        //console.log(res)
        if(oldTopSnapshotHash !=  res.ea.topSnapshotHash) oldTopSnapshotHash = res.ea.topSnapshotHash; 
        console.log('Scaning started!');
    }).then(()=>{
        
        setInterval(() => {
            api.getGeneral().then((res)=>{
                if(!res) return;
                    
                // Определение нового блока ---------------------------------------
                if (oldTopSnapshotHash = res.ea.topSnapshotHash){  //  <-- Ускорение  исправлять здесь: ("!=")
                    oldTopSnapshotHash = res.ea.topSnapshotHash;
                    
                    api.getNodes().then((res)=>{
                        if(!res) return;
                        res.forEach(item =>{
                            db.updateNodes(item);
                        })
                    });

                    api.getSnapShot(oldTopSnapshotHash).then((res)=>{
                        if(!res) return;
                        db.setSnapshot(res);
                    });

                    // Получение и сохранение инфы по PPLNS ----------------------
                    api.getPplns().then(res=>{
                        if(!res) return;
                        db.updatePplns(res)
                    });

                    // Получение и сохранение инфы по HourlyChart ----------------------
                    api.getHourlyChart().then(res=>{
                        if(!res) return;
                        db.updateHourlyChart(res)
                    });

                    // Получение и сохранение инфы по HourlyChart ----------------------
                    api.getDailyChart().then(res=>{
                        if(!res) return;
                        db.updateHourlyChart(res)
                    });

                    // Получение и сохранение инфы по пулам ----- ----------------------
                    api.getPools().then(res=>{
                        if(!res) return;
                        res.forEach(element => {
                            db.updatePools(element)
                            let obj = element.data.miners.hr;
                            for (let key in obj) {
                                api.getMiner(key, element.node).then(res=>{
                                    res.miner = key;
                                    res.node = element.node
                                    db.updateMiner(res)    
                                })
                            }
                        });
                        
                    });
                } 
            })
        },  settings.intervalApiSec*1000);
    });     
}
module.exports = apiScanStarter;
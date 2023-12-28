
const settings = require('./nodesSettings.json');
const DbController = require('./controllers/dbController');
const ApiController = require('./controllers/apiController');
const api = new ApiController();
const db = new DbController();

let oldTopSnapshotHash = 'null';

const  apiScanStarter  = function(){
    api.getGeneral().then((res)=>{
        if(!res) return;
        //console.log(res)
        if(oldTopSnapshotHash !=  res.ea.topSnapshotHash) oldTopSnapshotHash = res.ea.topSnapshotHash;  //  <-- Ускорение  исправлять здесь: ("!=")
        console.log('Scaning started!');
    }).then(()=>{
        
        setInterval(() => {
            api.getGeneral().then((res)=>{
                if(!res) return;
                    
                // Определение нового блока --------------------------------------------
                if (oldTopSnapshotHash != res.ea.topSnapshotHash){ 
                    console.log('Old snapshor: ', oldTopSnapshotHash);
                    oldTopSnapshotHash = res.ea.topSnapshotHash;
                    
                    console.log('New snapshor: ', oldTopSnapshotHash);
                    // Получение и сохранение инфы по нодам ----------------------------
                    api.getNodes().then((res)=>{
                        if(!res) return;
                        res.forEach(item =>{
                            db.updateNodes(item);
                        })
                    });

                    // Получение и сохранение инфы по snapchot -------------------------
                    api.getSnapShot(oldTopSnapshotHash).then((res)=>{
                        if(!res) return;
                        db.setSnapshot(res);
                    });

                    // Получение и сохранение инфы по PPLNS ----------------------------
                    api.getPplns().then(res=>{
                        if(!res) return;
                        db.updatePplns(res)
                    });

                    // Получение и сохранение инфы по HourlyChart ----------------------
                    api.getHourlyChartEA().then(res=>{
                        if(!res) return;
                        db.updateHourlyChartEA(res)
                    });

                    // Получение и сохранение инфы по HourlyChart ----------------------
                    api.getDailyChartEA().then(res=>{
                        if(!res) return;
                        db.updateDailyChartEA(res)
                    });

                    // Получение и сохранение инфы по пулам ----- ----------------------
                    api.getPools().then(res=>{
                        if(!res) return;
                        res.forEach(async function(element){
                            let hourlyChart = await api.getHourlyChart(element.node);
                            let dailyChart = await api.getDailyChart(element.node);
                            element.hourlyChart =  hourlyChart;
                            element.dailyChart =  dailyChart;
                            db.updatePools(element);
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

const settings = require('./nodesSettings.json');
const DbController = require('./controllers/dbController');
const ApiController = require('./controllers/apiController');
const { transformVNodeArgs } = require('vue');
const api = new ApiController();
const db = new DbController();

let oldTopSnapshotHash = 'null';

const  apiScanStarter  = function(){
    api.getGeneral().then((res)=>{
        if(!res) return;
        //console.log(res)
        if(oldTopSnapshotHash !==  res.ea.topSnapshotHash) {oldTopSnapshotHash = res.ea.topSnapshotHash;}  //  <-- Ускорение  исправлять здесь: ("!=")
        console.log('Scaning started!');
    }).then(()=>{
        
        setInterval(() => {
            api.getGeneral().then(async(res)=>{
                if(!res) return;
                    
                // Определение нового блока --------------------------------------------
                if (oldTopSnapshotHash !== res.ea.topSnapshotHash){ 
                    //console.log('Old snapshor: ', oldTopSnapshotHash);
                    oldTopSnapshotHash = res.ea.topSnapshotHash;
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

                    // Получение и сохранение инфы по нодам ----------------------------
                     await api.getNodes().then((res)=>{
                        if(!res) return;
                        res.forEach((item) => {
                          db.updateNodes(item);
                        })
                    });

                    // Получение и сохранение инфы по пулам ----- ----------------------
                    await api.getPools().then(async(res) =>{
                        if(!res) return;
                        for (const pool of res){
                        let hourlyChart = await api.getHourlyChart(pool.node);
                        let dailyChart = await api.getDailyChart(pool.node);
                        pool.hourlyChart =  hourlyChart;
                        pool.dailyChart =  dailyChart;
                        
                        db.updatePools(pool);
                        let obj = pool.data.miners.hr;
                            if (obj){
                                for (let key in obj) {
                                    await api.getMiner(key, pool.node).then(res=>{
                                        res.miner = key;
                                        res.node = pool.node;
                                        db.updateMiner(res)    
                                    })
                                }
                            } 
                        };
                    });

                 
                } 
            })
        },  settings.intervalApiSec*1000);
    });     
}
module.exports = apiScanStarter;
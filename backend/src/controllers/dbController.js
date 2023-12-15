const settings = require('../nodesSettings.json');
const MongoClient = require("mongodb").MongoClient;
const url = settings.dataBaseUrl;
const mongoClient = new MongoClient(url);
let db = mongoClient.db('EASCAN'); 

let DbController = class {

    //================================ SETTERS ==============================//
    // Update Pplns -------------------------------------------------------- //
    async updatePplns(data){
        try{ 
            let pplns = db.collection('pplns');
            await pplns.replaceOne({}, data, {upsert: true}); 
        }catch(err){
            console.log('db updatePplns error!', err);
        } 
    };
    
    // Update Nodes -------------------------------------------------------- //
    async updateNodes(data){
        try{ 
            let nodes = db.collection('nodes');
            await nodes.replaceOne({node: data.node}, data, {upsert: true}); 
        }catch(err){
            console.log('db updateNodes error!', err);
        } 
    };

    // Update Pools -------------------------------------------------------- //
    async updatePools(data){
        try{ 
            let pools = db.collection('pools');
            await pools.replaceOne({node: data.node}, data, {upsert: true}); 
        }catch(err){
            console.log('db updateNodes error!', err);
        } 
    };

    // Set Snapshot -------------------------------------------------------- //
    async setSnapshot(data){
        try{ 
            let snapshots = db.collection('snapshots');
            await snapshots.insertOne(data); 
        }catch(err){
            console.log('db setSnapshot error!', err);
        } 
    };

    // Update Miner -------------------------------------------------------- //
    async updateMiner(data){
        try{ 
            let nodeMiner = db.collection('miners');
            //console.log(data)
            await nodeMiner.replaceOne({$and: [{miner: data.miner}, {node: data.node} ]}, data, {upsert: true}); 
        }catch(err){
            console.log('db updateMiner error!', err);
        } 
    };

    // Up date Hourly Chart ------------------------------------------------ //
    async updateHourlyChart(data){
        try{
            let obj = {
                array: data
            } 
            let hourlyChart = db.collection('hourlyChart');
            await hourlyChart.replaceOne({}, obj, {upsert: true}); 
        }catch(err){
            console.log('db updateHourlyChart error!', err);
        } 
    };

    // Update Daily Chart ------------------------------------------------ //
    async updateDailyChart(data){
        try{
            let obj = {
                array: data
            } 
            let dailyChart = db.collection('dailyChart');
            await dailyChart.replaceOne({}, obj, {upsert: true}); 
        }catch(err){
            console.log('db updateDailyChart error!', err);
        } 
    };

    //================================ GETTERS =============================//
    // Get Nodes ---------------------------------------------------------- //
    async getNodes(){
        try{              
            let nodes = db.collection('nodes');
            let res = await nodes.find({}).toArray();
            return res
        }catch(err){
            console.log('db getNodes error!');
        } finally{
            
        }  
    };

    // Get snapshot ---------------------------------------------------------- //
    async getSnapshot(hash){
        try{              
            let nodes = db.collection('snapshots');
            let res = await nodes.findOne({snapshotHash: hash});
            return res
        }catch(err){
            console.log('db getSnapshot error!');
        } finally{
            
        }  
    };

        // Get miner ---------------------------------------------------------- //
        async getMiner(id){
            try{              
                let nodes = db.collection('miners');
                let res = await nodes.findOne({ miner: id });
                //console.log(res)
                return res
            }catch(err){
                console.log('db getMiner error!');
            } finally{
                
            }  
        };

        // Get pool ---------------------------------------------------------- //
        async getPool(ip){
            try{              
                let pools = db.collection('pools');
                let res = await pools.findOne({ node: ip });
                //console.log(res)
                return res
            }catch(err){
                console.log('db getMiner error!');
            } finally{
                
            }  
        };
}

module.exports = DbController;
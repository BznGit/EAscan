const axios = require('axios');
const settings = require('../nodesSettings');
const blockchainEA = settings.eaBlockchainlAdress;
const arrNodes = settings.nodes;

let ApiController = class {

  // Запрос PPLNS --------------------------------------------------------------------------------/
  async getPplns(){
    let obj = null;
    try{
      await axios.get('http://' + blockchainEA + ':8888/pplns/', {agent:false, timeout: 1500}).then(res => {
        obj = res.data;  
      })
    }catch(err){
      console.log('Api pplns reguest error!>>',err);
    }
    return obj;  
  };

  // Запрос GENERAL ------------------------------------------------------------------------------/
  async getGeneral(){
    let obj = null;
    try{
      await axios.get('http://' + blockchainEA + ':8888' + '/general/', {agent:false, timeout: 1500}).then(res => {
        obj = res.data;  
      })
    }catch(err){
      console.log('Api getGeneral reguest error!>>', err);
    }
  return obj; 
  };

  // Запрос SNAPSHOT -----------------------------------------------------------------------------/
  async getSnapShot(blockHash){
    let obj = null;
    try{
      await axios.get('http://' + blockchainEA + ':8888'  + '/snapshot/' + blockHash,{agent:false}).then(res => {
        obj = res.data;  
      })
    }catch(err){
      console.log('Api getSnapShot reguest error!>>', err);
    }
  return obj;  
  };

  // Запрос NODES -----------------------------------------------------------------------------/
  async getNodes(){
    let nodes = [];
    try{
 
      await Promise.allSettled(arrNodes.map(item =>
          axios.get('http://' + item.node + ':8888/general/'))).then(res => {
            let i = 0;
              res.forEach(item=>{
                if (item.status=='fulfilled'){
                    let nodeInf = item.value.data;
                    let currUrl =  item.value.request.res.responseUrl;
                    nodes.push({node: currUrl.slice(7, -13),  data: nodeInf })
                    i++ 
                }
              })     
      })    
    }catch(err){
      console.log('Api getNodes reguest error!>>', err);
    }
    let arr =[];
    arrNodes.forEach((item)=>{
      let node = nodes.find(elem=>elem.node==item.node);
      if(node!=undefined){
        let obj = item;
        item.data = node.data
        arr.push(obj)
      } 
    })
    return arr 
  };

  // Запрос POOLS -----------------------------------------------------------------------------/
  async getPools(){
    let nodes = [];
    try{
 
      await Promise.allSettled(arrNodes.map(item =>
          axios.get('http://' + item.node + ':7000/general/'))).then(res => {
            let i = 0;
              res.forEach(item=>{
                if (item.status=='fulfilled'){
                    let nodeInf = item.value.data;
                    let currUrl =  item.value.request.res.responseUrl;
                    nodes.push({node: currUrl.slice(7, -13),  data: nodeInf })
                    i++ 
                }
              })     
      })    
     // console.log(nodes)
    }catch(err){
      console.log('Api getPools reguest error!>>', err);
    }
    let arr =[];
    arrNodes.forEach((item)=>{
      let node = nodes.find(elem=>elem.node==item.node);
      if(node!=undefined){
        let obj = item;
        item.data = node.data
        arr.push(obj)
      } 
    })
    return arr 
  };

  // Запрос MINER ------------------------------------------------------------------------------/
  async getMiner(miner, node){
    let obj = null;
    try{
      await axios.get('http://' + node + ':7000/miner/' + miner, {agent:false}).then(res => {
        obj = res.data;  
      })
    }catch(err){
      console.log('Api getMiner reguest error!>>', err);
    }
  return obj; 
  };
  // Запрос HourlyChart --------------------------------------------------------------------------------/
  async getHourlyChart(){
    let obj = null;
    try{
      await axios.get('http://' + blockchainEA + ':7000/hourlyChart/', {agent:false}).then(res => {
        obj = res.data;  
      })
    }catch(err){
      console.log('Api getHourlyChart reguest error!>>',err);
    }
    return obj;  
  };

    // Запрос dailyChart--------------------------------------------------------------------------------/
    async getDailyChart(){
      let obj = null;
      try{
        await axios.get('http://' + blockchainEA + ':7000/dailyChart/', {agent:false}).then(res => {
          obj = res.data;  
        })
      }catch(err){
        console.log('Api getDailyChart reguest error!>>',err);
      }
      return obj;  
    };
 }

module.exports = ApiController;
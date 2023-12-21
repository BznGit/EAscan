import { vocabulary } from './utilsVoc';

// Возращает приставки "K, M, G, T,P" -------------------------------------------------------------
let formatHashrate = function(rate) {
  rate= parseFloat(rate); let unit= 'H/s';
  if(rate >= 1000) { rate /= 1000; unit= 'KH/s'; }
  if(rate >= 1000) { rate /= 1000; unit= 'MH/s'; }
  if(rate >= 1000) { rate /= 1000; unit= 'GH/s'; }
  if(rate >= 1000) { rate /= 1000; unit= 'TH/s'; }
  if(rate >= 1000) { rate /= 1000; unit= 'PH/s'; }
  if(rate >= 1000) { rate /= 1000; unit= 'EH/s'; }
  return [rate.toFixed(2) , unit];
};

// Возращает приставки "K, M, G, T,P"  и " тыс, млн, млрд, трлн, квадрлн" + перввод ---------------
let formatDifficulty = function(rate, big) {
  let arr=[];
  let arrShort = ['K','M','G', 'T','P'];
  let arrRus = ['тыс','млн','млрд', 'трлн','квадрлн'];
  let arrEng = ['kilo','mega','giga', 'tera','peta'];
  if(window.screen.width > 640 && big) arr = arrShort; else{
    if(localStorage.getItem('lang')=='eng')arr = arrEng; else arr = arrRus ;
  } 
  rate= parseFloat(rate); let unit= '';
  if(rate >= 1000) { rate /= 1000; unit = arr[0]; }
  if(rate >= 1000) { rate /= 1000; unit = arr[1]; }
  if(rate >= 1000) { rate /= 1000; unit = arr[2]; }
  if(rate >= 1000) { rate /= 1000; unit = arr[3]; }
  if(rate >= 1000) { rate /= 1000; unit = arr[4]; }
  return [rate.toFixed(2) , unit];
};
// Возращает число из приставки "K, M, G, T,P" ----------------------------------------------------
let koeff = function(def){
  let k = 1;
  switch (def){
      case 'КH/s' : k = Math.pow(10, 3);
          break;
      case 'MH/s' : k = Math.pow(10, 6);
        break;
      case 'GH/s' : k = Math.pow(10, 9);
        break;
      case 'TH/s' : k = Math.pow(10, 12);
        break;
      case 'PH/s' : k = Math.pow(10, 15);
        break;
    }
    return k
};

// Возращает разницу времени между заданным и текущим ---------------------------------------------
let timeAgo = function(old){
  let now = new Date();
  let ts = new Date(old*1000)
  let when = new Date(now - ts); 
  let result = when.getUTCSeconds();
  return result
}

// Возращает объект с датой (в формате РУС и ENG) и временем + первод  ----------------------------
let getFormatedCurrDate = function(time){
  if(time) {
    let now = new Date(time*1000)
    return now.getHours() + ':' + (now.getMinutes() < 10? '0' + now.getMinutes(): now.getMinutes()) + ':' +
    (now.getSeconds() < 10? '0' + now.getSeconds(): now.getSeconds());
  }
  let months = null;
  let textDate =null;
  let textTime =null;
  let obj = null;
  let now = new Date()
  let day = now.getDate(); 
  let year = now.getFullYear();
  let formatTime = now.getHours() + ':' + (now.getMinutes() < 10? '0' + now.getMinutes(): now.getMinutes());
  
  if (localStorage.getItem('lang')=='eng'){
    months = vocabulary.eng.months; 
    let month = months[now.getMonth()]
    textDate = vocabulary.eng.currentDate + ': '+ month + ' ' + day + ', ' + year;
    textTime = vocabulary.eng.currentTime;
  } else{
    months = vocabulary.rus.months;
    let month = months[now.getMonth()]
    textDate = vocabulary.rus.currentDate + ': '+ day + ' ' + month + ' ' + year;
    textTime = vocabulary.rus.currentTime;
  }
  return obj = {
    date : textDate,
    time : textTime +': '+ formatTime, 
  }
}
// Возращает время в формате "12 часов 15 мин 54 сек" + перввод -----------------------------------
let getFormatedTime = function(time){
  if(time) {
    let now = new Date(time);

    let textHour = null;

    if(now.getHours() < 5) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour ' : textHour = '&nbsp;часа ';
    if(now.getHours() > 4) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour ' : textHour = '&nbsp;часов ';
    if(now.getHours() ==1) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour ' : textHour = '&nbsp;час ';
    if(now.getHours() ==0) (localStorage.getItem('lang')=='eng')? textHour = ' ' : textHour = ' ';
    
    if (localStorage.getItem('lang')=='eng'){
      return (now.getHours()==0? '' : now.getHours()) + textHour + (now.getMinutes() < 10? '0' + now.getMinutes(): now.getMinutes()) + '&nbsp;min ' +
      (now.getSeconds() < 10? '0' + now.getSeconds(): now.getSeconds()) + '&nbsp;sec';
    }else{
      return (now.getHours()==0? '' : now.getHours()) + textHour + (now.getMinutes() < 10? '0' + now.getMinutes(): now.getMinutes()) + '&nbsp;мин ' +
      (now.getSeconds() < 10? '0' + now.getSeconds(): now.getSeconds()) + '&nbsp;сек';
    }
  }
}

let getTimefromSec = function(sec){
  if(sec){
    let years = Math.trunc(sec/(60*60*24*30*12));
    let ostatok = sec % (60*60*24*30*12);
    let months = Math.trunc(ostatok/(60*60*24*30));
    ostatok = ostatok % (60*60*24*30);
    let days =Math.trunc(ostatok/(60*60*24));
    ostatok = ostatok%(60*60*24)
    let hours = Math.trunc(ostatok/(60*60));
    ostatok = ostatok%(60*60);
    let minutes = Math.trunc(ostatok/60);
   
    let textYear = null;
    let textMonth =null;
    let textDay = null;
    let textHour = null;
    let textMin = null;
    
    let yearsStr = years.toString();
    if(parseInt(yearsStr[yearsStr.length-1],10)<5)(localStorage.getItem('lang')=='eng')? textYear = '&nbsp;years ' : textYear = '&nbsp;года ';
    if(parseInt(yearsStr[yearsStr.length-1],10)>4 || parseInt(yearsStr[yearsStr.length-1],10)==0)(localStorage.getItem('lang')=='eng')? textYear = '&nbsp;years ' : textYear = '&nbsp;лет ';
    if(parseInt(yearsStr[yearsStr.length-1],10)==1)(localStorage.getItem('lang')=='eng')? textYear = ' years ' : textYear = '&nbsp;год ';
    if(years >10 && years <19 ) (localStorage.getItem('lang')=='eng')? textYear = '&nbsp;years ' : textYear = '&nbsp;лет ';
    if(years ==0) (localStorage.getItem('lang')=='eng')? textYear = ' ' : textYear = ' ';

    if(months < 5) (localStorage.getItem('lang')=='eng')? textMonth = '&nbsp;months' : textMonth = '&nbsp;месяца';
    if(months > 4) (localStorage.getItem('lang')=='eng')? textMonth = '&nbsp;months' : textMonth = '&nbsp;месяцев';
    if(months ==1) (localStorage.getItem('lang')=='eng')? textMonth = '&nbsp;month' : textMonth = '&nbsp;месяц';
    if(months ==0) (localStorage.getItem('lang')=='eng')? textMonth = ' ' : textMonth = ' ';
   
    let daysStr = days.toString();
    if(parseInt(daysStr[daysStr.length-1],10)<5)(localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days ' : textDay = '&nbsp;дня';
    if(parseInt(daysStr[daysStr.length-1],10)>4 || parseInt(daysStr[daysStr.length-1],10)==0)(localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days' : textDay = '&nbsp;дней';
    if(parseInt(daysStr[daysStr.length-1],10)==1)(localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days' : textDay = '&nbsp;день';
    if(days >10 && days <19 ) (localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days' : textDay = '&nbsp;дней';
    if(days ==0) (localStorage.getItem('lang')=='eng')? textDay = ' ' : textDay = ' ';
    

    if(hours == 21) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;час';
    if(hours < 5 || hours > 21) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;часа';
    if(hours > 4 && hours < 21) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;часов';
    if(hours ==1) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;час';
    if(hours ==0) (localStorage.getItem('lang')=='eng')? textHour = ' ' : textHour = ' ';

    let minStr = minutes.toString();
    if(parseInt(minStr[minStr.length-1],10)<5)(localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минуты';
    if(parseInt(minStr[minStr.length-1],10)>4 || parseInt(minStr[minStr.length-1],10)==0)(localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минут';
    if(parseInt(minStr[minStr.length-1],10)==1)(localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минута';
    if(minutes >10 && minutes <19 ) (localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минут';
    if(minutes ==0) (localStorage.getItem('lang')=='eng')? textMin = ' ' : textMin = ' ';
    
   
    if (localStorage.getItem('lang')=='eng'){
      return (years==0? '' : years)   + textYear + ' '
          + (months==0? '' : months) + textMonth + ' '
          + (days==0? '' : days)     + textDay + ' '
          + (hours==0? '' : hours)   + textHour + ' '
          + (minutes == 0? '' : minutes) + ' '
          + textMin; 
    }else{
      return  (years==0? '' : years)   + textYear + ' '
            + (months==0? '' : months) + textMonth + ' '
            + (days==0? '' : days)     + textDay + ' ' 
            + (hours==0? '' : hours)   + textHour + ' '
            + (minutes == 0? ''  : minutes) + ' '
            + textMin; 
    }
  }
}

let getTimefromSecBlock = function(sec){
  if(sec){
    let years = Math.trunc(sec/(60*60*24*30*12));
    let ostatok = sec % (60*60*24*30*12);
    let days =Math.trunc(ostatok/(60*60*24));
    ostatok = ostatok%(60*60*24)
    let hours = Math.trunc(ostatok/(60*60));
    ostatok = ostatok%(60*60);
    let minutes = Math.trunc(ostatok/60);
   
    let textYear = null;

    let textDay = null;
    let textHour = null;
    let textMin = null;
    
    let yearsStr = years.toString();
    if(parseInt(yearsStr[yearsStr.length-1],10)<5)(localStorage.getItem('lang')=='eng')? textYear = '&nbsp;years ' : textYear = '&nbsp;года ';
    if(parseInt(yearsStr[yearsStr.length-1],10)>4 || parseInt(yearsStr[yearsStr.length-1],10)==0)(localStorage.getItem('lang')=='eng')? textYear = '&nbsp;years ' : textYear = '&nbsp;лет ';
    if(parseInt(yearsStr[yearsStr.length-1],10)==1)(localStorage.getItem('lang')=='eng')? textYear = ' years ' : textYear = '&nbsp;год ';
    if(years >10 && years <19 ) (localStorage.getItem('lang')=='eng')? textYear = '&nbsp;years ' : textYear = '&nbsp;лет ';
    if(years ==0) (localStorage.getItem('lang')=='eng')? textYear = ' ' : textYear = ' ';
 
    let daysStr = days.toString();
    if(parseInt(daysStr[daysStr.length-1],10)<5)(localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days ' : textDay = '&nbsp;дня';
    if(parseInt(daysStr[daysStr.length-1],10)>4 || parseInt(daysStr[daysStr.length-1],10)==0)(localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days' : textDay = '&nbsp;дней';
    if(parseInt(daysStr[daysStr.length-1],10)==1)(localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days' : textDay = '&nbsp;день';
    if(days >10 && days <19 ) (localStorage.getItem('lang')=='eng')? textDay = '&nbsp;days' : textDay = '&nbsp;дней';
    if(days ==0) (localStorage.getItem('lang')=='eng')? textDay = ' ' : textDay = ' ';
    

    if(hours == 21) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;час';
    if(hours < 5 || hours > 21) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;часа';
    if(hours > 4 && hours < 21) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;часов';
    if(hours ==1) (localStorage.getItem('lang')=='eng')? textHour = '&nbsp;hour' : textHour = '&nbsp;час';
    if(hours ==0) (localStorage.getItem('lang')=='eng')? textHour = ' ' : textHour = ' ';

    let minStr = minutes.toString();
    if(parseInt(minStr[minStr.length-1],10)<5)(localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минуты';
    if(parseInt(minStr[minStr.length-1],10)>4 || parseInt(minStr[minStr.length-1],10)==0)(localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минут';
    if(parseInt(minStr[minStr.length-1],10)==1)(localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минута';
    if(minutes >10 && minutes <19 ) (localStorage.getItem('lang')=='eng')? textMin = '&nbsp;minutes' : textMin = '&nbsp;минут';
    if(minutes ==0) (localStorage.getItem('lang')=='eng')? textMin = ' ' : textMin = ' ';
    
    if (localStorage.getItem('lang')=='eng'){  
      if (years>0){
        return (years==0? '' : years)   + textYear + ' '
              + (days==0? '' : days)     + textDay 
      }
      if (years==0){
        return + (days==0? '' : days)     + textDay + ' ' 
                + (hours==0? '' : hours)   + textHour + ' '
                + (minutes == 0? ''  : minutes) + ' '
                + textMin; 
        }
      }else{
        if (years>0){
          return (years==0? '' : years)   + textYear + ' '
                + (days==0? '' : days)     + textDay + ' '
        }
        if (years==0){
          return + (days==0? '' : days)     + textDay + ' ' 
                  + (hours==0? '' : hours)   + textHour + ' '
                  + (minutes == 0? ''  : minutes) + ' '
                  + textMin; 
      }
    }
}
}
let lastChar = function(word){
  word = '...' + word.slice(word.length-15, word.length);
  return word
}

let getDelta = function(elem, first, last, fixed){
  let delta = (last - first).toFixed(fixed);
  if(delta>0){
    elem.innerHTML = '+' + delta ;
    elem.classList.add("green");
    elem.classList.remove("red");
  }
  if(delta==0){
    elem.innerHTML =  '-'
      elem.classList.remove("red");
      elem.classList.remove("green");
    }
  if(delta<0){ 
    elem.innerHTML =  delta;
    elem.classList.add("red");
    elem.classList.remove("green");
  }
}
let swipe = function(elem){
  console.log()
  var startPoint={};
  var nowPoint;
  var ldelay;
  elem.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    startPoint.x=event.changedTouches[0].pageX;
    startPoint.y=event.changedTouches[0].pageY;
    ldelay=new Date();
  }, false);
  /*Ловим движение пальцем*/
  elem.addEventListener('touchmove', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var otk={};
    nowPoint=event.changedTouches[0];
    otk.x=nowPoint.pageX-startPoint.x;
    /*Обработайте данные*/
    /*Для примера*/
    if(Math.abs(otk.x)>200){
      if(otk.x<0){/*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/}
      if(otk.x>0){/*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/}
      startPoint={x:nowPoint.pageX,y:nowPoint.pageY};
    }
  }, false);
  /*Ловим отпускание пальца*/
  elem.addEventListener('touchend', function(event) {
    var pdelay=new Date();
    nowPoint=event.changedTouches[0];
    var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
    var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime()-ldelay.getTime())<200) {
      if (xAbs > yAbs) {
        if (nowPoint.pageX < startPoint.x){showSlides(slideIndex += 1)}
        else{/*СВАЙП ВПРАВО*/showSlides(slideIndex -= 1)}
      }
      else {
        if (nowPoint.pageY < startPoint.y){/*СВАЙП ВВЕРХ*/}
        else{/*СВАЙП ВНИЗ*/}
      }
    }
  }, false);
}

// Подсчитывает сколько повторяющихся элементов массиве -----------
function repaetsArrElmemts(arr){
  let res = arr.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  },{})
  return res
}
// Округляет до ближайшего часа -----------
function roundToNearestHour(date1) {
  let date = new Date(date1)
  date.setMinutes(date.getMinutes() + 30);
  date.setMinutes(0, 0, 0);

  return date;
}


export {
  koeff, 
  formatHashrate, 
  formatDifficulty,
  timeAgo, getFormatedCurrDate,
  getFormatedTime,
  getTimefromSec,
  getTimefromSecBlock,
  lastChar,
  getDelta,
  swipe,
  repaetsArrElmemts, 
  roundToNearestHour
}

/*function  zoomBoxItem(min, max){
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x, top)
  ctx.lineTo(x, bottom)
 ctx.fillStyle = 'rgba(237, 171, 109, 0.4)';
  ctx.fillRect(x.getPixelForValue(min), top, x.getPixelForValue(max) - x.getPixelForValue(min),  height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#FF5B00';
  ctx.strokeRect(x.getPixelForValue(min), top, x.getPixelForValue(max) - x.getPixelForValue(min),  height);
  ctx.closePath();

  const angel = Math.PI / 180;

  //swiperButton(x.getPixelForValue(min));
  //swiperButton(x.getPixelForValue(max));

 /* function swiperButton(position){
    
    ctx.beginPath();
    ctx.strokeStyle =  'rgba(54,162,235, 1)';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#FFF';
    ctx.arc(position, height /2 , 10, angel * 0, angel * 360, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.strokeStyle = 'rgba(54,162,235, 1)';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(position - 3, height / 2 - 5 );
    ctx.lineTo(position - 3, height / 2 + 5 );
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(position + 3, height / 2 - 5 );
    ctx.lineTo(position + 3, height / 2 + 5 );
    ctx.stroke();
    ctx.restore();
  }
}


canvas.addEventListener('mousemove', (e)=>{
  mouseCursor(e)

}) 

function mouseCursor(mousemove){
 
  if( mousemove.offsetX >= x.getPixelForValue(min) - 10 && mousemove.offsetX <= x.getPixelForValue(min) + 10 ||
      mousemove.offsetX >= x.getPixelForValue(max) - 10 && mousemove.offsetX <= x.getPixelForValue(max) + 10 ){
    canvas.style.cursor = 'ew-resize'
  } else if(mousemove.offsetX >= x.getPixelForValue(min) + 10 && mousemove.offsetX <= x.getPixelForValue(max) - 10 ){
    canvas.style.cursor = 'move'
  } else {
    canvas.style.cursor = 'default'
  } 
} */

/* canvas.addEventListener('mousedown', (e)=>{
 // dragStart(e);
});
canvas.addEventListener('mouseup', (e)=>{
  canvas.onmousemove = null;
  
})*/

/* function dragStart(drag){
  // for leftswipe btn
  if(drag.offsetX  >= x.getPixelForValue(min) - 10 && drag.offsetX <= x.getPixelForValue(min) + 10){
    canvas.onmousemove = (e)=>{
      dragMove(chartAll, e);
    }
    function dragMove(chart, dragDelta){
      const timestamp = x.getValueForPixel(dragDelta.offsetX);
      const dayTimestamp = new Date(timestamp).setHours(0, 0,0,0)
      const scrollPoint = chart.data.datasets[0].data.findIndex(item=>new Date(item.x).setHours(0, 0,0,0) == dayTimestamp)   
     // chartAll.options.scales.x.min =  chartAll.data.datasets[0].data[scrollPoint].x;
      chartAll.update('none');
      chartSmall.update('none');
      zoomBoxItem(chartAll.data.datasets[0].data[scrollPoint].x , chartAll.options.scales.x.max )
    }
  }
  // for right swipe btn
  if(drag.offsetX  >= x.getPixelForValue(max) - 10 && drag.offsetX <= x.getPixelForValue(max) + 10){
    canvas.onmousemove = (e)=>{
      dragMove(chartAll, e);
    }
    function dragMove(chart, dragDelta){
      const timestamp = x.getValueForPixel(dragDelta.offsetX);
      const dayTimestamp = new Date(timestamp).setHours(0, 0,0,0)
      const scrollPoint = chart.data.datasets[0].data.findIndex(item=>new Date(item.x).setHours(0, 0,0,0) == dayTimestamp)   
     // chartAll.options.scales.x.max =  chartAll.data.datasets[0].data[scrollPoint].x;
      chartAll.update('none');
      chartSmall.update('none');
     // zoomBoxItem( chartAll.options.scales.x.min, chartAll.data.datasets[0].data[scrollPoint].x)
      
    }
    
  }
}
}*/
(function(){"use strict";var t={40:function(t,e,a){var n=a(9242),l=a(3396),o=a(1076),r=a(4870),i={__name:"App",setup(t){let e=(0,r.iH)();return(0,l.bv)((()=>{o.Z.get("/nodes").then((t=>e.value=t.data))})),(t,e)=>{const a=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(a)}}};const s=i;var u=s,d=a(2483),c=a(7139),w=a(5866),p=(a(8189),a(4618)),f={__name:"Chart",props:{idChart:Number,from:String,data:Object,koef:String},setup(t){const e={id:"verticalLiner",afterInit:(t,e,a)=>{t.verticalLiner={}},afterEvent:(t,e,a)=>{const{inChartArea:n}=e;t.verticalLiner={draw:n}},beforeTooltipDraw:(t,e,a)=>{const{draw:n}=t.verticalLiner;if(!n)return;const{ctx:l}=t,{top:o,bottom:r,left:i,right:s}=t.chartArea,{tooltip:u}=e,d=u?.caretX,c=u?.caretY;d&&(l.save(),l.beginPath(),l.setLineDash([5,3]),l.strokeStyle="#ff0000",l.moveTo(d,o),l.lineTo(d,r),l.moveTo(i,c),l.lineTo(s,c),l.stroke(),l.restore())}},a=t;p.kL.register(p.uw,p.f$,p.od,p.jn,p.Dx,p.u,p.De,p.FB,e);let n=(0,l.Fl)((()=>({maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{plugin:{line:{dash:[1,2],color:"blue",width:1}},legend:{display:!0,labels:{display:!0,usePointStyle:!1}},tooltip:{usePointStyle:!0,callbacks:{labelPointStyle:function(t){return{pointStyle:"circule",rotation:0}},label:function(t){return"Hashrate: "+t.parsed.y+" "+a.koef}}}},scales:{x:{type:"time",time:{unit:"minute",displayFormats:{minute:"HH:mm",hour:"HH:mm",day:"dd.MM",week:"dd.MM.yy"}}},"left-y-axis":{type:"linear",position:"left",title:{text:"-",display:!0},min:0}}})));const o=(0,l.Fl)((()=>({datasets:[{label:"Hashrate",borderColor:"#0068dd",backgroundColor:"#0068dd",cubicInterpolationMode:"monotone",pointRadius:0,yAxisID:"left-y-axis",hidden:!1,data:a.data}]})));return(t,e)=>((0,l.wg)(),(0,l.j4)((0,r.SU)(w.x1),{data:o.value,options:(0,r.SU)(n)},null,8,["data","options"]))}};const h=f;var _=h;let g=function(t){t=parseFloat(t);let e="H/s";return t>=1e3&&(t/=1e3,e="KH/s"),t>=1e3&&(t/=1e3,e="MH/s"),t>=1e3&&(t/=1e3,e="GH/s"),t>=1e3&&(t/=1e3,e="TH/s"),t>=1e3&&(t/=1e3,e="PH/s"),t>=1e3&&(t/=1e3,e="EH/s"),[t.toFixed(2),e]};const v=t=>((0,l.dD)("data-v-15e55530"),t=t(),(0,l.Cn)(),t),m=v((()=>(0,l._)("h1",null,"Frea network",-1))),k={class:"node noborder"},y={class:"info-tabel"},D={class:"info-tabel"},b={key:"name"},H={key:1},z={class:"chart"},S=v((()=>(0,l._)("h2",null,"Pools",-1))),U={class:"node",key:"node"},j={class:"info-tabel"},Y={class:"info-tabel"},W=v((()=>(0,l._)("td",null,"Node: ",-1))),x=v((()=>(0,l._)("td",null,"Pool url: ",-1))),C=["href"];var O={__name:"Nodes",setup(t){let e=(0,r.iH)({}),a=(0,r.iH)({}),n=(0,r.iH)({}),i=(0,r.iH)();return o.Z.get("/nodes").then((t=>{e.value=t.data,a=t.data[0].data.ea})),o.Z.get("/chart/day").then((t=>{n.value=t.data.entries.map((t=>({x:new Date(t.sliceTime),y:g(parseInt(t.hashRate))[0]}))),i=g(parseInt(t.data.entries[0].hashRate))[1]})),(t,o)=>{const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[m,(0,l._)("div",k,[(0,l._)("table",y,[(0,l._)("table",D,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(a),((t,e)=>((0,l.wg)(),(0,l.iD)("tr",b,[(0,l._)("td",null,(0,c.zw)(e)+":",1),"topSnapshotHash"==e?((0,l.wg)(),(0,l.j4)(s,{key:0,to:"/snapshot/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t),1)])),_:2},1032,["to"])):((0,l.wg)(),(0,l.iD)("td",H,(0,c.zw)(t),1))])))),128))])]),(0,l._)("div",z,[(0,l.Wm)(_,{idChart:45,data:(0,r.SU)(n),koef:(0,r.SU)(i)},null,8,["data","koef"])])]),S,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(e),((t,e)=>((0,l.wg)(),(0,l.iD)("div",U,[(0,l._)("table",j,[(0,l._)("table",Y,[(0,l._)("tr",null,[W,(0,l._)("td",null,[(0,l.Wm)(s,{to:"/pool/"+t.node.replace(/[\.\/]/g,"-")},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t.node),1)])),_:2},1032,["to"])])]),(0,l._)("tr",null,[x,(0,l._)("td",null,[(0,l._)("a",{href:"http://"+t.url},(0,c.zw)(t.url),9,C)])])])])])))),128))],64)}}},I=a(89);const K=(0,I.Z)(O,[["__scopeId","data-v-15e55530"]]);var P=K;const M={key:1};var T={__name:"Solution",props:{data:Object},setup(t){const e=(0,r.iH)(!1);return(a,o)=>{const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("td",null,[(0,l._)("button",{onClick:o[0]||(o[0]=t=>e.value=!e.value)},(0,c.zw)(e.value?"^":"v"),1),(0,l.wy)((0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.data,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,(0,c.zw)(e),1),"miner"==e?((0,l.wg)(),(0,l.j4)(r,{key:0,to:"/miner/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t),1)])),_:2},1032,["to"])):((0,l.wg)(),(0,l.iD)("td",M,(0,c.zw)(t),1))])))),256))],512),[[n.F8,e.value]])])}}};const Z=(0,I.Z)(T,[["__scopeId","data-v-158f7322"]]);var F=Z;const q={class:"up"},L={key:2},R={key:3},$={key:4};var A={__name:"Shares",props:{data:Object,name:String},setup(t){const e=(0,r.iH)(!1);return(a,o)=>{const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("td",null,[(0,l._)("button",{onClick:o[0]||(o[0]=t=>e.value=!e.value)},(0,c.zw)(e.value?"^":"v"),1),(0,l.wy)((0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.data,((e,a)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",q,(0,c.zw)(t.name)+": "+(0,c.zw)(a+1),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,(0,c.zw)(e)+": ",1),"miner"==e?((0,l.wg)(),(0,l.j4)(r,{key:0,to:"/miner/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t),1)])),_:2},1032,["to"])):"snapshotHash"==e?((0,l.wg)(),(0,l.j4)(r,{key:1,to:"/snapshot/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t),1)])),_:2},1032,["to"])):"transactions"==e?((0,l.wg)(),(0,l.iD)("td",L,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,(t=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l.Wm)(r,{to:"/miner/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t),1)])),_:2},1032,["to"])])))),256))])):"manifest"==e?((0,l.wg)(),(0,l.iD)("td",R,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,(0,c.zw)(e)+": ",1),(0,l._)("td",null,(0,c.zw)(t),1)])))),256))])):((0,l.wg)(),(0,l.iD)("td",$,(0,c.zw)(t),1))])))),256))])])))),256))],512),[[n.F8,e.value]])])}}};const E=(0,I.Z)(A,[["__scopeId","data-v-f122fa96"]]);var V=E;const N=t=>((0,l.dD)("data-v-cfecfcf8"),t=t(),(0,l.Cn)(),t),B=N((()=>(0,l._)("h1",null,"Snapshot ",-1))),G={class:"node"},X={class:"info-tabel"},J={key:"snapshot"},Q={key:0},tt={key:1},et={key:7};var at={__name:"Snapshot",setup(t){const e=(0,d.yj)();let a=(0,r.iH)({});return o.Z.get("/snapshot/"+e.params.hash).then((t=>a.value=t.data)),(0,l.YP)(e,((t,n)=>{console.log("--\x3e",t,e.params.hash),o.Z.get("/snapshot/"+e.params.hash).then((t=>a.value=t.data))})),(t,e)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[B,(0,l._)("h2",null,(0,c.zw)((0,r.SU)(a).snapshotHash),1),(0,l._)("div",G,[(0,l._)("table",X,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(a),((e,a)=>((0,l.wg)(),(0,l.iD)("tr",J,["_id"!=a?((0,l.wg)(),(0,l.iD)("td",Q,(0,c.zw)(a)+": ",1)):(0,l.kq)("",!0),"parentSnapshotHash"==a?((0,l.wg)(),(0,l.iD)("td",tt,[(0,l.Wm)(n,{to:"/snapshot/"+e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e),1)])),_:2},1032,["to"])])):"Solution"==a?(0,l.WI)(t.$slots,"default",{key:2},(()=>[(0,l.Wm)(F,{data:e},null,8,["data"])])):"Shares"==a?(0,l.WI)(t.$slots,"default",{key:3},(()=>[(0,l.Wm)(V,{data:e,name:"Share"},null,8,["data"])])):"ValidatorsEntries"==a?(0,l.WI)(t.$slots,"default",{key:4},(()=>[(0,l.Wm)(V,{data:e,name:"Validators entries"},null,8,["data"])])):"ValidatorReferences"==a?(0,l.WI)(t.$slots,"default",{key:5},(()=>[(0,l.Wm)(V,{data:e,name:"Validator reference"},null,8,["data"])])):"TotalWork"==a?(0,l.WI)(t.$slots,"default",{key:6},(()=>[(0,l.Wm)(V,{data:e,name:"work"},null,8,["data"])])):"_id"!=a?((0,l.wg)(),(0,l.iD)("td",et,(0,c.zw)(e),1)):(0,l.kq)("",!0)])))),128))])])],64)}}};const nt=(0,I.Z)(at,[["__scopeId","data-v-cfecfcf8"]]);var lt=nt;const ot=t=>((0,l.dD)("data-v-4115a0ec"),t=t(),(0,l.Cn)(),t),rt=ot((()=>(0,l._)("h1",null,"Miner",-1))),it={class:"up"},st={key:0},ut={key:1,class:"up"},dt={class:"up"},ct={key:0},wt={class:"up"},pt={key:1},ft={key:2};var ht={__name:"Miner",setup(t){const e=(0,d.yj)();let a=(0,r.iH)({});return o.Z.get("/miner/"+e.params.id).then((t=>{a.value=t.data,console.log(t.data)})),(t,e)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[rt,(0,l._)("h2",null,(0,c.zw)((0,r.SU)(a).miner),1),(0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(a),((t,e)=>((0,l.wg)(),(0,l.iD)("tr",it,["_id"!=e?((0,l.wg)(),(0,l.iD)("td",st,(0,c.zw)(e)+": ",1)):(0,l.kq)("",!0),"hr"==e?((0,l.wg)(),(0,l.iD)("td",ut,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",dt,(0,c.zw)(e)+" > ",1),"workers"==e?((0,l.wg)(),(0,l.iD)("td",ct,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",wt,(0,c.zw)(e)+": ",1),(0,l._)("td",null,(0,c.zw)(t),1)])))),256))])):((0,l.wg)(),(0,l.iD)("td",pt,(0,c.zw)(t),1))])))),256))])):"_id"!=e&&"node"!=e?((0,l.wg)(),(0,l.iD)("td",ft,(0,c.zw)(t),1)):(0,l.kq)("",!0),"node"==e?((0,l.wg)(),(0,l.j4)(n,{key:3,to:"/pool/"+t.replace(/[\.\/]/g,"-")},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t),1)])),_:2},1032,["to"])):(0,l.kq)("",!0)])))),256))])],64)}}};const _t=(0,I.Z)(ht,[["__scopeId","data-v-4115a0ec"]]);var gt=_t;const vt=t=>((0,l.dD)("data-v-6ada45be"),t=t(),(0,l.Cn)(),t),mt=vt((()=>(0,l._)("h1",null,"Pool",-1))),kt={class:"row"},yt=vt((()=>(0,l._)("td",null,"URL: ",-1))),Dt=["href"],bt={class:"up"},Ht={key:0},zt={key:1,class:"up"},St={class:"up"},Ut={key:0},jt={class:"up"},Yt={key:1},Wt={key:2},xt={class:"chart"};var Ct={__name:"Pool",setup(t){const e=(0,d.yj)(),a=(0,r.iH)([]);console.log(e.params.ip);let n=(0,r.iH)({}),i=(0,r.iH)();return o.Z.get("/pool/"+e.params.ip).then((t=>{a.value=t.data.hourlyChart.map((t=>({x:new Date(t.sliceTime),y:g(t.sliceWork*Math.pow(2,32)/(t.sliceDuration/1e3))[0]}))),i=g(t.data.dailyChart[0].sliceWork*Math.pow(2,32)/t.data.hourlyChart[0].sliceDuration/1e3)[1],n.value=t.data})),(t,e)=>{const o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[mt,(0,l._)("div",kt,[(0,l._)("table",null,[(0,l._)("tr",null,[yt,(0,l._)("td",null,[(0,l._)("a",{href:"http://"+(0,r.SU)(n).url},(0,c.zw)((0,r.SU)(n).url),9,Dt)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(n).data,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",bt,["_id"!=e?((0,l.wg)(),(0,l.iD)("td",Ht,(0,c.zw)(e)+": ",1)):(0,l.kq)("",!0),"miners"==e?((0,l.wg)(),(0,l.iD)("td",zt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",St,(0,c.zw)(e)+">",1),"hr"==e?((0,l.wg)(),(0,l.iD)("td",Ut,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",jt,[(0,l._)("td",null,[(0,l.Wm)(o,{class:"up",to:"/miner/"+e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e)+": ",1)])),_:2},1032,["to"])]),(0,l._)("td",null,(0,c.zw)(t),1)])))),256))])):((0,l.wg)(),(0,l.iD)("td",Yt,(0,c.zw)(t),1))])))),256))])):"_id"!=e&&"node"!=e?((0,l.wg)(),(0,l.iD)("td",Wt,(0,c.zw)(t),1)):(0,l.kq)("",!0)])))),256))]),(0,l._)("div",xt,[(0,l.Wm)(_,{idChart:44,data:a.value,koef:(0,r.SU)(i)},null,8,["data","koef"])])])],64)}}};const Ot=(0,I.Z)(Ct,[["__scopeId","data-v-6ada45be"]]);var It=Ot;const Kt=[{path:"/",name:"nodes",component:P},{path:"/snapshot/:hash",name:"snapshot",component:lt},{path:"/miner/:id",component:gt},{path:"/pool/:ip",component:It}],Pt=(0,d.p7)({history:(0,d.PO)("/"),routes:Kt});var Mt=Pt;(0,n.ri)(u).use(Mt).mount("#app")}},e={};function a(n){var l=e[n];if(void 0!==l)return l.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,l,o){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],l=t[d][1],o=t[d][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(i=!1,o<r&&(r=o));if(i){t.splice(d--,1);var u=l();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,l,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,o,r=n[0],i=n[1],s=n[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(s)var d=s(a)}for(e&&e(n);u<r.length;u++)o=r[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkeascan"]=self["webpackChunkeascan"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(40)}));n=a.O(n)})();
//# sourceMappingURL=app.da21f517.js.map
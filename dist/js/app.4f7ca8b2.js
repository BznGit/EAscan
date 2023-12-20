(function(){"use strict";var t={2859:function(t,n,e){var a=e(9242),l=e(3396),o=e(1076),r=e(4870),u={__name:"App",setup(t){let n=(0,r.iH)();return(0,l.bv)((()=>{o.Z.get("/nodes").then((t=>n.value=t.data))})),(t,n)=>{const e=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(e)}}};const i=u;var s=i,d=e(2483),w=e(7139),c=e(9646),p=e(5866);const g=(0,l._)("h1",null," Chart",-1);var _={__name:"Chart",setup(t){c.kL.register(c.uw,c.f$,c.ZL,c.Dx,c.u,c.De);let n=(0,r.iH)({data:{labels:["January","February","March"],datasets:[{data:[40,20,12]}]},options:{responsive:!0}}),e=(0,r.iH)({});return o.Z.get("/chart/hour").then((t=>e.value=t.data)),(t,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[g,(0,l.Uk)(" "+(0,w.zw)((0,r.SU)(e))+" ",1),(0,l.Wm)((0,r.SU)(p.$Q),{data:(0,r.SU)(n).data,options:(0,r.SU)(n).options},null,8,["data","options"])],64))}};const f=_;var h=f;const v=t=>((0,l.dD)("data-v-0e56fa71"),t=t(),(0,l.Cn)(),t),k=v((()=>(0,l._)("h1",null,"Nodes",-1))),m={class:"node",key:"node"},D=v((()=>(0,l._)("td",null,"Node:",-1))),y=v((()=>(0,l._)("td",null,"Pool url:",-1))),z={key:"name"},H={key:1};var b={__name:"Nodes",setup(t){let n=(0,r.iH)({});return o.Z.get("/nodes").then((t=>n.value=t.data)),(t,e)=>{const a=(0,l.up)("router-link"),o=(0,l.up)("tabel");return(0,l.wg)(),(0,l.iD)(l.HY,null,[k,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(n),(t=>((0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(o,{class:"info-tabel"},{default:(0,l.w5)((()=>[(0,l._)("tr",null,[D,(0,l._)("td",null,(0,w.zw)(t.node),1)]),(0,l._)("tr",null,[y,(0,l._)("td",null,(0,w.zw)(t.url),1)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.data.ea,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",z,[(0,l._)("td",null,(0,w.zw)(n)+":",1),"topSnapshotHash"==n?((0,l.wg)(),(0,l.j4)(a,{key:0,to:"/snapshot/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(t),1)])),_:2},1032,["to"])):((0,l.wg)(),(0,l.iD)("td",H,(0,w.zw)(t),1))])))),128))])),_:2},1024),(0,l.Wm)(h)])))),128))],64)}}},S=e(89);const U=(0,S.Z)(b,[["__scopeId","data-v-0e56fa71"]]);var Y=U;const j={key:1};var W={__name:"Solution",props:{data:String},setup(t){const n=(0,r.iH)(!1);return(e,o)=>{const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("td",null,[(0,l._)("button",{onClick:o[0]||(o[0]=t=>n.value=!n.value)},(0,w.zw)(n.value?"^":"v"),1),(0,l.wy)((0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.data,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,(0,w.zw)(n),1),"miner"==n?((0,l.wg)(),(0,l.j4)(r,{key:0,to:"/miner/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(t),1)])),_:2},1032,["to"])):((0,l.wg)(),(0,l.iD)("td",j,(0,w.zw)(t),1))])))),256))],512),[[a.F8,n.value]])])}}};const K=(0,S.Z)(W,[["__scopeId","data-v-37d039f4"]]);var O=K;const Z={class:"up"},I={key:2},C={key:3},P={key:4};var q={__name:"Shares",props:{data:String,name:String},setup(t){const n=(0,r.iH)(!1);return(e,o)=>{const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("td",null,[(0,l._)("button",{onClick:o[0]||(o[0]=t=>n.value=!n.value)},(0,w.zw)(n.value?"^":"v"),1),(0,l.wy)((0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.data,((n,e)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",Z,(0,w.zw)(t.name)+": "+(0,w.zw)(e+1),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,(0,w.zw)(n)+": ",1),"miner"==n?((0,l.wg)(),(0,l.j4)(r,{key:0,to:"/miner/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(t),1)])),_:2},1032,["to"])):"snapshotHash"==n?((0,l.wg)(),(0,l.j4)(r,{key:1,to:"/snapshot/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(t),1)])),_:2},1032,["to"])):"transactions"==n?((0,l.wg)(),(0,l.iD)("td",I,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,(t=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l.Wm)(r,{to:"/miner/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(t),1)])),_:2},1032,["to"])])))),256))])):"manifest"==n?((0,l.wg)(),(0,l.iD)("td",C,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,(0,w.zw)(n)+": ",1),(0,l._)("td",null,(0,w.zw)(t),1)])))),256))])):((0,l.wg)(),(0,l.iD)("td",P,(0,w.zw)(t),1))])))),256))])])))),256))],512),[[a.F8,n.value]])])}}};const x=(0,S.Z)(q,[["__scopeId","data-v-e8e954ba"]]);var $=x;const M=t=>((0,l.dD)("data-v-799463ed"),t=t(),(0,l.Cn)(),t),T=M((()=>(0,l._)("h1",null,"Snapshot ",-1))),F={class:"node"},V={key:"snapshot"},L={key:0},N={key:7};var E={__name:"Snapshot",setup(t){const n=(0,d.yj)();let e=(0,r.iH)({});o.Z.get("/snapshot/"+n.params.hash).then((t=>e.value=t.data));(0,r.iH)(n.params.hash);return(0,l.YP)(n,((t,a)=>{console.log("--\x3e",t,n.params.hash),o.Z.get("/snapshot/"+n.params.hash).then((t=>e.value=t.data))}),{immediate:!0}),(t,n)=>{const a=(0,l.up)("router-link"),o=(0,l.up)("tabel");return(0,l.wg)(),(0,l.iD)(l.HY,null,[T,(0,l._)("h2",null,(0,w.zw)((0,r.SU)(e).snapshotHash),1),(0,l._)("div",F,[(0,l.Wm)(o,{class:"info-tabel"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(e),((n,e)=>((0,l.wg)(),(0,l.iD)("tr",V,["_id"!=e?((0,l.wg)(),(0,l.iD)("td",L,(0,w.zw)(e)+": ",1)):(0,l.kq)("",!0),"parentSnapshotHash"==e?((0,l.wg)(),(0,l.j4)(a,{key:1,to:"/snapshot/"+n},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(n),1)])),_:2},1032,["to"])):"Solution"==e?(0,l.WI)(t.$slots,"default",{key:2},(()=>[(0,l.Wm)(O,{data:n},null,8,["data"])])):"Shares"==e?(0,l.WI)(t.$slots,"default",{key:3},(()=>[(0,l.Wm)($,{data:n,name:"Share"},null,8,["data"])])):"ValidatorsEntries"==e?(0,l.WI)(t.$slots,"default",{key:4},(()=>[(0,l.Wm)($,{data:n,name:"Validators entries"},null,8,["data"])])):"ValidatorReferences"==e?(0,l.WI)(t.$slots,"default",{key:5},(()=>[(0,l.Wm)($,{data:n,name:"Validator reference"},null,8,["data"])])):"TotalWork"==e?(0,l.WI)(t.$slots,"default",{key:6},(()=>[(0,l.Wm)($,{data:n,name:"work"},null,8,["data"])])):"_id"!=e?((0,l.wg)(),(0,l.iD)("td",N,(0,w.zw)(n),1)):(0,l.kq)("",!0)])))),128))])),_:3})])],64)}}};const R=(0,S.Z)(E,[["__scopeId","data-v-799463ed"]]);var A=R;const J=t=>((0,l.dD)("data-v-d475f31c"),t=t(),(0,l.Cn)(),t),Q=J((()=>(0,l._)("h1",null,"Miner",-1))),B={class:"up"},G={key:0},X={key:1,class:"up"},tt={class:"up"},nt={key:0},et={class:"up"},at={key:1},lt={key:2};var ot={__name:"Miner",setup(t){const n=(0,d.yj)();let e=(0,r.iH)({});return o.Z.get("/miner/"+n.params.id).then((t=>{e.value=t.data,console.log(t.data)})),(t,n)=>{const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[Q,(0,l._)("h2",null,(0,w.zw)((0,r.SU)(e).miner),1),(0,l._)("table",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(e),((t,n)=>((0,l.wg)(),(0,l.iD)("tr",B,["_id"!=n?((0,l.wg)(),(0,l.iD)("td",G,(0,w.zw)(n)+": ",1)):(0,l.kq)("",!0),"hr"==n?((0,l.wg)(),(0,l.iD)("td",X,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",tt,(0,w.zw)(n)+" > ",1),"workers"==n?((0,l.wg)(),(0,l.iD)("td",nt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",et,(0,w.zw)(n)+": ",1),(0,l._)("td",null,(0,w.zw)(t),1)])))),256))])):((0,l.wg)(),(0,l.iD)("td",at,(0,w.zw)(t),1))])))),256))])):"_id"!=n&&"node"!=n?((0,l.wg)(),(0,l.iD)("td",lt,(0,w.zw)(t),1)):(0,l.kq)("",!0),"node"==n?((0,l.wg)(),(0,l.j4)(a,{key:3,to:"/pool/"+t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(t),1)])),_:2},1032,["to"])):(0,l.kq)("",!0)])))),256))])],64)}}};const rt=(0,S.Z)(ot,[["__scopeId","data-v-d475f31c"]]);var ut=rt;const it=t=>((0,l.dD)("data-v-5cd0e307"),t=t(),(0,l.Cn)(),t),st=it((()=>(0,l._)("h1",null,"Pool",-1))),dt=it((()=>(0,l._)("td",null,"URL: ",-1))),wt=["href"],ct={class:"up"},pt={key:0},gt={key:1,class:"up"},_t={class:"up"},ft={key:0},ht={key:1},vt={key:2};var kt={__name:"Pool",setup(t){const n=(0,d.yj)();console.log(n.params.ip);let e=(0,r.iH)({});return o.Z.get("/pool/"+n.params.ip).then((t=>e.value=t.data)),(t,n)=>{const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[st,(0,l._)("table",null,[(0,l._)("tr",null,[dt,(0,l._)("td",null,[(0,l._)("a",{href:"http://"+(0,r.SU)(e).url},(0,w.zw)((0,r.SU)(e).url),9,wt)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,r.SU)(e).data,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",ct,["_id"!=n?((0,l.wg)(),(0,l.iD)("td",pt,(0,w.zw)(n)+": ",1)):(0,l.kq)("",!0),"miners"==n?((0,l.wg)(),(0,l.iD)("td",gt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",_t,(0,w.zw)(n)+" > ",1),"hr"==n?((0,l.wg)(),(0,l.iD)("td",ft,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,n)=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l.Wm)(a,{to:"/miner/"+n},{default:(0,l.w5)((()=>[(0,l.Uk)((0,w.zw)(n),1)])),_:2},1032,["to"]),(0,l._)("td",null,": "+(0,w.zw)(t),1)])))),256))])):((0,l.wg)(),(0,l.iD)("td",ht,(0,w.zw)(t),1))])))),256))])):"_id"!=n&&"node"!=n?((0,l.wg)(),(0,l.iD)("td",vt,(0,w.zw)(t),1)):(0,l.kq)("",!0)])))),256))])],64)}}};const mt=(0,S.Z)(kt,[["__scopeId","data-v-5cd0e307"]]);var Dt=mt;const yt=[{path:"/",name:"nodes",component:Y},{path:"/snapshot/:hash",name:"snapshot",component:A},{path:"/miner/:id",component:ut},{path:"/pool/:ip",component:Dt}],zt=(0,d.p7)({history:(0,d.PO)("/"),routes:yt});var Ht=zt;(0,a.ri)(s).use(Ht).mount("#app")}},n={};function e(a){var l=n[a];if(void 0!==l)return l.exports;var o=n[a]={exports:{}};return t[a].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,a,l,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],l=t[d][1],o=t[d][2];for(var u=!0,i=0;i<a.length;i++)(!1&o||r>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[i])}))?a.splice(i--,1):(u=!1,o<r&&(r=o));if(u){t.splice(d--,1);var s=l();void 0!==s&&(n=s)}}return n}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,l,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var l,o,r=a[0],u=a[1],i=a[2],s=0;if(r.some((function(n){return 0!==t[n]}))){for(l in u)e.o(u,l)&&(e.m[l]=u[l]);if(i)var d=i(e)}for(n&&n(a);s<r.length;s++)o=r[s],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},a=self["webpackChunkeascan"]=self["webpackChunkeascan"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(2859)}));a=e.O(a)})();
//# sourceMappingURL=app.4f7ca8b2.js.map
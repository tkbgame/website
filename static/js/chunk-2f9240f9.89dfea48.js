(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f9240f9"],{"077f":function(e,t,n){e.exports=n.p+"static/img/14.bcb6886c.png"},"12ed":function(e,t,n){e.exports=n.p+"static/img/p6.45c13702.png"},"16bc":function(e,t,n){e.exports=n.p+"static/img/q4.159ffb10.png"},"1bba":function(e,t,n){e.exports=n.p+"static/img/22.8e9baa9c.png"},"1db5":function(e,t,n){e.exports=n.p+"static/img/510-曹操-Cao Cao.cfa4afb1.png"},"1e09":function(e,t,n){e.exports=n.p+"static/img/330-吕蒙-Lv Meng.558f81ce.png"},2059:function(e,t,n){e.exports=n.p+"static/img/32.5076122e.png"},2428:function(e,t,n){e.exports=n.p+"static/img/420-赵云-Zhao Yun.d3ed2559.png"},"274c":function(e,t,n){e.exports=n.p+"static/img/240-袁术-Yuan Shu.d2650033.png"},2828:function(e,t,n){e.exports=n.p+"static/img/430-周瑜-Zhou Yu.3e8c4f20.png"},"287d":function(e,t,n){e.exports=n.p+"static/img/51.926c4517.png"},"2a47":function(e,t,n){e.exports=n.p+"static/img/520-刘备-Liu Bei.3b5a58af.png"},"3ccd":function(e,t,n){e.exports=n.p+"static/img/530-孙权-Sun Quan.17e1415d.png"},"3de0":function(e,t,n){e.exports=n.p+"static/img/54.926c4517.png"},"451c":function(e,t,n){e.exports=n.p+"static/img/231-黄盖-Huang Gai.65cbcd47.png"},4521:function(e,t,n){"use strict";var a=n("5530"),i=(n("d81d"),n("d3b7"),n("ddb0"),n("fb6a"),n("ac1f"),n("1276"),n("ffea")),r=function(e){return e.keys().map(e)};t["a"]=r(i).map((function(e){var t=e.slice(12).slice(0,-13),n=t.split("-"),i={id:n[0],namecn:n[1],name:n.length>2?n[2]:n[1]};return Object(a["a"])({image:e},i)}))},4761:function(e,t,n){e.exports=n.p+"static/img/p4.41e50819.png"},4907:function(e,t,n){e.exports=n.p+"static/img/210-李典-Li Dian.e81edf62.png"},"4b96":function(e,t,n){},"51b4":function(e,t,n){e.exports=n.p+"static/img/640-吕布-Lv Bu.d151a37c.png"},5756:function(e,t,n){e.exports=n.p+"static/img/540-董卓-Dong Zhuo.145b0fa5.png"},"589b":function(e,t,n){e.exports=n.p+"static/img/421-孔明-Zhu GeLiang.869c0666.png"},"58bd":function(e,t,n){e.exports=n.p+"static/img/62.0e5604e4.png"},6384:function(e,t,n){e.exports=n.p+"static/img/p2.705ef741.png"},"63dda":function(e,t,n){e.exports=n.p+"static/img/33.fe122696.png"},"64ad":function(e,t,n){e.exports=n.p+"static/img/41.4229482b.png"},"64e7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-container"},[a("img",{staticClass:"apphead",attrs:{src:n("cdf4")}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}],staticStyle:{"margin-top":"10px"}},[a("el-row",{attrs:{gutter:20}},e._l(e.pools,(function(t){return a("el-col",{key:t.name,staticStyle:{"margin-bottom":"20px"},attrs:{md:8,sm:12}},[a("el-card",{staticClass:"shopitem",attrs:{"body-style":{padding:"0px"}}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.image}}),a("div",{staticStyle:{padding:"10px"}},[a("el-descriptions",{attrs:{direction:"vertical",border:""}},[a("el-descriptions-item",{attrs:{label:"Deposit"}},[e._v(e._s(e.getlevelstr(t)))]),a("el-descriptions-item",{attrs:{label:"APY"}},[e._v(e._s((2*t.id/e.gradeTotal/3*28800*365/2e3*100).toFixed(0))+"%")]),a("el-descriptions-item",{attrs:{label:"Earn"}},[a("span",{class:t.rarncalss},[e._v(e._s(t.earna.toFixed(2))+" TKB")])]),a("el-descriptions-item",{attrs:{label:"heroNum"}},[e._v(e._s(t.heroNum))]),a("el-descriptions-item",{attrs:{label:"Pool Total"}},[e._v(e._s(t.heroTotal))]),a("el-descriptions-item",{attrs:{label:"Pool proportion"}},[e._v(e._s((t.gradeTotal/e.gradeTotal*100).toFixed(2))+"%")]),a("el-descriptions-item",{attrs:{label:"Operate",span:3}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){return e.showdialogHeros(t,"Enter")}}},[e._v("Enter")]),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(n){return e.showdialogHeros(t,"Leave")}}},[e._v("Leave")]),a("el-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"info"}},[e._v("Info")])],1)],1)],1)])],1)})),1)],1),a("el-dialog",{attrs:{title:"HeroList",visible:e.dialogHeros.visible,fullscreen:e.window.innerWidth<700,width:"70%"},on:{"update:visible":function(t){return e.$set(e.dialogHeros,"visible",t)}}},[a("HeroList",{model:{value:e.dialogHeros.HeroList,callback:function(t){e.$set(e.dialogHeros,"HeroList",t)},expression:"dialogHeros.HeroList"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-checkbox",{staticStyle:{float:"left"},on:{change:e.Allchange}},[e._v("All")]),a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogHeros.visible=!1}}},[e._v("Close")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.HeroListchange}},[e._v("Ok")])],1)],1)],1)},i=[],r=n("2909"),o=n("5530"),c=n("1da1"),s=(n("96cf"),n("159b"),n("d81d"),n("a9e3"),n("7db0"),n("4de4"),n("b680"),n("d3b7"),n("ddb0"),n("fb6a"),n("7e6c")),u=function(e){return e.keys().map(e)},p=u(s).map((function(e){var t=Number(e.slice(-14).slice(0,1));return{id:t,image:e}})),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:10}},e._l(e.heros,(function(t){return n("el-col",{key:t.id,attrs:{md:4,sm:6,xs:6}},[n("el-card",{attrs:{"body-style":"padding:10px;position: relative;"},nativeOn:{click:function(e){t.enable=!t.enable}}},[n("heroCard",{staticStyle:{width:"100%"},attrs:{value:t}}),t.enable?n("div",{staticClass:"fullbg"}):e._e(),t.enable?n("el-result",{staticStyle:{width:"20%",height:"20%",position:"absolute",right:"0",bottom:"0","z-index":"2"},attrs:{icon:"success"}}):e._e()],1)],1)})),1)},g=[],f=n("7bb6"),d={components:{heroCard:f["a"]},model:{prop:"heros",event:"change"},props:{heros:{type:Array,default:function(){return[{id:0,level:0,exp:0,enable:!1}]}}},methods:{}},m=d,b=(n("fee0"),n("2877")),h=Object(b["a"])(m,l,g,!1,null,"8071187e",null),v=h.exports,x=n("cffa"),w={components:{HeroList:v},data:function(){return{poolImages:p,window:window,loading:!0,heroTotal:0,gradeTotal:0,pools:[],inventorys:[],dialogHeros:{loading:!1,visible:!1,HeroList:[],model:"enter"},updateInterval:null}},watch:{pools:{handler:function(e,t){e.forEach((function(e,t){if(e.earna!==e.earn){if("update"===e.rarncalss)return;x["a"].to(e,{duration:2,earna:e.earn}),e.rarncalss="update",setTimeout((function(){e.rarncalss=""}),2e3)}}))}},deep:!0},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.Wallet.connected?e.RefreshAllPool():e.Wallet.$on("connect",e.onconnect),e.updateInterval=setInterval(e.updateIntervalChange,2900);case 2:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){clearInterval(this.updateInterval)},methods:{onconnect:function(){this.Wallet.$off("connect",this.onconnect),this.RefreshAllPool()},RefreshHeros:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.Wallet.game.GetInventoryTokenIds();case 2:return e.tokenIds=t.sent.map((function(e){return e.toNumber()})),t.next=5,e.Wallet.game.getHeros(e.tokenIds);case 5:e.inventorys=t.sent.map((function(e){return Object(o["a"])({enable:Number(e.farmBlock)>0},e)}));case 6:case"end":return t.stop()}}),t)})))()},RefreshAllPool:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.Wallet.game.totalFarmWeight();case 3:for(n=t.sent,a=n.total,i=n.num,e.gradeTotal=a.toNumber(),e.heroTotal=i.toNumber(),e.pools=[],r=function(t){var n=t+1,a=p.find((function(e){return e.id===n})).image,i={id:n,image:a,heroNum:0,apy:0,heroTotal:0,gradeTotal:0,earn:0,earna:0,earnclass:""};e.pools.push(i)},o=0;o<6;o++)r(o);return t.next=13,e.RefreshHeros();case 13:return t.next=15,e.updateIntervalChange();case 15:e.loading=!1;case 16:case"end":return t.stop()}}),t)})))()},getlevelstr:function(e){switch(Number(e.id)){case 1:return"C";case 2:return"B";case 3:return"A";case 4:return"S";case 5:return"SR";default:return"SSR"}},showdialogHeros:function(e,t){var n=this;this.dialogHeros.model=t,this.dialogHeros.HeroList=[];var a=this.inventorys.filter((function(n){return Number(n.level)===e.id&&("Enter"===t&&!n.enable||"Leave"===t&&n.enable)})).map((function(e){return Object(o["a"])({},e)}));a.length>0?(this.dialogHeros.visible=!0,this.$nextTick((function(){n.dialogHeros.HeroList=a}))):this.$message.warning("No more heroes")},HeroListchange:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dialogHeros.visible=!1,e.loading=!0,t.prev=2,t.t0=e.dialogHeros.model,t.next="Enter"===t.t0?6:"Leave"===t.t0?11:16;break;case 6:if(n=e.dialogHeros.HeroList.filter((function(e){return e.enable})).map((function(e){return Number(e.id)})),!(n.length>0)){t.next=10;break}return t.next=10,e.Wallet.game.manyEnterFarm(n,{from:e.Wallet.account});case 10:return t.abrupt("break",16);case 11:if(a=e.dialogHeros.HeroList.filter((function(e){return!e.enable})).map((function(e){return Number(e.id)})),!(a.length>0)){t.next=15;break}return t.next=15,e.Wallet.game.manyLeaveFarm(a,{from:e.Wallet.account});case 15:return t.abrupt("break",16);case 16:return t.next=18,e.RefreshAllPool();case 18:t.next=23;break;case 20:t.prev=20,t.t1=t["catch"](2),e.loading=!1;case 23:case"end":return t.stop()}}),t,null,[[2,20]])})))()},updateIntervalChange:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=window,a=n.utils,i=Object(r["a"])(e.inventorys).filter((function(e){return e.enable})).map((function(e){return{id:e.id,level:Number(e.level)}})),e.pools.forEach((function(t,n){if(t.heroNum=i.filter((function(e){return e.level===t.id})).length,e.Wallet.game.GetFarmlevelInfo(t.id).then((function(e){t.gradeTotal=e[0].toNumber(),t.heroTotal=e[1].toNumber()})),t.heroNum>0){var r=i.filter((function(e){return e.level===t.id})).map((function(e){return e.id}));e.Wallet.game.GetFarmIncomeTotal(r).then((function(i){t.earn=Number(Number(a.fromWei(i)).toFixed(2)),e.$set(e.pools,n,t)}))}}));case 3:case"end":return t.stop()}}),t)})))()},Allchange:function(e){this.dialogHeros.HeroList.forEach((function(t){t.enable=e}))}}},y=w,k=(n("ec14"),Object(b["a"])(y,a,i,!1,null,"d6a7aa4e",null));t["default"]=k.exports},"6a81":function(e,t,n){e.exports=n.p+"static/img/44.4229482b.png"},"6b5a":function(e,t,n){e.exports=n.p+"static/img/140-公孙赞-Gong SunZan.c3c51c4e.png"},"6c60":function(e,t,n){e.exports=n.p+"static/img/53.dce99727.png"},"6dc6":function(e,t,n){e.exports=n.p+"static/img/610-贾诩-Jia Xu.dceb0dfb.png"},7327:function(e,t,n){e.exports=n.p+"static/img/440-潘凤-Pan Feng.05368c46.png"},7393:function(e,t,n){e.exports=n.p+"static/img/110-蔡文姬-Cai WenJi.b3be06e8.png"},7825:function(e,t,n){e.exports=n.p+"static/img/220-姜维-Jiang Wei.1aa34c97.png"},"7a21":function(e,t,n){e.exports=n.p+"static/img/13.edfda275.png"},"7acc":function(e,t,n){e.exports=n.p+"static/img/31.620a3989.png"},"7bb6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{ref:"canvas",attrs:{width:"520",height:"800"}})},i=[],r=n("1da1"),o=(n("96cf"),n("d81d"),n("d3b7"),n("ddb0"),n("a9e3"),n("7db0"),n("99af"),n("caad"),n("2532"),n("4521")),c=n("b66a"),s=function(e){return e.keys().map(e)},u=s(c),p={props:{value:{type:Object,default:function(){return{image:"",id:"",name:""}}}},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,i,r,o,c,s,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.canvas,a=n.getContext("2d"),t.next=4,e.src2getimg(e.getframe());case 4:return i=t.sent,t.next=7,e.src2getimg(e.getcamp());case 7:return r=t.sent,o=e.HeroInfoIs(e.value),t.next=11,e.src2getimg(o.image);case 11:c=t.sent,a.drawImage(i,0,0,i.width,i.height,0,0,520,800),a.drawImage(c,0,0,i.width,i.height,60,-30,i.width,i.height),a.drawImage(r,0,0,r.width,r.height,0,0,200,200),a.font="45px gf",a.fillStyle="#FF0033",a.fillText(o.namecn,325+(2===o.namecn.length?30:5),110),a.fillStyle="#000000",a.font="115px kust",s=e.getlevelstr(),u=1===s.length?100:2===s.length?50:0,p=a.createLinearGradient(340+u,790,n.width,n.height),p.addColorStop("0","rgb(252,70,107)"),p.addColorStop("1","rgb(63,94,251)"),a.fillStyle=p,a.fillText(s,350+u,790);case 27:case"end":return t.stop()}}),t)})))()},methods:{getlevelstr:function(){switch(Number(this.value.level)){case 1:return"C";case 2:return"B";case 3:return"A";case 4:return"S";case 5:return"SR";default:return"SSR"}},src2getimg:function(e){return new Promise((function(t,n){var a=new Image;a.src=e,a.onload=function(){a.complete?t(a):n("err")}}))},HeroInfoIs:function(e){var t=o["a"].find((function(t){return t.id==="".concat(e.level).concat(e.camp).concat(e.heroNum)}));return t||(e.heroNum=0,o["a"].find((function(t){return t.id==="".concat(e.level).concat(e.camp).concat(e.heroNum)})))},getframe:function(){var e=this;return u.find((function(t){return t.includes("img/".concat(e.value.level).concat(e.value.camp,"."))}))},getcamp:function(){var e=this;return u.find((function(t){return t.includes("img/q".concat(e.value.camp,"."))}))}}},l=p,g=n("2877"),f=Object(g["a"])(l,a,i,!1,null,"429bd42b",null);t["a"]=f.exports},"7e6c":function(e,t,n){var a={"./p1.png":"a38b","./p2.png":"6384","./p3.png":"a383","./p4.png":"4761","./p5.png":"b20e","./p6.png":"12ed"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="7e6c"},"808c6":function(e,t,n){e.exports=n.p+"static/img/21.d49c0087.png"},8318:function(e,t,n){e.exports=n.p+"static/img/630-陆逊-Lu Xun.624836d6.png"},8970:function(e,t,n){e.exports=n.p+"static/img/321-魏延-Wei Yan.eaa21459.png"},"89b4":function(e,t,n){e.exports=n.p+"static/img/64.7fc93f7a.png"},"9d9a":function(e,t,n){e.exports=n.p+"static/img/q3.6fa1d5c0.png"},a1b1:function(e,t,n){e.exports=n.p+"static/img/620-关羽-Guan Yu.a1ce00e7.png"},a383:function(e,t,n){e.exports=n.p+"static/img/p3.3f802f12.png"},a38b:function(e,t,n){e.exports=n.p+"static/img/p1.fce25425.png"},af9d:function(e,t,n){e.exports=n.p+"static/img/34.620a3989.png"},b20e:function(e,t,n){e.exports=n.p+"static/img/p5.db4b5aa5.png"},b66a:function(e,t,n){var a={"./11.png":"d078","./12.png":"f6f2","./13.png":"7a21","./14.png":"077f","./21.png":"808c6","./22.png":"1bba","./23.png":"c7a3","./24.png":"d416","./31.png":"7acc","./32.png":"2059","./33.png":"63dda","./34.png":"af9d","./41.png":"64ad","./42.png":"e638","./43.png":"eee5","./44.png":"6a81","./51.png":"287d","./52.png":"d695","./53.png":"6c60","./54.png":"3de0","./61.png":"d0f4","./62.png":"58bd","./63.png":"c644","./64.png":"89b4","./q1.png":"d8f3","./q2.png":"f7b7","./q3.png":"9d9a","./q4.png":"16bc"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="b66a"},b9a1:function(e,t,n){e.exports=n.p+"static/img/310-乐进-Le Jin.65b6f902.png"},c644:function(e,t,n){e.exports=n.p+"static/img/63.b1b494e9.png"},c7a3:function(e,t,n){e.exports=n.p+"static/img/23.e520a9a3.png"},caf3:function(e,t,n){e.exports=n.p+"static/img/130-丁奉-Ding Feng.7df7ec51.png"},cd35:function(e,t,n){e.exports=n.p+"static/img/230-徐盛-Xu Sheng.2e2f7e2b.png"},cdf4:function(e,t,n){e.exports=n.p+"static/img/apphead.47571b2f.gif"},d078:function(e,t,n){e.exports=n.p+"static/img/11.bcb6886c.png"},d0f4:function(e,t,n){e.exports=n.p+"static/img/61.7fc93f7a.png"},d416:function(e,t,n){e.exports=n.p+"static/img/24.d49c0087.png"},d5aa:function(e,t,n){e.exports=n.p+"static/img/410-司马懿-Si MaYi.f7e8cbcc.png"},d695:function(e,t,n){e.exports=n.p+"static/img/52.c9e43675.png"},d8f3:function(e,t,n){e.exports=n.p+"static/img/q1.1b49b351.png"},db00:function(e,t,n){e.exports=n.p+"static/img/412-郭嘉-Guo Jia.eb4ee5e4.png"},e35b:function(e,t,n){e.exports=n.p+"static/img/320-张飞-Zhang Fei.d1b043ae.png"},e3de:function(e,t,n){e.exports=n.p+"static/img/340-袁绍-Yuan Shao.40fd2a96.png"},e5d0:function(e,t,n){e.exports=n.p+"static/img/120-孙尚香-Sun ShangXiang.ed5ac36b.png"},e638:function(e,t,n){e.exports=n.p+"static/img/42.63025f55.png"},ea7b:function(e,t,n){},ec14:function(e,t,n){"use strict";n("4b96")},eee5:function(e,t,n){e.exports=n.p+"static/img/43.e6fde776.png"},f6f2:function(e,t,n){e.exports=n.p+"static/img/12.2b732b4c.png"},f7b7:function(e,t,n){e.exports=n.p+"static/img/q2.d9efbcd1.png"},fee0:function(e,t,n){"use strict";n("ea7b")},ffea:function(e,t,n){var a={"./110-蔡文姬-Cai WenJi.png":"7393","./120-孙尚香-Sun ShangXiang.png":"e5d0","./130-丁奉-Ding Feng.png":"caf3","./140-公孙赞-Gong SunZan.png":"6b5a","./210-李典-Li Dian.png":"4907","./220-姜维-Jiang Wei.png":"7825","./230-徐盛-Xu Sheng.png":"cd35","./231-黄盖-Huang Gai.png":"451c","./240-袁术-Yuan Shu.png":"274c","./310-乐进-Le Jin.png":"b9a1","./320-张飞-Zhang Fei.png":"e35b","./321-魏延-Wei Yan.png":"8970","./330-吕蒙-Lv Meng.png":"1e09","./340-袁绍-Yuan Shao.png":"e3de","./410-司马懿-Si MaYi.png":"d5aa","./412-郭嘉-Guo Jia.png":"db00","./420-赵云-Zhao Yun.png":"2428","./421-孔明-Zhu GeLiang.png":"589b","./430-周瑜-Zhou Yu.png":"2828","./440-潘凤-Pan Feng.png":"7327","./510-曹操-Cao Cao.png":"1db5","./520-刘备-Liu Bei.png":"2a47","./530-孙权-Sun Quan.png":"3ccd","./540-董卓-Dong Zhuo.png":"5756","./610-贾诩-Jia Xu.png":"6dc6","./620-关羽-Guan Yu.png":"a1b1","./630-陆逊-Lu Xun.png":"8318","./640-吕布-Lv Bu.png":"51b4"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="ffea"}}]);
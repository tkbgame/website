(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4552d9a2"],{"0bad8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("img",{staticClass:"apphead",attrs:{src:a("cdf4")}}),n("el-row",{attrs:{gutter:20}},e._l(e.shopItems,(function(t){return n("el-col",{key:t.name,attrs:{md:4,sm:12}},[n("el-card",{staticClass:"shopitem",attrs:{"body-style":{padding:"0px"}}},[n("img",{attrs:{src:t.image,width:"100%"}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.Wallet.allowance<0||e.transfering,expression:"Wallet.allowance<0 || transfering"}],staticClass:"shopitem-content",staticStyle:{padding:"0 10px"},attrs:{"element-loading-spinner":"el-icon-loading"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("span",[e._v(e._s(t.name))])]),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[n("span",[e._v("Price : "+e._s(e.Wallet.eggPrice))])]),n("el-col",{attrs:{span:18}},[e.Wallet.allowance>e.Wallet.eggPrice?n("el-input-number",{attrs:{size:"small",min:1,step:1},model:{value:t.buyNum,callback:function(a){e.$set(t,"buyNum",a)},expression:"item.buyNum"}}):e._e()],1),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[e.Wallet.allowance<e.Wallet.eggPrice?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.doApprove}},[e._v("Approve")]):n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.doBuy(t.camp,t.buyNum)}}},[e._v("Buy")])],1)],1)],1)])],1)})),1)],1)},r=[],i=a("1da1"),s=(a("96cf"),a("6b84")),c={data:function(){return{shopItems:s["a"],transfering:!1}},methods:{doApprove:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.transfering=!0,t.prev=1,t.next=4,e.Wallet.doApprove();case 4:return t.prev=4,e.transfering=!1,t.finish(4);case 7:case"end":return t.stop()}}),t,null,[[1,,4,7]])})))()},doBuy:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.transfering=!0,n.prev=1,n.next=4,a.Wallet.buyegg(e,t);case 4:return n.prev=4,a.transfering=!1,n.finish(4);case 7:case"end":return n.stop()}}),n,null,[[1,,4,7]])})))()}}},l=c,o=(a("64b1"),a("2877")),u=Object(o["a"])(l,n,r,!1,null,"1043400a",null);t["default"]=u.exports},"26b5":function(e,t,a){e.exports=a.p+"static/img/b3.a668e90f.png"},"4b8d":function(e,t,a){},"64b1":function(e,t,a){"use strict";a("4b8d")},"6b84":function(e,t,a){"use strict";t["a"]=[{name:"Surprised Box",camp:0,price:4e3,buyNum:1,image:a("ba7e")},{name:"Shu Box",camp:1,price:4e3,buyNum:1,image:a("90ff")},{name:"Wu Box",camp:2,price:4e3,buyNum:1,image:a("26b5")},{name:"Wei Box",camp:3,price:4e3,buyNum:1,image:a("d686")}]},"90ff":function(e,t,a){e.exports=a.p+"static/img/b4.d4e23142.png"},ba7e:function(e,t,a){e.exports=a.p+"static/img/b1.8573b7de.png"},cdf4:function(e,t,a){e.exports=a.p+"static/img/apphead.47571b2f.gif"},d686:function(e,t,a){e.exports=a.p+"static/img/b2.2223ae1f.png"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-817750a4"],{1916:function(e,t,n){},"21a6":function(e,t,n){(function(n){var a,o,r;(function(n,l){o=[],a=l,r="function"===typeof a?a.apply(t,o):a,void 0===r||(e.exports=r)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=l.URL||l.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):o(c.href)?a(e,t,n):r(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,l){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),n);else if(o(e))a(e,n,l);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,t,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var r="application/octet-stream"===e.type,c=/constructor/i.test(l.HTMLElement)||l.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var f=l.URL||l.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});l.saveAs=c.saveAs=c,e.exports=c}))}).call(this,n("c8ba"))},"25f0":function(e,t,n){"use strict";var a=n("6eeb"),o=n("825a"),r=n("d039"),l=n("ad6d"),i="toString",c=RegExp.prototype,s=c[i],u=r((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=i;(u||f)&&a(RegExp.prototype,i,(function(){var e=o(this),t=String(e.source),n=e.flags,a=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?l.call(e):n);return"/"+t+"/"+a}),{unsafe:!0})},2953:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-container"},[n("el-row",[n("el-col",{attrs:{span:10}},[n("el-checkbox",{model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v("show ")]),n("br"),n("el-button",{attrs:{size:"small",icon:"el-icon-plus"},on:{click:e.addWallet}},[e._v("addWallet")]),n("el-button",{attrs:{size:"small",icon:"el-icon-plus"},on:{click:e.exportJSON}},[e._v("exportJSON")]),e.show?n("el-table",{attrs:{data:e.wallets}},[n("el-table-column",{attrs:{label:"addr",prop:"address"}}),n("el-table-column",{attrs:{label:"amount",width:"80px",prop:"BalanceEther"}}),n("el-table-column",{attrs:{width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.del(t.row)}}},[e._v("DEL")])]}}],null,!1,1339625703)})],1):e._e(),n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectWallet,callback:function(t){e.selectWallet=t},expression:"selectWallet"}},e._l(e.wallets,(function(t){return n("el-option",{key:t.address,attrs:{label:t.small,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.small))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.BalanceEther))])])})),1),n("el-button",{attrs:{size:"small"},on:{click:e.refreshETH}},[e._v("refreshETH")]),e._v(" "+e._s(e.totalBalance)+" "),n("h6",[e._v(e._s(e.selectWallet.privateKey))]),n("el-input",{model:{value:e.to,callback:function(t){e.to=t},expression:"to"}}),n("el-input",{model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),n("el-button",{on:{click:function(t){return e.buy(e.selectWallet)}}},[e._v("transfer")])],1)],1)],1)},o=[],r=n("5530"),l=n("1da1"),i=(n("96cf"),n("d81d"),n("fb6a"),n("d3b7"),n("a434"),n("c740"),n("159b"),n("b680"),n("a9e3"),n("25f0"),n("21a6")),c=n("6779"),s=n("288a"),u=new c["providers"].JsonRpcProvider("https://bsc-dataseed1.defibit.io"),f={name:"Admin",data:function(){return{show:!1,wallets:[],selectWallet:{},to:"0x83F3BEb261d80BC2De8487fBCCdbEaAd79525B39",amount:1.5,totalBalance:0}},mounted:function(){this.loadToLocalStorage()},methods:{loadToLocalStorage:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=localStorage.getItem("wallets"),n&&(a=JSON.parse(n),console.log((new Date).getTime()),e.fromMnemonic(a).then((function(t){e.wallets=t.map((function(e){return Object(r["a"])(Object(r["a"])({Balance:0,BalanceEther:0,small:e.address.slice(-6)},e),{},{wallet:{}})}))})));case 2:case"end":return t.stop()}}),t)})))()},saveToLocalStorage:function(){localStorage.setItem("wallets",this.getWalletsJSON())},getWalletsJSON:function(){return JSON.stringify(this.wallets.map((function(e){return{address:e.address,mnemonic:e.mnemonic,privateKey:e.privateKey}})))},createWallet:function(){var e=c["utils"].entropyToMnemonic(c["utils"].randomBytes(16)),t=c["utils"].HDNode.fromMnemonic(e);return Object(r["a"])({},t)},addWallet:function(){var e=this.createWallet();this.wallets.push(Object(r["a"])({Balance:0,BalanceEther:0},e)),this.saveToLocalStorage()},fromMnemonic:function(e){return new Promise((function(t,n){t(e.map((function(e){return e})))}))},exportJSON:function(){this.doanloadFile(this.getWalletsJSON(),"Wallet.json")},doanloadFile:function(e,t){var n=new Blob([e],{type:"text/plain;charset=utf-8"});Object(i["saveAs"])(n,t)},del:function(e){console.log(e),this.wallets.splice(this.wallets.findIndex((function(t){return t.address===e.address})),1),this.saveToLocalStorage()},refreshETH:function(){var e=this;this.totalBalance=0,this.wallets.forEach((function(t){var n=new s["a"](t.privateKey,u);t.BalanceEther="..",n.getBalance().then((function(n){t.Balance=n,t.BalanceEther=Number(c["utils"].formatEther(n)).toFixed(2),e.totalBalance+=Number(c["utils"].formatEther(n)),console.log(t.BalanceEther)})).catch((function(){t.BalanceEther="err"}))}))},buy:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new s["a"](e.privateKey,u),n.next=3,a.sendTransaction({to:t.to,value:c["utils"].parseEther(t.amount.toString())});case 3:o=n.sent,console.log(o);case 5:case"end":return n.stop()}}),n)})))()},handleCurrentChange:function(e,t){this.selectWallet=e}}},d=f,p=(n("b4b79"),n("2877")),h=Object(p["a"])(d,a,o,!1,null,"bd9efe22",null);t["default"]=h.exports},a434:function(e,t,n){"use strict";var a=n("23e7"),o=n("23cb"),r=n("a691"),l=n("50c4"),i=n("7b0b"),c=n("65f0"),s=n("8418"),u=n("1dde"),f=n("ae40"),d=u("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!p},{splice:function(e,t){var n,a,u,f,d,p,w=i(this),g=l(w.length),y=o(e,g),E=arguments.length;if(0===E?n=a=0:1===E?(n=0,a=g-y):(n=E-2,a=v(h(r(t),0),g-y)),g+n-a>m)throw TypeError(b);for(u=c(w,a),f=0;f<a;f++)d=y+f,d in w&&s(u,f,w[d]);if(u.length=a,n<a){for(f=y;f<g-a;f++)d=f+a,p=f+n,d in w?w[p]=w[d]:delete w[p];for(f=g;f>g-a+n;f--)delete w[f-1]}else if(n>a)for(f=g-a;f>y;f--)d=f+a-1,p=f+n-1,d in w?w[p]=w[d]:delete w[p];for(f=0;f<n;f++)w[f+y]=arguments[f+2];return w.length=g-a+n,u}})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b4b79:function(e,t,n){"use strict";n("1916")},c740:function(e,t,n){"use strict";var a=n("23e7"),o=n("b727").findIndex,r=n("44d2"),l=n("ae40"),i="findIndex",c=!0,s=l(i);i in[]&&Array(1)[i]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!s},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(i)},fb6a:function(e,t,n){"use strict";var a=n("23e7"),o=n("861d"),r=n("e8b5"),l=n("23cb"),i=n("50c4"),c=n("fc6a"),s=n("8418"),u=n("b622"),f=n("1dde"),d=n("ae40"),p=f("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),m=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!p||!h},{slice:function(e,t){var n,a,u,f=c(this),d=i(f.length),p=l(e,d),h=l(void 0===t?d:t,d);if(r(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(f,p,h);for(a=new(void 0===n?Array:n)(b(h-p,0)),u=0;p<h;p++,u++)p in f&&s(a,u,f[p]);return a.length=u,a}})}}]);
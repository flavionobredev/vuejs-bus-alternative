(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-5f87a795":"7e7d8ebe","chunk-2420c34b":"986096cb","chunk-2d0bd2b1":"65741fba","chunk-397daccf":"40fbe6dd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2420c34b":1,"chunk-397daccf":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5f87a795":"31d6cfe0","chunk-2420c34b":"64956673","chunk-2d0bd2b1":"31d6cfe0","chunk-397daccf":"21732c94"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],f=u.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(e);var l=new Error;u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuejs-bus-alternative/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1691:function(e,t,n){"use strict";n("d94d")},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Chat")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-content"},[n("header",{staticClass:"chat-content-header"},[n("NotificationInfo")],1),n("main",[n("div",{staticClass:"divider"},e._l(e.INSTANCES,(function(t,r){return n("section",{key:r,staticClass:"items"},[n("h2",{staticClass:"chat-content-title"},[e._v("Chat "+e._s(r+1))]),n("Messages",{attrs:{messages:e.messages,index:r+1}}),n("InputMessage",{attrs:{index:r+1}})],1)})),0)]),e._m(0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"chat-content-footer"},[n("p",[e._v("EventBus Alternative (VueJs)")]),n("div",{staticClass:"chat-content-footer-info"},[n("a",{attrs:{href:"https://github.com/flavionobre11/vuejs-bus-alternative",target:"_blank"}},[e._v("Git Hub")]),n("span",[e._v("-")]),n("a",{attrs:{href:"https://github.com/flavionobre11/vuejs-bus-alternative",target:"_blank"}},[e._v("Medium")]),n("span",[e._v("-")]),n("p",[e._v("Flávio Nobre")])])])}],s=(n("d3b7"),n("3ca3"),n("ddb0"),{components:{Messages:function(){return Promise.all([n.e("chunk-5f87a795"),n.e("chunk-2420c34b")]).then(n.bind(null,"284c"))},InputMessage:function(){return Promise.all([n.e("chunk-5f87a795"),n.e("chunk-397daccf")]).then(n.bind(null,"1270"))},NotificationInfo:function(){return Promise.all([n.e("chunk-5f87a795"),n.e("chunk-2d0bd2b1")]).then(n.bind(null,"2b9d"))}},data:function(){return{messages:[],INSTANCES:4}}}),u=s,f=(n("1691"),n("2877")),l=Object(f["a"])(u,i,c,!1,null,"32f62ac9",null),d=l.exports;n("4ee2");var h={name:"App",components:{Chat:d},created:function(){document.title="Alternative To EventBus"}},p=h,v=(n("034f"),Object(f["a"])(p,o,a,!1,null,null,null)),m=v.exports,b=(n("4de4"),n("99af"),n("b0c0"),n("159b"),{data:function(){return{events:[]}},methods:{registerListener:function(e,t,n){this.events.push({id:e,eventName:t}),this.$on(e,n)},emit:function(e,t){var n=this,r=this.events.filter((function(t){return t.eventName===e}));if(!r.length)throw new Error("[".concat(this.$options.name,"]\tNão foram encontrados listeners para o evento: ").concat(e));r.forEach((function(e){return n.$emit(e.id,t)}))},removeListener:function(e){this.$off(e),this.events=this.events.filter((function(t){return t.id!==e}))}}});r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)},mixins:[b],name:"ROOT"}).$mount("#app")},"85ec":function(e,t,n){},d94d:function(e,t,n){}});
//# sourceMappingURL=app.6e20e47c.js.map
/*! For license information please see sharebymail-vue-settings-admin-sharebymail.js.LICENSE.txt */
(()=>{"use strict";var e,r,a,o={57182:(e,r,a)=>{var o=a(85471),n=a(92457),i=a(53334),s=a(32073),l=a(88837),c=a(38613),d=a(85168),u=a(26287),p=a(63814),h=a(56760),f=(a(51257),a(96763));const b={name:"AdminSettings",components:{NcCheckboxRadioSwitch:s.A,NcSettingsSection:l.A},data:()=>({sendPasswordMail:(0,c.C)("sharebymail","sendPasswordMail"),replyToInitiator:(0,c.C)("sharebymail","replyToInitiator")}),methods:{async update(e,r){await(0,h.C)();const a=(0,p.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"sharebymail",key:e}),o=r?"yes":"no";try{var n;const{data:e}=await u.A.post(a,{value:o});this.handleResponse({status:null===(n=e.ocs)||void 0===n||null===(n=n.meta)||void 0===n?void 0:n.status})}catch(e){this.handleResponse({errorMessage:t("sharebymail","Unable to update share by mail config"),error:e})}},async handleResponse(e){let{status:t,errorMessage:r,error:a}=e;"ok"!==t&&((0,d.Qg)(r),f.error(r,a))}}},m=(0,a(14486).A)(b,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("sharebymail","Share by mail"),description:e.t("sharebymail","Allows people to share a personalized link to a file or folder by putting in an email address.")}},[t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.sendPasswordMail},on:{"update:checked":[function(t){e.sendPasswordMail=t},function(t){return e.update("sendpasswordmail",e.sendPasswordMail)}]}},[e._v("\n\t\t"+e._s(e.t("sharebymail","Send password by mail"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.replyToInitiator},on:{"update:checked":[function(t){e.replyToInitiator=t},function(t){return e.update("replyToInitiator",e.replyToInitiator)}]}},[e._v("\n\t\t"+e._s(e.t("sharebymail","Reply to initiator"))+"\n\t")])],1)}),[],!1,null,null,null).exports;a.nc=btoa((0,n.do)()),o.Ay.mixin({methods:{t:i.Tl}}),(new(o.Ay.extend(m))).$mount("#vue-admin-sharebymail")}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=o,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(s=!1,o<n&&(n=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"-"+e+".js?v="+{7560:"6ccfebfcc1f9206bb48d",8618:"d30d39583cd1936d2676"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="nextcloud:",i.l=(e,t,o,n)=>{if(r[e])r[e].push(t);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",a+o),s.src=e),r[e]=[t];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var o=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=7115,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={7115:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),s=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",s.name="ChunkLoadError",s.type=o,s.request=n,a[1](s)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],s=r[1],l=r[2],c=0;if(n.some((t=>0!==e[t]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(l)var d=l(i)}for(t&&t(r);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var s=i.O(void 0,[4208],(()=>i(57182)));s=i.O(s)})();
//# sourceMappingURL=sharebymail-vue-settings-admin-sharebymail.js.map?v=71ce01baaa4a8a836ff7
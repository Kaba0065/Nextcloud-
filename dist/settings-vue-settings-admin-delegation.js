/*! For license information please see settings-vue-settings-admin-delegation.js.LICENSE.txt */
(()=>{"use strict";var e,r,n,s={97766:(e,r,n)=>{var s=n(85471),o=n(67607),a=n(63814),i=n(26287),l=n(85168);const c=(0,n(53529).YK)().setApp("settings").detectUser().build(),u={name:"GroupSelect",components:{NcSelect:o.A},props:{availableGroups:{type:Array,default:()=>[]},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data(){return{selected:this.authorizedGroups.filter((e=>e.class===this.setting.class)).map((e=>this.availableGroups.find((t=>t.gid===e.group_id)))).filter((e=>void 0!==e))}},watch:{selected(){this.saveGroups()}},methods:{async saveGroups(){const e={newGroups:this.selected,class:this.setting.class};try{await i.A.post((0,a.Jv)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",e)}catch(e){(0,l.Qg)(t("settings","Unable to modify setting")),c.error("Unable to modify setting",e)}}}};var d=n(85072),p=n.n(d),g=n(97825),v=n.n(g),h=n(77659),b=n.n(h),f=n(55056),m=n.n(f),A=n(10540),y=n.n(A),C=n(41113),S=n.n(C),w=n(9549),k={};k.styleTagTransform=S(),k.setAttributes=m(),k.insert=b().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=y(),p()(w.A,k),w.A&&w.A.locals&&w.A.locals;var x=n(14486);const O=(0,x.A)(u,(function(){var e=this;return(0,e._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":e.setting.id,placeholder:e.t("settings","None"),label:"displayName",options:e.availableGroups,multiple:!0,"close-on-select":!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports;var G=n(88837),j=n(38613);const _={name:"AdminDelegating",components:{GroupSelect:O,NcSettingsSection:G.A},data:()=>({availableSettings:(0,j.C)("settings","available-settings"),availableGroups:(0,j.C)("settings","available-groups"),authorizedGroups:(0,j.C)("settings","authorized-groups"),authorizedSettingsDocLink:(0,j.C)("settings","authorized-settings-doc-link")})};var z=n(40026),T={};T.styleTagTransform=S(),T.setAttributes=m(),T.insert=b().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=y(),p()(z.A,T),z.A&&z.A.locals&&z.A.locals;const N=(0,x.A)(_,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Administration privileges"),description:e.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":e.authorizedSettingsDocLink}},[t("div",{staticClass:"setting-list"},e._l(e.availableSettings,(function(r){return t("div",{key:r.class},[t("label",{attrs:{for:r.id}},[e._v(e._s(r.sectionName))]),e._v(" "),t("GroupSelect",{attrs:{"available-groups":e.availableGroups,"authorized-groups":e.authorizedGroups,setting:r}})],1)})),0)])}),[],!1,null,"6afb59d5",null).exports;s.Ay.prototype.OC=OC,s.Ay.prototype.t=t,(new(s.Ay.extend(N))).$mount("#admin-right-sub-granting")},40026:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(71354),s=r.n(n),o=r(76314),a=r.n(o)()(s());a.push([e.id,"label[data-v-6afb59d5]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourcesContent:["\nlabel {\n\tdisplay: block;\n\tfont-size: 16px;\n\tmargin: 12px 0;\n\tcolor: var(--color-text-light);\n}\n"],sourceRoot:""}]);const i=a},9549:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(71354),s=r.n(n),o=r(76314),a=r.n(o)()(s());a.push([e.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourcesContent:["\n.group-select {\n\twidth: 100%;\n}\n"],sourceRoot:""}]);const i=a}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=s,e=[],a.O=(t,r,n,s)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{7185:"7500f3fc5f25407c56b1",9891:"11f7c532881a4e9da7b7"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="nextcloud:",a.l=(e,t,s,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+s){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+s),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(g);var s=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(n))),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=9464,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={9464:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise(((r,s)=>n=e[t]=[r,s]));r.push(n[2]=s);var o=a.p+a.u(t),i=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,o=r[0],i=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(r);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[4208],(()=>a(97766)));i=a.O(i)})();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=7afcba3f881fc8bfdf3e
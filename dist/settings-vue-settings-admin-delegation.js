/*! For license information please see settings-vue-settings-admin-delegation.js.LICENSE.txt */
(()=>{"use strict";var e,s={70549:(e,s,n)=>{var o=n(20144),r=n(36456),i=n.n(r),a=n(79753),l=n(18574),c=n(3255);const u=(0,n(17499).IY)().setApp("settings").detectUser().build(),d={name:"GroupSelect",components:{NcSelect:i()},props:{availableGroups:{type:Array,default:()=>[]},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data(){return{selected:this.authorizedGroups.filter((e=>e.class===this.setting.class)).map((e=>this.availableGroups.find((t=>t.gid===e.group_id)))).filter((e=>void 0!==e))}},watch:{selected(){this.saveGroups()}},methods:{async saveGroups(){const e={newGroups:this.selected,class:this.setting.class};try{await l.Z.post((0,a.generateUrl)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",e)}catch(e){(0,c.x2)(t("settings","Unable to modify setting")),u.error("Unable to modify setting",e)}}}};var p=n(93379),g=n.n(p),v=n(7795),h=n.n(v),f=n(90569),b=n.n(f),m=n(3565),A=n.n(m),y=n(19216),S=n.n(y),C=n(44589),x=n.n(C),w=n(34870),G={};G.styleTagTransform=x(),G.setAttributes=A(),G.insert=b().bind(null,"head"),G.domAPI=h(),G.insertStyleElement=S(),g()(w.Z,G),w.Z&&w.Z.locals&&w.Z.locals;var O=n(51900);const j=(0,O.Z)(d,(function(){var e=this;return(0,e._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":e.setting.id,placeholder:e.t("settings","None"),label:"displayName",options:e.availableGroups,multiple:!0,"close-on-select":!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports;var k=n(13299),Z=n.n(k),_=n(79954);const z={name:"AdminDelegating",components:{GroupSelect:j,NcSettingsSection:Z()},data:()=>({availableSettings:(0,_.j)("settings","available-settings"),availableGroups:(0,_.j)("settings","available-groups"),authorizedGroups:(0,_.j)("settings","authorized-groups"),authorizedSettingsDocLink:(0,_.j)("settings","authorized-settings-doc-link")})};var T=n(4402),N={};N.styleTagTransform=x(),N.setAttributes=A(),N.insert=b().bind(null,"head"),N.domAPI=h(),N.insertStyleElement=S(),g()(T.Z,N),T.Z&&T.Z.locals&&T.Z.locals;const P=(0,O.Z)(z,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{title:e.t("settings","Administration privileges"),description:e.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":e.authorizedSettingsDocLink}},[t("div",{staticClass:"setting-list"},e._l(e.availableSettings,(function(s){return t("div",{key:s.class},[t("label",{attrs:{for:s.id}},[e._v(e._s(s.sectionName))]),e._v(" "),t("GroupSelect",{attrs:{"available-groups":e.availableGroups,"authorized-groups":e.authorizedGroups,setting:s}})],1)})),0)])}),[],!1,null,"36650f6a",null).exports;o.default.prototype.OC=OC,o.default.prototype.t=t,(new(o.default.extend(P))).$mount("#admin-right-sub-granting")},4402:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(87537),o=s.n(n),r=s(23645),i=s.n(r)()(o());i.push([e.id,"label[data-v-36650f6a]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourcesContent:["\nlabel {\n\tdisplay: block;\n\tfont-size: 16px;\n\tmargin: 12px 0;\n\tcolor: var(--color-text-light);\n}\n"],sourceRoot:""}]);const a=i},34870:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(87537),o=s.n(n),r=s(23645),i=s.n(r)()(o());i.push([e.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourcesContent:["\n.group-select {\n\twidth: 100%;\n}\n"],sourceRoot:""}]);const a=i}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=s,e=[],o.O=(t,s,n,r)=>{if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],r=e[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](s[l])))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=6638,(()=>{o.b=document.baseURI||self.location.href;var e={6638:0};o.O.j=t=>0===e[t];var t=(t,s)=>{var n,r,i=s[0],a=s[1],l=s[2],c=0;if(i.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var u=l(o)}for(t&&t(s);c<i.length;c++)r=i[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),o.nc=void 0;var r=o.O(void 0,[7874],(()=>o(70549)));r=o.O(r)})();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=248a00c12e3470257f42
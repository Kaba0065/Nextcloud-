/*! For license information please see settings-vue-settings-admin-delegation.js.LICENSE.txt */
!function(){"use strict";var n,e={40168:function(n,e,r){var i=r(20144),o=r(98266),s=r.n(o),a=r(79753),u=r(4820),l=r(26932),c=(0,r(17499).IY)().setApp("settings").detectUser().build();function d(n,t,e,r,i,o,s){try{var a=n[o](s),u=a.value}catch(n){return void e(n)}a.done?t(u):Promise.resolve(u).then(r,i)}var p={name:"GroupSelect",components:{NcMultiselect:s()},props:{availableGroups:{type:Array,default:function(){return[]}},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data:function(){var n=this;return{selected:this.authorizedGroups.filter((function(t){return t.class===n.setting.class})).map((function(t){return n.availableGroups.find((function(n){return n.gid===t.group_id}))})).filter((function(n){return void 0!==n}))}},watch:{selected:function(){this.saveGroups()}},methods:{saveGroups:function(){var n,e=this;return(n=regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={newGroups:e.selected,class:e.setting.class},n.prev=1,n.next=4,u.default.post((0,a.generateUrl)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",r);case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),(0,l.x2)(t("settings","Unable to modify setting")),c.error("Unable to modify setting",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})),function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function s(n){d(o,r,i,s,a,"next",n)}function a(n){d(o,r,i,s,a,"throw",n)}s(void 0)}))})()}}},f=p,g=r(93379),v=r.n(g),h=r(7795),m=r.n(h),b=r(90569),y=r.n(b),w=r(3565),A=r.n(w),S=r(19216),O=r.n(S),x=r(44589),G=r.n(x),j=r(63288),k={};k.styleTagTransform=G(),k.setAttributes=A(),k.insert=y().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=O(),v()(j.Z,k),j.Z&&j.Z.locals&&j.Z.locals;var _=r(51900),C=(0,_.Z)(f,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("NcMultiselect",{staticClass:"group-multiselect",attrs:{placeholder:n.t("settings","None"),"track-by":"gid",label:"displayName",options:n.availableGroups,"open-direction":"bottom",multiple:!0,"allow-empty":!0},model:{value:n.selected,callback:function(t){n.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports,z=r(13299),P=r.n(z),Z=r(79954),N={name:"AdminDelegating",components:{GroupSelect:C,NcSettingsSection:P()},data:function(){return{availableSettings:(0,Z.j)("settings","available-settings"),availableGroups:(0,Z.j)("settings","available-groups"),authorizedGroups:(0,Z.j)("settings","authorized-groups"),authorizedSettingsDocLink:(0,Z.j)("settings","authorized-settings-doc-link")}}},E=(0,_.Z)(N,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("NcSettingsSection",{attrs:{title:n.t("settings","Administration privileges"),description:n.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":n.authorizedSettingsDocLink}},[e("div",{staticClass:"setting-list"},n._l(n.availableSettings,(function(t){return e("div",{key:t.class},[e("h3",[n._v(n._s(t.sectionName))]),n._v(" "),e("GroupSelect",{attrs:{"available-groups":n.availableGroups,"authorized-groups":n.authorizedGroups,setting:t}})],1)})),0)])}),[],!1,null,null,null).exports;i.ZP.prototype.OC=OC,i.ZP.prototype.t=t,(new(i.ZP.extend(E))).$mount("#admin-right-sub-granting")},63288:function(n,t,e){var r=e(87537),i=e.n(r),o=e(23645),s=e.n(o)()(i());s.push([n.id,".group-multiselect{width:100%;margin-right:0}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AAqEA,mBACC,UAAA,CACA,cAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.group-multiselect {\n\twidth: 100%;\n\tmargin-right: 0;\n}\n"],sourceRoot:""}]),t.Z=s}},r={};function i(n){var t=r[n];if(void 0!==t)return t.exports;var o=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,i.amdD=function(){throw new Error("define cannot be used indirect")},i.amdO={},n=[],i.O=function(t,e,r,o){if(!e){var s=1/0;for(c=0;c<n.length;c++){e=n[c][0],r=n[c][1],o=n[c][2];for(var a=!0,u=0;u<e.length;u++)(!1&o||s>=o)&&Object.keys(i.O).every((function(n){return i.O[n](e[u])}))?e.splice(u--,1):(a=!1,o<s&&(s=o));if(a){n.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[e,r,o]},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,{a:t}),t},i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},i.j=6638,function(){i.b=document.baseURI||self.location.href;var n={6638:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,o,s=e[0],a=e[1],u=e[2],l=0;if(s.some((function(t){return 0!==n[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var c=u(i)}for(t&&t(e);l<s.length;l++)o=s[l],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return i.O(c)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),i.nc=void 0;var o=i.O(void 0,[7874],(function(){return i(40168)}));o=i.O(o)}();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=d4810806fb4d0cd224c4
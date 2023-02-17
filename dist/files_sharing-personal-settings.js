/*! For license information please see files_sharing-personal-settings.js.LICENSE.txt */
!function(){"use strict";var e,r={17452:function(e,r,n){var o=n(20144),a=n(45994),i=n(79753),s=n(79954),c=n(64024),l=n(4820),u=n(62520),f=n.n(u);function d(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}var p=(0,s.j)("files_sharing","default_share_folder","/"),h=(0,s.j)("files_sharing","share_folder",p),g={name:"SelectShareFolderDialogue",data:function(){return{directory:h,defaultDirectory:p}},computed:{readableDirectory:function(){return this.directory?this.directory:"/"}},methods:{pickFolder:function(){var e,r=this;return(e=regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,c.fn)(t("files","Choose a default folder for accepted shares")).startAt(r.readableDirectory).setMultiSelect(!1).setModal(!0).setType(1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories().build(),e.prev=1,e.next=4,n.pick();case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0="/";case 7:if((o=e.t0).startsWith("/")){e.next=10;break}throw new Error(t("files","Invalid path selected"));case 10:return r.directory=f().normalize(o),e.next=13,l.default.put((0,i.generateUrl)("/apps/files_sharing/settings/shareFolder"),{shareFolder:r.directory});case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(1),(0,c.x2)(e.t1.message||t("files","Unknown error"));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){d(a,n,o,i,s,"next",e)}function s(e){d(a,n,o,i,s,"throw",e)}i(void 0)}))})()},resetFolder:function(){this.directory=this.defaultDirectory,l.default.delete((0,i.generateUrl)("/apps/files_sharing/settings/shareFolder"))}}},v=g,m=n(93379),A=n.n(m),_=n(7795),y=n.n(_),b=n(90569),C=n.n(b),x=n(3565),k=n.n(x),w=n(19216),S=n.n(w),D=n(44589),P=n.n(D),j=n(34630),Z={};Z.styleTagTransform=P(),Z.setAttributes=k(),Z.insert=C().bind(null,"head"),Z.domAPI=y(),Z.insertStyleElement=S(),A()(j.Z,Z),j.Z&&j.Z.locals&&j.Z.locals;var F=n(51900),O=(0,F.Z)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"share-folder"},[t("span",[e._v(e._s(e.t("files_sharing","Set default folder for accepted shares"))+" ")]),e._v(" "),t("form",{staticClass:"share-folder__form",on:{reset:function(t){return t.preventDefault(),t.stopPropagation(),e.resetFolder.apply(null,arguments)}}},[t("input",{staticClass:"share-folder__picker",attrs:{type:"text",placeholder:e.readableDirectory},on:{click:function(t){return t.preventDefault(),e.pickFolder.apply(null,arguments)}}}),e._v(" "),e.readableDirectory!==e.defaultDirectory?t("input",{staticClass:"share-folder__reset",attrs:{type:"reset","aria-label":e.t("files_sharing","Reset folder to system default")},domProps:{value:e.t("files_sharing","Reset")}}):e._e()])])}),[],!1,null,"1b20ac1d",null);function T(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}var R={name:"PersonalSettings",components:{SelectShareFolderDialogue:O.exports},data:function(){return{accepting:(0,s.j)("files_sharing","accept_default"),enforceAcceptShares:(0,s.j)("files_sharing","enforce_accept"),allowCustomDirectory:(0,s.j)("files_sharing","allow_custom_share_folder")}},methods:{toggleEnabled:function(){var e,r=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.default.put((0,i.generateUrl)("/apps/files_sharing/settings/defaultAccept"),{accept:r.accepting});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),(0,c.x2)(t("sharing","Error while toggling options")),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){T(a,n,o,i,s,"next",e)}function s(e){T(a,n,o,i,s,"throw",e)}i(void 0)}))})()}}},E=R,M=n(62974),B={};B.styleTagTransform=P(),B.setAttributes=k(),B.insert=C().bind(null,"head"),B.domAPI=y(),B.insertStyleElement=S(),A()(M.Z,B),M.Z&&M.Z.locals&&M.Z.locals;var I=(0,F.Z)(E,(function(){var e=this,t=e._self._c;return!e.enforceAcceptShares||e.allowCustomDirectory?t("div",{staticClass:"section",attrs:{id:"files-sharing-personal-settings"}},[t("h2",[e._v(e._s(e.t("files_sharing","Sharing")))]),e._v(" "),e.enforceAcceptShares?e._e():t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.accepting,expression:"accepting"}],staticClass:"checkbox",attrs:{id:"files-sharing-personal-settings-accept",type:"checkbox"},domProps:{checked:Array.isArray(e.accepting)?e._i(e.accepting,null)>-1:e.accepting},on:{change:[function(t){var r=e.accepting,n=t.target,o=!!n.checked;if(Array.isArray(r)){var a=e._i(r,null);n.checked?a<0&&(e.accepting=r.concat([null])):a>-1&&(e.accepting=r.slice(0,a).concat(r.slice(a+1)))}else e.accepting=o},e.toggleEnabled]}}),e._v(" "),t("label",{attrs:{for:"files-sharing-personal-settings-accept"}},[e._v(e._s(e.t("files_sharing","Accept user and group shares by default")))])]),e._v(" "),e.allowCustomDirectory?t("p",[t("SelectShareFolderDialogue")],1):e._e()]):e._e()}),[],!1,null,"188f517d",null).exports;n.nc=btoa((0,a.IH)()),o.ZP.prototype.t=t,(new(o.ZP.extend(I))).$mount("#files-sharing-personal-settings")},62974:function(e,t,r){var n=r(87537),o=r.n(n),a=r(23645),i=r.n(a)()(o());i.push([e.id,"p[data-v-188f517d]{margin-top:12px;margin-bottom:12px}","",{version:3,sources:["webpack://./apps/files_sharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,mBACC,eAAA,CACA,kBAAA",sourcesContent:["\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n"],sourceRoot:""}]),t.Z=i},34630:function(e,t,r){var n=r(87537),o=r.n(n),a=r(23645),i=r.n(a)()(o());i.push([e.id,".share-folder__form[data-v-1b20ac1d]{display:flex}.share-folder__picker[data-v-1b20ac1d]{cursor:pointer;min-width:266px}.share-folder__reset[data-v-1b20ac1d]{background-color:rgba(0,0,0,0);border:none;font-weight:normal;text-decoration:underline;font-size:inherit}","",{version:3,sources:["webpack://./apps/files_sharing/src/components/SelectShareFolderDialogue.vue"],names:[],mappings:"AAEC,qCACC,YAAA,CAGD,uCACC,cAAA,CACA,eAAA,CAID,sCACC,8BAAA,CACA,WAAA,CACA,kBAAA,CACA,yBAAA,CACA,iBAAA",sourcesContent:["\n.share-folder {\n\t&__form {\n\t\tdisplay: flex;\n\t}\n\n\t&__picker {\n\t\tcursor: pointer;\n\t\tmin-width: 266px;\n\t}\n\n\t// Make the reset button looks like text\n\t&__reset {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tfont-weight: normal;\n\t\ttext-decoration: underline;\n\t\tfont-size: inherit;\n\t}\n}\n"],sourceRoot:""}]),t.Z=i}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=r,e=[],o.O=function(t,r,n,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.j=8330,function(){o.b=document.baseURI||self.location.href;var e={8330:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var u=c(o)}for(t&&t(r);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),o.nc=void 0;var a=o.O(void 0,[7874],(function(){return o(17452)}));a=o.O(a)}();
//# sourceMappingURL=files_sharing-personal-settings.js.map?v=db69f069ce976aff14dc
/*! For license information please see core-recommendedapps.js.LICENSE.txt */
(()=>{"use strict";var t,e={5941:(t,e,n)=>{var a=n(77958),i=n(31352),o=n(20144),r=n(17499);const s=null===(l=(0,a.ts)())?(0,r.IY)().setApp("core").build():(0,r.IY)().setApp("core").setUid(l.uid).build();var l,p=n(93664),c=n(79753),d=n(43554),u=n(43452);function m(t){if(!Number.isInteger(t)&&t!==Number.POSITIVE_INFINITY||!(t>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new u.Z;let n=0;const a=async(t,a,i)=>{n++;const o=(async()=>t(...i))();a(o);try{await o}catch{}n--,e.size>0&&e.dequeue()()},i=function(i){for(var o=arguments.length,r=new Array(o>1?o-1:0),s=1;s<o;s++)r[s-1]=arguments[s];return new Promise((o=>{((i,o,r)=>{e.enqueue(a.bind(void 0,i,o,r)),(async()=>{await Promise.resolve(),n<t&&e.size>0&&e.dequeue()()})()})(i,o,r)}))};return Object.defineProperties(i,{activeCount:{get:()=>n},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),i}var g=n(82652);const A={calendar:{description:(0,i.Iu)("core","Schedule work & meetings, synced with all your devices."),icon:(0,c.imagePath)("core","places/calendar.svg")},contacts:{description:(0,i.Iu)("core","Keep your colleagues and friends in one place without leaking their private info."),icon:(0,c.imagePath)("core","places/contacts.svg")},mail:{description:(0,i.Iu)("core","Simple email app nicely integrated with Files, Contacts and Calendar."),icon:(0,c.imagePath)("core","actions/mail.svg")},spreed:{description:(0,i.Iu)("core","Chatting, video calls, screensharing, online meetings and web conferencing – in your browser and with mobile apps."),icon:(0,c.imagePath)("core","apps/spreed.svg")},richdocuments:{name:"Nextcloud Office",description:(0,i.Iu)("core","Collaborative documents, spreadsheets and presentations, built on Collabora Online."),icon:(0,c.imagePath)("core","apps/richdocuments.svg")},notes:{description:(0,i.Iu)("core","Distraction free note taking app."),icon:(0,c.imagePath)("core","apps/notes.svg")},richdocumentscode:{hidden:!0}},h=Object.keys(A),f={name:"RecommendedApps",components:{NcButton:g.Z},data:()=>({showInstallButton:!1,installingApps:!1,loadingApps:!0,loadingAppsError:!1,apps:[],defaultPageUrl:(0,d.j)("core","defaultPageUrl")}),computed:{recommendedApps(){return this.apps.filter((t=>h.includes(t.id)))}},async mounted(){try{const{data:t}=await p.Z.get((0,c.generateUrl)("settings/apps/list"));s.info(`${t.apps.length} apps fetched`),this.apps=t.apps.map((t=>Object.assign(t,{loading:!1,installationError:!1}))),s.debug(`${this.recommendedApps.length} recommended apps found`,{apps:this.recommendedApps}),this.showInstallButton=!0}catch(t){s.error("could not fetch app list",{error:t}),this.loadingAppsError=!0}finally{this.loadingApps=!1}},methods:{installApps(){this.showInstallButton=!1,this.installingApps=!0;const t=m(1),e=this.recommendedApps.filter((t=>!t.active&&t.isCompatible&&t.canInstall)).map((e=>t((()=>(s.info(`installing ${e.id}`),e.loading=!0,p.Z.post((0,c.generateUrl)("settings/apps/enable"),{appIds:[e.id],groups:[]}).catch((t=>{s.error(`could not install ${e.id}`,{error:t}),e.installationError=!0})).then((()=>{s.info(`installed ${e.id}`),e.loading=!1})))))));s.debug(`installing ${e.length} recommended apps`),Promise.all(e).then((()=>{s.info("all recommended apps installed, redirecting …"),window.location=this.defaultPageUrl})).catch((t=>s.error("could not install recommended apps",{error:t})))},customIcon:t=>t in A&&A[t].icon?A[t].icon:(s.warn(`no app icon for recommended app ${t}`),(0,c.imagePath)("core","places/default-app-icon.svg")),customName:t=>t.id in A&&A[t.id].name||t.name,customDescription:t=>t in A?A[t].description:(s.warn(`no app description for recommended app ${t}`),""),isHidden:t=>t in A&&!!A[t].hidden}};var v=n(93379),b=n.n(v),C=n(7795),y=n.n(C),w=n(90569),_=n.n(w),x=n(3565),I=n.n(x),P=n(19216),k=n.n(P),O=n(44589),B=n.n(O),j=n(14400),E={};E.styleTagTransform=B(),E.setAttributes=I(),E.insert=_().bind(null,"head"),E.domAPI=y(),E.insertStyleElement=k(),b()(j.Z,E),j.Z&&j.Z.locals&&j.Z.locals;const D=(0,n(51900).Z)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"guest-box"},[e("h2",[t._v(t._s(t.t("core","Recommended apps")))]),t._v(" "),t.loadingApps?e("p",{staticClass:"loading text-center"},[t._v("\n\t\t"+t._s(t.t("core","Loading apps …"))+"\n\t")]):t.loadingAppsError?e("p",{staticClass:"loading-error text-center"},[t._v("\n\t\t"+t._s(t.t("core","Could not fetch list of apps from the App Store."))+"\n\t")]):t.installingApps?e("p",{staticClass:"text-center"},[t._v("\n\t\t"+t._s(t.t("core","Installing apps …"))+"\n\t")]):t._e(),t._v(" "),t._l(t.recommendedApps,(function(n){return e("div",{key:n.id,staticClass:"app"},[t.isHidden(n.id)?t._e():[e("img",{attrs:{src:t.customIcon(n.id),alt:""}}),t._v(" "),e("div",{staticClass:"info"},[e("h3",[t._v("\n\t\t\t\t\t"+t._s(t.customName(n))+"\n\t\t\t\t\t"),n.loading?e("span",{staticClass:"icon icon-loading-small-dark"}):n.active?e("span",{staticClass:"icon icon-checkmark-white"}):t._e()]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.customDescription(n.id))}}),t._v(" "),n.installationError?e("p",[e("strong",[t._v(t._s(t.t("core","App download or installation failed")))])]):n.isCompatible?n.canInstall?t._e():e("p",[e("strong",[t._v(t._s(t.t("core","Cannot install this app")))])]):e("p",[e("strong",[t._v(t._s(t.t("core","Cannot install this app because it is not compatible")))])])])]],2)})),t._v(" "),e("div",{staticClass:"dialog-row"},[t.showInstallButton?e("NcButton",{attrs:{type:"tertiary",role:"link",href:t.defaultPageUrl}},[t._v("\n\t\t\t"+t._s(t.t("core","Skip"))+"\n\t\t")]):t._e(),t._v(" "),t.showInstallButton?e("NcButton",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.installApps.apply(null,arguments)}}},[t._v("\n\t\t\t"+t._s(t.t("core","Install recommended apps"))+"\n\t\t")]):t._e()],1)],2)}),[],!1,null,"880500b4",null).exports;n.nc=btoa((0,a.IH)()),o.ZP.mixin({methods:{t:i.Iu}}),(new(o.ZP.extend(D))).$mount("#recommended-apps"),s.debug("recommended apps view rendered")},14400:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(87537),i=n.n(a),o=n(23645),r=n.n(o)()(i());r.push([t.id,".dialog-row[data-v-880500b4]{display:flex;justify-content:end;margin-top:8px}p.loading[data-v-880500b4],p.loading-error[data-v-880500b4]{height:100px}p[data-v-880500b4]:last-child{margin-top:10px}.text-center[data-v-880500b4]{text-align:center}.app[data-v-880500b4]{display:flex;flex-direction:row}.app img[data-v-880500b4]{height:50px;width:50px;filter:var(--background-invert-if-dark)}.app img[data-v-880500b4],.app .info[data-v-880500b4]{padding:12px}.app .info h3[data-v-880500b4],.app .info p[data-v-880500b4]{text-align:left}.app .info h3[data-v-880500b4]{margin-top:0}.app .info h3>span.icon[data-v-880500b4]{display:inline-block}","",{version:3,sources:["webpack://./core/src/components/setup/RecommendedApps.vue"],names:[],mappings:"AACA,6BACC,YAAA,CACA,mBAAA,CACA,cAAA,CAIA,4DAEC,YAAA,CAGD,8BACC,eAAA,CAIF,8BACC,iBAAA,CAGD,sBACC,YAAA,CACA,kBAAA,CAEA,0BACC,WAAA,CACA,UAAA,CACA,uCAAA,CAGD,sDACC,YAAA,CAIA,6DACC,eAAA,CAGD,+BACC,YAAA,CAGD,yCACC,oBAAA",sourcesContent:["\n.dialog-row {\n\tdisplay: flex;\n\tjustify-content: end;\n\tmargin-top: 8px;\n}\n\np {\n\t&.loading,\n\t&.loading-error {\n\t\theight: 100px;\n\t}\n\n\t&:last-child {\n\t\tmargin-top: 10px;\n\t}\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.app {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\timg {\n\t\theight: 50px;\n\t\twidth: 50px;\n\t\tfilter: var(--background-invert-if-dark);\n\t}\n\n\timg, .info {\n\t\tpadding: 12px;\n\t}\n\n\t.info {\n\t\th3, p {\n\t\t\ttext-align: left;\n\t\t}\n\n\t\th3 {\n\t\t\tmargin-top: 0;\n\t\t}\n\n\t\th3 > span.icon {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=r}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,t=[],a.O=(e,n,i,o)=>{if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],o=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((t=>a.O[t](n[l])))?n.splice(l--,1):(s=!1,o<r&&(r=o));if(s){t.splice(c--,1);var p=i();void 0!==p&&(e=p)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,i,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.e=()=>Promise.resolve(),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=1033,(()=>{a.b=document.baseURI||self.location.href;var t={1033:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,r=n[0],s=n[1],l=n[2],p=0;if(r.some((e=>0!==t[e]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var c=l(a)}for(e&&e(n);p<r.length;p++)o=r[p],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),a.nc=void 0;var i=a.O(void 0,[7874],(()=>a(5941)));i=a.O(i)})();
//# sourceMappingURL=core-recommendedapps.js.map?v=6f080f02400a5600f6d7
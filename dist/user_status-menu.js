/*! For license information please see user_status-menu.js.LICENSE.txt */
(()=>{var e,s,a,r={43492:(e,s,a)=>{"use strict";var r=a(20144),n=a(77958),o=a(69183),u=a(74628),i=a(20296),c=a.n(i),l=a(93664),d=a(79753),m=a(84387),p=a(25108);const g={name:"UserStatus",components:{NcButton:u.Z,SetStatusModal:()=>Promise.all([a.e(7874),a.e(8299)]).then(a.bind(a,32819))},mixins:[m.Z],props:{inline:{type:Boolean,default:!1}},data:()=>({heartbeatInterval:null,isAway:!1,isModalOpen:!1,mouseMoveListener:null,setAwayTimeout:null}),mounted(){this.$store.dispatch("loadStatusFromInitialState"),OC.config.session_keepalive&&(this.heartbeatInterval=setInterval(this._backgroundHeartbeat.bind(this),3e5),this.setAwayTimeout=()=>{this.isAway=!0},this.mouseMoveListener=c()((()=>{const t=this.isAway;this.isAway=!1,clearTimeout(this.setAwayTimeout),setTimeout(this.setAwayTimeout,12e4),t&&this._backgroundHeartbeat()}),2e3,!0),window.addEventListener("mousemove",this.mouseMoveListener,{capture:!0,passive:!0}),this._backgroundHeartbeat()),(0,o.Ld)("user_status:status.updated",this.handleUserStatusUpdated)},beforeDestroy(){window.removeEventListener("mouseMove",this.mouseMoveListener),clearInterval(this.heartbeatInterval),(0,o.r1)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},async _backgroundHeartbeat(){try{const t=await(async t=>{const e=(0,d.generateOcsUrl)("apps/user_status/api/v1/heartbeat?format=json");return(await l.Z.put(e,{status:t?"away":"online"})).data.ocs.data})(this.isAway);t?.userId?this.$store.dispatch("setStatusFromHeartbeat",t):await this.$store.dispatch("reFetchStatusFromServer")}catch(t){p.debug("Failed sending heartbeat, got: "+t.response?.status)}},handleUserStatusUpdated(t){OC.getCurrentUser().uid===t.userId&&this.$store.dispatch("setStatusFromObject",{status:t.status,icon:t.icon,message:t.message})}}};var h=a(93379),f=a.n(h),v=a(7795),j=a.n(v),b=a(90569),A=a.n(b),y=a(3565),k=a.n(y),w=a(19216),S=a.n(w),C=a(44589),I=a.n(C),_=a(95248),x={};x.styleTagTransform=I(),x.setAttributes=k(),x.insert=A().bind(null,"head"),x.domAPI=j(),x.insertStyleElement=S(),f()(_.Z,x),_.Z&&_.Z.locals&&_.Z.locals;const O=(0,a(51900).Z)(g,(function(){var t=this,e=t._self._c;return e(t.inline?"div":"li",{tag:"component"},[t.inline?e("NcButton",{attrs:{icon:t.statusIcon},on:{click:function(e){return e.stopPropagation(),t.openModal.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span",{staticClass:"user-status-icon",class:t.statusIcon,attrs:{"aria-hidden":"true"}})]},proxy:!0}])},[t._v("\n\t\t"+t._s(t.visibleMessage)+"\n\t")]):e("button",{staticClass:"user-status-menu-item",on:{click:function(e){return e.stopPropagation(),t.openModal.apply(null,arguments)}}},[e("span",{staticClass:"user-status-icon",class:t.statusIcon,attrs:{"aria-hidden":"true"}}),t._v("\n\t\t"+t._s(t.visibleMessage)+"\n\t")]),t._v(" "),t.isModalOpen?e("SetStatusModal",{on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"754ee57b",null).exports;var M=a(20629);const U={state:{predefinedStatuses:[]},mutations:{addPredefinedStatus(t,e){t.predefinedStatuses=[...t.predefinedStatuses,e]}},getters:{statusesHaveLoaded:t=>t.predefinedStatuses.length>0},actions:{async loadAllPredefinedStatuses(t){let{state:e,commit:s}=t;if(e.predefinedStatuses.length>0)return;const a=await(async()=>{const t=(0,d.generateOcsUrl)("apps/user_status/api/v1/predefined_statuses?format=json");return(await l.Z.get(t)).data.ocs.data})();for(const t of a)s("addPredefinedStatus",t)}}};var z=a(43554),P=a(64039),T=a(80351),F=a.n(T);const D=t=>{if(null===t)return null;const e=(0,P.n)();if("period"===t.type)return e.setSeconds(e.getSeconds()+t.time),Math.floor(e.getTime()/1e3);if("end-of"===t.type)switch(t.time){case"day":case"week":return Number(F()(e).endOf(t.time).format("X"))}return"_time"===t.type?t.time:null},E={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{setStatus(t,e){let{statusType:s}=e;t.status=s,t.statusIsUserDefined=!0},setPredefinedMessage(t,e){let{messageId:s,clearAt:a,message:r,icon:n}=e;t.messageId=s,t.messageIsPredefined=!0,t.message=r,t.icon=n,t.clearAt=a},setCustomMessage(t,e){let{message:s,icon:a,clearAt:r}=e;t.messageId=null,t.messageIsPredefined=!1,t.message=s,t.icon=a,t.clearAt=r},clearMessage(t){t.messageId=null,t.messageIsPredefined=!1,t.message=null,t.icon=null,t.clearAt=null},loadStatusFromServer(t,e){let{status:s,statusIsUserDefined:a,message:r,icon:n,clearAt:o,messageIsPredefined:u,messageId:i}=e;t.status=s,t.message=r,t.icon=n,void 0!==a&&(t.statusIsUserDefined=a),void 0!==o&&(t.clearAt=o),void 0!==u&&(t.messageIsPredefined=u),void 0!==i&&(t.messageId=i)}},getters:{},actions:{async setStatus(t,e){let{commit:s,state:a}=t,{statusType:r}=e;await(async t=>{const e=(0,d.generateOcsUrl)("apps/user_status/api/v1/user_status/status");await l.Z.put(e,{statusType:t})})(r),s("setStatus",{statusType:r}),(0,o.j8)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:(0,n.ts)()?.uid})},async setStatusFromObject(t,e){let{commit:s,state:a}=t;s("loadStatusFromServer",e)},async setPredefinedMessage(t,e){let{commit:s,rootState:a,state:r}=t,{messageId:u,clearAt:i}=e;const c=D(i);await async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const s=(0,d.generateOcsUrl)("apps/user_status/api/v1/user_status/message/predefined?format=json");await l.Z.put(s,{messageId:t,clearAt:e})}(u,c);const m=a.predefinedStatuses.predefinedStatuses.find((t=>t.id===u)),{message:p,icon:g}=m;s("setPredefinedMessage",{messageId:u,clearAt:c,message:p,icon:g}),(0,o.j8)("user_status:status.updated",{status:r.status,message:r.message,icon:r.icon,clearAt:r.clearAt,userId:(0,n.ts)()?.uid})},async setCustomMessage(t,e){let{commit:s,state:a}=t,{message:r,icon:u,clearAt:i}=e;const c=D(i);await async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const a=(0,d.generateOcsUrl)("apps/user_status/api/v1/user_status/message/custom?format=json");await l.Z.put(a,{message:t,statusIcon:e,clearAt:s})}(r,u,c),s("setCustomMessage",{message:r,icon:u,clearAt:c}),(0,o.j8)("user_status:status.updated",{status:a.status,message:a.message,icon:a.icon,clearAt:a.clearAt,userId:(0,n.ts)()?.uid})},async clearMessage(t){let{commit:e,state:s}=t;await(async()=>{const t=(0,d.generateOcsUrl)("apps/user_status/api/v1/user_status/message?format=json");await l.Z.delete(t)})(),e("clearMessage"),(0,o.j8)("user_status:status.updated",{status:s.status,message:s.message,icon:s.icon,clearAt:s.clearAt,userId:(0,n.ts)()?.uid})},async reFetchStatusFromServer(t){let{commit:e}=t;e("loadStatusFromServer",await(async()=>{const t=(0,d.generateOcsUrl)("apps/user_status/api/v1/user_status");return(await l.Z.get(t)).data.ocs.data})())},async setStatusFromHeartbeat(t,e){let{commit:s}=t;s("loadStatusFromServer",e)},loadStatusFromInitialState(t){let{commit:e}=t;e("loadStatusFromServer",(0,z.j)("user_status","status"))}}},Z={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{loadBackupStatusFromServer(t,e){let{status:s,statusIsUserDefined:a,message:r,icon:n,clearAt:o,messageIsPredefined:u,messageId:i}=e;t.status=s,t.message=r,t.icon=n,void 0!==a&&(t.statusIsUserDefined=a),void 0!==o&&(t.clearAt=o),void 0!==u&&(t.messageIsPredefined=u),void 0!==i&&(t.messageId=i)}},getters:{},actions:{async fetchBackupFromServer(t){let{commit:e}=t;try{e("loadBackupStatusFromServer",await(async t=>{const e=(0,d.generateOcsUrl)("apps/user_status/api/v1/statuses/{userId}",{userId:"_"+t});return(await l.Z.get(e)).data.ocs.data})((0,n.ts)()?.uid))}catch(t){}},async revertBackupFromServer(t,e){let{commit:s}=t,{messageId:a}=e;const r=await(async t=>{const e=(0,d.generateOcsUrl)("apps/user_status/api/v1/user_status/revert/{messageId}",{messageId:t});return(await l.Z.delete(e)).data.ocs.data})(a);r&&(s("loadBackupStatusFromServer",{}),s("loadStatusFromServer",r),(0,o.j8)("user_status:status.updated",{status:r.status,message:r.message,icon:r.icon,clearAt:r.clearAt,userId:(0,n.ts)()?.uid}))}}};r.default.use(M.ZP);const $=new M.yh({modules:{predefinedStatuses:U,userStatus:E,userBackupStatus:Z},strict:!0});a.nc=btoa((0,n.IH)()),r.default.prototype.t=t,r.default.prototype.$t=t;const B=()=>{const t=document.getElementById("user_status-menu-entry");new r.default({el:t,render:t=>t(O),store:$})};document.getElementById("user_status-menu-entry")?B():(0,o.Ld)("core:user-menu:mounted",B),document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("status",(t=>new(r.default.extend(O))({propsData:{inline:!0},store:$}).$mount(t)))}))},84387:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(20629),r=s(64024),n=s(25108);const o={computed:{...(0,a.rn)({statusType:t=>t.userStatus.status,statusIsUserDefined:t=>t.userStatus.statusIsUserDefined,customIcon:t=>t.userStatus.icon,customMessage:t=>t.userStatus.message}),visibleMessage(){if(this.customIcon&&this.customMessage)return`${this.customIcon} ${this.customMessage}`;if(this.customMessage)return this.customMessage;if(this.statusIsUserDefined)switch(this.statusType){case"online":return this.$t("user_status","Online");case"away":case"busy":return this.$t("user_status","Away");case"dnd":return this.$t("user_status","Do not disturb");case"invisible":return this.$t("user_status","Invisible");case"offline":return this.$t("user_status","Offline")}return this.$t("user_status","Set status")},statusIcon(){switch(this.statusType){case"online":return"icon-user-status-online";case"away":case"busy":return"icon-user-status-away";case"dnd":return"icon-user-status-dnd";case"invisible":case"offline":return"icon-user-status-invisible"}return""}},methods:{async changeStatus(t){try{await this.$store.dispatch("setStatus",{statusType:t})}catch(t){(0,r.x2)(this.$t("user_status","There was an error saving the new status")),n.debug(t)}}}}},64039:(t,e,s)=>{"use strict";s.d(e,{n:()=>a});const a=()=>new Date},95248:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var a=s(87537),r=s.n(a),n=s(23645),o=s.n(n)()(r());o.push([t.id,".user-status-menu-item[data-v-754ee57b]{--color-text-maxcontrast: var(--color-text-maxcontrast-background-blur, var(--color-main-text));width:auto;min-width:44px;height:44px;margin:0;border:0;border-radius:var(--border-radius-pill);background-color:var(--color-main-background-blur);font-size:inherit;font-weight:normal;-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur)}.user-status-menu-item[data-v-754ee57b]:active,.user-status-menu-item[data-v-754ee57b]:hover,.user-status-menu-item[data-v-754ee57b]:focus-visible{background-color:var(--color-background-hover)}.user-status-menu-item[data-v-754ee57b]:focus-visible{box-shadow:0 0 0 4px var(--color-main-background) !important;outline:2px solid var(--color-main-text) !important}.user-status-icon[data-v-754ee57b]{width:16px;height:16px;margin-right:10px;opacity:1 !important;background-size:16px;vertical-align:middle !important}","",{version:3,sources:["webpack://./apps/user_status/src/UserStatus.vue"],names:[],mappings:"AACA,wCAEC,+FAAA,CAEA,UAAA,CACA,cAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,uCAAA,CACA,kDAAA,CACA,iBAAA,CACA,kBAAA,CAEA,8CAAA,CACA,sCAAA,CAEA,mJAGC,8CAAA,CAED,sDACC,4DAAA,CACA,mDAAA,CAIF,mCACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,oBAAA,CACA,gCAAA",sourcesContent:["\n.user-status-menu-item {\n\t// Ensure the maxcontrast color is set for the background\n\t--color-text-maxcontrast: var(--color-text-maxcontrast-background-blur, var(--color-main-text));\n\n\twidth: auto;\n\tmin-width: 44px;\n\theight: 44px;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: var(--border-radius-pill);\n\tbackground-color: var(--color-main-background-blur);\n\tfont-size: inherit;\n\tfont-weight: normal;\n\n\t-webkit-backdrop-filter: var(--background-blur);\n\tbackdrop-filter: var(--background-blur);\n\n\t&:active,\n\t&:hover,\n\t&:focus-visible {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\t&:focus-visible {\n\t\tbox-shadow: 0 0 0 4px var(--color-main-background) !important;\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t}\n}\n\n.user-status-icon {\n\twidth: 16px;\n\theight: 16px;\n\tmargin-right: 10px;\n\topacity: 1 !important;\n\tbackground-size: 16px;\n\tvertical-align: middle !important;\n}\n"],sourceRoot:""}]);const u=o},46700:(t,e,s)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=46700}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var s=n[t]={id:t,loaded:!1,exports:{}};return r[t].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=r,e=[],o.O=(t,s,a,r)=>{if(!s){var n=1/0;for(l=0;l<e.length;l++){s=e[l][0],a=e[l][1],r=e[l][2];for(var u=!0,i=0;i<s.length;i++)(!1&r||n>=r)&&Object.keys(o.O).every((t=>o.O[t](s[i])))?s.splice(i--,1):(u=!1,r<n&&(n=r));if(u){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[s,a,r]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,s)=>(o.f[s](t,e),e)),[])),o.u=t=>(8299===t?"user-status-modal":t)+"-"+t+".js?v="+{4720:"3579bbfdda4bbff89d5b",8299:"b337c00a678aeb2a9404",9847:"a7a97acf5197f82da3fe"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s={},a="nextcloud:",o.l=(t,e,r,n)=>{if(s[t])s[t].push(e);else{var u,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==a+r){u=d;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",a+r),u.src=t),s[t]=[e];var m=(e,a)=>{u.onerror=u.onload=null,clearTimeout(p);var r=s[t];if(delete s[t],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((t=>t(a))),e)return e(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),i&&document.head.appendChild(u)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=2613,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&!t;)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={2613:0};o.f.j=(e,s)=>{var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var r=new Promise(((s,r)=>a=t[e]=[s,r]));s.push(a[2]=r);var n=o.p+o.u(e),u=new Error;o.l(n,(s=>{if(o.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,s)=>{var a,r,n=s[0],u=s[1],i=s[2],c=0;if(n.some((e=>0!==t[e]))){for(a in u)o.o(u,a)&&(o.m[a]=u[a]);if(i)var l=i(o)}for(e&&e(s);c<n.length;c++)r=n[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(l)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),o.nc=void 0;var u=o.O(void 0,[7874],(()=>o(43492)));u=o.O(u)})();
//# sourceMappingURL=user_status-menu.js.map?v=ff50f548ab2b23350989
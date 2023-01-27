/*! For license information please see user_status-menu.js.LICENSE.txt */
!function(){var e,n,r,s={46606:function(e,n,r){"use strict";var s=r(20144),a=r(22200),o=r(79753),i=r(16453),u=r(74854),c=r(20296),l=r.n(c),d=r(4820);function m(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}var p=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,o.generateOcsUrl)("apps/user_status/api/v1/heartbeat?format=json"),t.next=3,d.default.put(n,{status:e?"away":"online"});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function o(t){m(a,r,s,o,i,"next",t)}function i(t){m(a,r,s,o,i,"throw",t)}o(void 0)}))});return function(t){return e.apply(this,arguments)}}(),f=r(84387);function v(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}var h=(0,i.loadState)("user_status","profileEnabled",!1).profileEnabled,g={name:"UserStatus",components:{SetStatusModal:function(){return Promise.all([r.e(7874),r.e(8299)]).then(r.bind(r,57207))}},mixins:[f.Z],props:{inline:{type:Boolean,default:!1}},data:function(){return{displayName:(0,a.getCurrentUser)().displayName,heartbeatInterval:null,isAway:!1,isModalOpen:!1,loadingProfilePage:!1,mouseMoveListener:null,profileEnabled:h,setAwayTimeout:null}},computed:{elementTag:function(){return this.inline?"div":"li"},profilePageLink:function(){return this.profileEnabled?(0,o.generateUrl)("/u/{userId}",{userId:(0,a.getCurrentUser)().uid}):null}},mounted:function(){var t=this;(0,u.Ld)("settings:display-name:updated",this.handleDisplayNameUpdate),(0,u.Ld)("settings:profile-enabled:updated",this.handleProfileEnabledUpdate),this.$store.dispatch("loadStatusFromInitialState"),OC.config.session_keepalive&&(this.heartbeatInterval=setInterval(this._backgroundHeartbeat.bind(this),3e5),this.setAwayTimeout=function(){t.isAway=!0},this.mouseMoveListener=l()((function(){var e=t.isAway;t.isAway=!1,clearTimeout(t.setAwayTimeout),setTimeout(t.setAwayTimeout,12e4),e&&t._backgroundHeartbeat()}),2e3,!0),window.addEventListener("mousemove",this.mouseMoveListener,{capture:!0,passive:!0}),this._backgroundHeartbeat()),(0,u.Ld)("user_status:status.updated",this.handleUserStatusUpdated)},beforeDestroy:function(){(0,u.r1)("settings:display-name:updated",this.handleDisplayNameUpdate),(0,u.r1)("settings:profile-enabled:updated",this.handleProfileEnabledUpdate),window.removeEventListener("mouseMove",this.mouseMoveListener),clearInterval(this.heartbeatInterval),(0,u.r1)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{handleDisplayNameUpdate:function(t){this.displayName=t},handleProfileEnabledUpdate:function(t){this.profileEnabled=t},loadProfilePage:function(){this.profileEnabled&&(this.loadingProfilePage=!0)},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1},_backgroundHeartbeat:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e.isAway);case 3:if(null==(n=t.sent)||!n.userId){t.next=8;break}e.$store.dispatch("setStatusFromHeartbeat",n),t.next=10;break;case 8:return t.next=10,e.$store.dispatch("reFetchStatusFromServer");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.debug("Failed sending heartbeat, got: "+(null===(r=t.t0.response)||void 0===r?void 0:r.status));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function o(t){v(a,r,s,o,i,"next",t)}function i(t){v(a,r,s,o,i,"throw",t)}o(void 0)}))})()},handleUserStatusUpdated:function(t){OC.getCurrentUser().uid===t.userId&&this.$store.dispatch("setStatusFromObject",{status:t.status,icon:t.icon,message:t.message})}}},A=g,b=r(93379),j=r.n(b),y=r(7795),C=r.n(y),w=r(90569),x=r.n(w),_=r(3565),k=r.n(_),S=r(19216),P=r.n(S),O=r(44589),I=r.n(O),U=r(92041),D={};D.styleTagTransform=I(),D.setAttributes=k(),D.insert=x().bind(null,"head"),D.domAPI=C(),D.insertStyleElement=P(),j()(U.Z,D),U.Z&&U.Z.locals&&U.Z.locals;var M=(0,r(51900).Z)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.elementTag,{tag:"component"},[n("div",{staticClass:"user-status-menu-item"},[t.inline?t._e():n("a",{staticClass:"user-status-menu-item__header",attrs:{href:t.profilePageLink},on:{click:t.loadProfilePage}},[n("div",{staticClass:"user-status-menu-item__header-content"},[n("div",{staticClass:"user-status-menu-item__header-content-displayname"},[t._v(t._s(t.displayName))]),t._v(" "),t.loadingProfilePage?n("div",{staticClass:"icon-loading-small"}):n("div",{staticClass:"user-status-menu-item__header-content-placeholder"})]),t._v(" "),t.profileEnabled?n("div",[t._v("\n\t\t\t\t"+t._s(t.t("user_status","View profile"))+"\n\t\t\t")]):t._e()]),t._v(" "),n(t.inline?"button":"a",{tag:"toggle",staticClass:"user-status-menu-item__toggle",class:{"user-status-menu-item__toggle--inline":t.inline},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openModal.apply(null,arguments)}}},[n("span",{staticClass:"user-status-menu-item__toggle-icon",class:t.statusIcon}),t._v("\n\t\t\t"+t._s(t.visibleMessage)+"\n\t\t")])],1),t._v(" "),t.isModalOpen?n("SetStatusModal",{on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"4d14b4f8",null),E=M.exports,R=r(20629);function T(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}var z=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,o.generateOcsUrl)("apps/user_status/api/v1/predefined_statuses?format=json"),t.next=3,d.default.get(e);case 3:return n=t.sent,t.abrupt("return",n.data.ocs.data);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function o(t){T(a,r,s,o,i,"next",t)}function i(t){T(a,r,s,o,i,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();function B(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){i=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}var L={loadAllPredefinedStatuses:function(t){return(e=regeneratorRuntime.mark((function e(){var n,r,s,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,r=t.commit,!(n.predefinedStatuses.length>0)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,z();case 5:s=e.sent,a=B(s);try{for(a.s();!(o=a.n()).done;)i=o.value,r("addPredefinedStatus",i)}catch(t){a.e(t)}finally{a.f()}case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function o(t){$(a,r,s,o,i,"next",t)}function i(t){$(a,r,s,o,i,"throw",t)}o(void 0)}))})();var e}},N={state:{predefinedStatuses:[]},mutations:{addPredefinedStatus:function(t,e){t.predefinedStatuses.push(e)}},getters:{},actions:L};function Z(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}function q(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function o(t){Z(a,r,s,o,i,"next",t)}function i(t){Z(a,r,s,o,i,"throw",t)}o(void 0)}))}}var H=function(){var t=q(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status"),t.next=3,d.default.get(e);case 3:return n=t.sent,t.abrupt("return",n.data.ocs.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=q(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/status"),t.next=3,d.default.put(n,{statusType:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=q(regeneratorRuntime.mark((function t(e){var n,r,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:null,r=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/message/predefined?format=json"),t.next=4,d.default.put(r,{messageId:e,clearAt:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=q(regeneratorRuntime.mark((function t(e){var n,r,s,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,r=a.length>2&&void 0!==a[2]?a[2]:null,s=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/message/custom?format=json"),t.next=5,d.default.put(s,{message:e,statusIcon:n,clearAt:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=q(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,o.generateOcsUrl)("apps/user_status/api/v1/user_status/message?format=json"),t.next=3,d.default.delete(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),K=r(64039),V=r(80351),X=r.n(V),Y=function(t){if(null===t)return null;var e=(0,K.n)();if("period"===t.type)return e.setSeconds(e.getSeconds()+t.time),Math.floor(e.getTime()/1e3);if("end-of"===t.type)switch(t.time){case"day":case"week":return Number(X()(e).endOf(t.time).format("X"))}return"_time"===t.type?t.time:null};function tt(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}function et(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function o(t){tt(a,r,s,o,i,"next",t)}function i(t){tt(a,r,s,o,i,"throw",t)}o(void 0)}))}}var nt={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{setStatus:function(t,e){var n=e.statusType;t.status=n,t.statusIsUserDefined=!0},setPredefinedMessage:function(t,e){var n=e.messageId,r=e.clearAt,s=e.message,a=e.icon;t.messageId=n,t.messageIsPredefined=!0,t.message=s,t.icon=a,t.clearAt=r},setCustomMessage:function(t,e){var n=e.message,r=e.icon,s=e.clearAt;t.messageId=null,t.messageIsPredefined=!1,t.message=n,t.icon=r,t.clearAt=s},clearMessage:function(t){t.messageId=null,t.messageIsPredefined=!1,t.message=null,t.icon=null,t.clearAt=null},loadStatusFromServer:function(t,e){var n=e.status,r=e.statusIsUserDefined,s=e.message,a=e.icon,o=e.clearAt,i=e.messageIsPredefined,u=e.messageId;t.status=n,t.message=s,t.icon=a,void 0!==r&&(t.statusIsUserDefined=r),void 0!==o&&(t.clearAt=o),void 0!==i&&(t.messageIsPredefined=i),void 0!==u&&(t.messageId=u)}},getters:{},actions:{setStatus:function(t,e){return et(regeneratorRuntime.mark((function n(){var r,s,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.commit,o=t.state,i=e.statusType,n.next=4,G(i);case 4:s("setStatus",{statusType:i}),(0,u.j8)("user_status:status.updated",{status:o.status,message:o.message,icon:o.icon,clearAt:o.clearAt,userId:null===(r=(0,a.getCurrentUser)())||void 0===r?void 0:r.uid});case 6:case"end":return n.stop()}}),n)})))()},setStatusFromObject:function(t,e){return et(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.commit,t.state,r("loadStatusFromServer",e);case 2:case"end":return n.stop()}}),n)})))()},setPredefinedMessage:function(t,e){return et(regeneratorRuntime.mark((function n(){var r,s,o,i,c,l,d,m,p,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.commit,o=t.rootState,i=t.state,c=e.messageId,l=e.clearAt,d=Y(l),n.next=5,Q(c,d);case 5:m=o.predefinedStatuses.predefinedStatuses.find((function(t){return t.id===c})),p=m.message,f=m.icon,s("setPredefinedMessage",{messageId:c,clearAt:d,message:p,icon:f}),(0,u.j8)("user_status:status.updated",{status:i.status,message:i.message,icon:i.icon,clearAt:i.clearAt,userId:null===(r=(0,a.getCurrentUser)())||void 0===r?void 0:r.uid});case 9:case"end":return n.stop()}}),n)})))()},setCustomMessage:function(t,e){return et(regeneratorRuntime.mark((function n(){var r,s,o,i,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.commit,o=t.state,i=e.message,c=e.icon,l=e.clearAt,d=Y(l),n.next=5,W(i,c,d);case 5:s("setCustomMessage",{message:i,icon:c,clearAt:d}),(0,u.j8)("user_status:status.updated",{status:o.status,message:o.message,icon:o.icon,clearAt:o.clearAt,userId:null===(r=(0,a.getCurrentUser)())||void 0===r?void 0:r.uid});case 7:case"end":return n.stop()}}),n)})))()},clearMessage:function(t){return et(regeneratorRuntime.mark((function e(){var n,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,s=t.state,e.next=3,J();case 3:r("clearMessage"),(0,u.j8)("user_status:status.updated",{status:s.status,message:s.message,icon:s.icon,clearAt:s.clearAt,userId:null===(n=(0,a.getCurrentUser)())||void 0===n?void 0:n.uid});case 5:case"end":return e.stop()}}),e)})))()},reFetchStatusFromServer:function(t){return et(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,H();case 3:r=e.sent,n("loadStatusFromServer",r);case 5:case"end":return e.stop()}}),e)})))()},setStatusFromHeartbeat:function(t,e){return et(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,t.commit)("loadStatusFromServer",e);case 2:case"end":return n.stop()}}),n)})))()},loadStatusFromInitialState:function(t){(0,t.commit)("loadStatusFromServer",(0,i.loadState)("user_status","status"))}}};s.ZP.use(R.ZP);var rt=new R.yh({modules:{predefinedStatuses:N,userStatus:nt},strict:!0}),st=r(75925),at=r.n(st);r.nc=btoa((0,a.getRequestToken)()),s.ZP.prototype.t=t,s.ZP.prototype.$t=t;var ot=document.getElementById("avatardiv-menu"),it=(0,i.loadState)("user_status","status"),ut={preloadedUserStatus:{message:it.message,icon:it.icon,status:it.status},user:ot.dataset.user,displayName:ot.dataset.displayname,disableMenu:!0,disableTooltip:!0};new(s.ZP.extend(at()))({propsData:ut}).$mount("#avatardiv-menu"),new s.ZP({el:'li[data-id="user_status-menuitem"]',name:"UserStatusRoot",render:function(t){return t(E)},store:rt}),document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("status",(function(t){return new(s.ZP.extend(E))({propsData:{inline:!0},store:rt}).$mount(t)}))}))},84387:function(t,e,n){"use strict";var r=n(20629),s=n(26932);function a(t,e,n,r,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,s)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.Z={computed:i(i({},(0,r.rn)({statusType:function(t){return t.userStatus.status},statusIsUserDefined:function(t){return t.userStatus.statusIsUserDefined},customIcon:function(t){return t.userStatus.icon},customMessage:function(t){return t.userStatus.message}})),{},{visibleMessage:function(){if(this.customIcon&&this.customMessage)return"".concat(this.customIcon," ").concat(this.customMessage);if(this.customMessage)return this.customMessage;if(this.statusIsUserDefined)switch(this.statusType){case"online":return this.$t("user_status","Online");case"away":return this.$t("user_status","Away");case"dnd":return this.$t("user_status","Do not disturb");case"invisible":return this.$t("user_status","Invisible");case"offline":return this.$t("user_status","Offline")}return this.$t("user_status","Set status")},statusIcon:function(){switch(this.statusType){case"online":return"icon-user-status-online";case"away":return"icon-user-status-away";case"dnd":return"icon-user-status-dnd";case"invisible":case"offline":return"icon-user-status-invisible"}return""}}),methods:{changeStatus:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$store.dispatch("setStatus",{statusType:t});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),(0,s.x2)(n.$t("user_status","There was an error saving the new status")),console.debug(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function i(t){a(o,r,s,i,u,"next",t)}function u(t){a(o,r,s,i,u,"throw",t)}i(void 0)}))})()}}}},64039:function(t,e,n){"use strict";n.d(e,{n:function(){return r}});var r=function(){return new Date}},92041:function(t,e,n){"use strict";var r=n(87537),s=n.n(r),a=n(23645),o=n.n(a)()(s());o.push([t.id,".user-status-menu-item__header[data-v-4d14b4f8]{display:flex !important;flex-direction:column !important;width:auto !important;height:66px !important;padding:10px 12px 5px 12px !important;align-items:flex-start !important;color:var(--color-main-text) !important}.user-status-menu-item__header[data-v-4d14b4f8]:focus-visible{padding:6px 8px 1px 8px !important;margin:2px !important}.user-status-menu-item__header[data-v-4d14b4f8]:not([href]){height:var(--header-menu-item-height) !important;color:var(--color-text-maxcontrast) !important;cursor:default !important}.user-status-menu-item__header:not([href]) *[data-v-4d14b4f8]{cursor:default !important}.user-status-menu-item__header[data-v-4d14b4f8]:not([href]):hover{background-color:rgba(0,0,0,0) !important}.user-status-menu-item__header-content[data-v-4d14b4f8]{display:inline-flex !important;font-weight:bold !important;gap:0 10px !important;width:auto}.user-status-menu-item__header-content-displayname[data-v-4d14b4f8]{width:auto}.user-status-menu-item__header-content-placeholder[data-v-4d14b4f8]{width:16px !important;height:24px !important;margin-right:10px !important;visibility:hidden !important}.user-status-menu-item__header span[data-v-4d14b4f8]{color:var(--color-text-maxcontrast) !important}.user-status-menu-item__toggle-icon[data-v-4d14b4f8]{width:16px;height:16px;margin-right:10px;opacity:1 !important;background-size:16px;vertical-align:middle !important}.user-status-menu-item__toggle--inline[data-v-4d14b4f8]{width:auto;min-width:44px;height:44px;margin:0;border:0;border-radius:var(--border-radius-pill);background-color:var(--color-main-background-blur);font-size:inherit;font-weight:normal;-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur)}.user-status-menu-item__toggle--inline[data-v-4d14b4f8]:active,.user-status-menu-item__toggle--inline[data-v-4d14b4f8]:hover,.user-status-menu-item__toggle--inline[data-v-4d14b4f8]:focus{background-color:var(--color-background-hover)}.user-status-menu-item__toggle--inline[data-v-4d14b4f8]:focus{box-shadow:0 0 0 2px var(--color-main-text) !important}li[data-v-4d14b4f8]{list-style-type:none}","",{version:3,sources:["webpack://./apps/user_status/src/UserStatus.vue"],names:[],mappings:"AAmOC,gDACC,uBAAA,CACA,gCAAA,CACA,qBAAA,CACA,sBAAA,CACA,qCAAA,CACA,iCAAA,CACA,uCAAA,CAEA,8DACC,kCAAA,CACA,qBAAA,CAGD,4DACC,gDAAA,CACA,8CAAA,CACA,yBAAA,CAEA,8DACC,yBAAA,CAGD,kEACC,yCAAA,CAIF,wDACC,8BAAA,CACA,2BAAA,CACA,qBAAA,CACA,UAAA,CAEA,oEACC,UAAA,CAGD,oEACC,qBAAA,CACA,sBAAA,CACA,4BAAA,CACA,4BAAA,CAIF,qDACC,8CAAA,CAKD,qDACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,oBAAA,CACA,gCAAA,CAID,wDACC,UAAA,CACA,cAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,uCAAA,CACA,kDAAA,CACA,iBAAA,CACA,kBAAA,CAEA,8CAAA,CACA,sCAAA,CAEA,2LAGC,8CAAA,CAED,8DACC,sDAAA,CAMJ,oBACC,oBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.user-status-menu-item {\n\t&__header {\n\t\tdisplay: flex !important;\n\t\tflex-direction: column !important;\n\t\twidth: auto !important;\n\t\theight: 44px * 1.5 !important;\n\t\tpadding: 10px 12px 5px 12px !important;\n\t\talign-items: flex-start !important;\n\t\tcolor: var(--color-main-text) !important;\n\n\t\t&:focus-visible {\n\t\t\tpadding: 6px 8px 1px 8px !important;\n\t\t\tmargin: 2px !important;\n\t\t}\n\n\t\t&:not([href]) {\n\t\t\theight: var(--header-menu-item-height) !important;\n\t\t\tcolor: var(--color-text-maxcontrast) !important;\n\t\t\tcursor: default !important;\n\n\t\t\t& * {\n\t\t\t\tcursor: default !important;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: transparent !important;\n\t\t\t}\n\t\t}\n\n\t\t&-content {\n\t\t\tdisplay: inline-flex !important;\n\t\t\tfont-weight: bold !important;\n\t\t\tgap: 0 10px !important;\n\t\t\twidth: auto;\n\n\t\t\t&-displayname {\n\t\t\t\twidth: auto;\n\t\t\t}\n\n\t\t\t&-placeholder {\n\t\t\t\twidth: 16px !important;\n\t\t\t\theight: 24px !important;\n\t\t\t\tmargin-right: 10px !important;\n\t\t\t\tvisibility: hidden !important;\n\t\t\t}\n\t\t}\n\n\t\tspan {\n\t\t\tcolor: var(--color-text-maxcontrast) !important;\n\t\t}\n\t}\n\n\t&__toggle {\n\t\t&-icon {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tmargin-right: 10px;\n\t\t\topacity: 1 !important;\n\t\t\tbackground-size: 16px;\n\t\t\tvertical-align: middle !important;\n\t\t}\n\n\t\t// In dashboard\n\t\t&--inline {\n\t\t\twidth: auto;\n\t\t\tmin-width: 44px;\n\t\t\theight: 44px;\n\t\t\tmargin: 0;\n\t\t\tborder: 0;\n\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\tbackground-color: var(--color-main-background-blur);\n\t\t\tfont-size: inherit;\n\t\t\tfont-weight: normal;\n\n\t\t\t-webkit-backdrop-filter: var(--background-blur);\n\t\t\tbackdrop-filter: var(--background-blur);\n\n\t\t\t&:active,\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\tbackground-color: var(--color-background-hover);\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-main-text) !important;\n\t\t\t}\n\t\t}\n\t}\n}\n\nli {\n\tlist-style-type: none;\n}\n\n"],sourceRoot:""}]),e.Z=o},46700:function(t,e,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id=46700},83766:function(){}},a={};function o(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,loaded:!1,exports:{}};return s[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=s,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=function(t,n,r,s){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],s=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&s||a>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[u])}))?n.splice(u--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,r,s]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))},o.u=function(t){return"user-status-modal-"+t+".js?v=904226c0264c3cc57d61"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n={},r="nextcloud:",o.l=function(t,e,s,a){if(n[t])n[t].push(e);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+s){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",r+s),i.src=t),n[t]=[e];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var s=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},o.j=2613,function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){o.b=document.baseURI||self.location.href;var t={2613:0};o.f.j=function(e,n){var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(n,s){r=t[e]=[n,s]}));n.push(r[2]=s);var a=o.p+o.u(e),i=new Error;o.l(a,(function(n){if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}}),"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,a=n[0],i=n[1],u=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(u)var l=u(o)}for(e&&e(n);c<a.length;c++)s=a[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.nc=void 0;var i=o.O(void 0,[7874],(function(){return o(46606)}));i=o.O(i)}();
//# sourceMappingURL=user_status-menu.js.map?v=e26f749e5b69face442d
/*! For license information please see user_status-menu.js.LICENSE.txt */
!function(){var e,r,n,s={43593:function(e,r,n){"use strict";var s=n(20144),a=n(45994),o=n(78595),i=n(79753),u=n(79954),c=n(20296),l=n.n(c),d=n(4820);function m(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}var f=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,i.generateOcsUrl)("apps/user_status/api/v1/heartbeat?format=json"),t.next=3,d.default.put(r,{status:e?"away":"online"});case 3:return n=t.sent,t.abrupt("return",n.data.ocs.data);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,s){var a=t.apply(e,r);function o(t){m(a,n,s,o,i,"next",t)}function i(t){m(a,n,s,o,i,"throw",t)}o(void 0)}))});return function(t){return e.apply(this,arguments)}}(),p=n(84387),v=n(25108);function h(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}var g=(0,u.j)("user_status","profileEnabled",!1).profileEnabled,A={name:"UserStatus",components:{SetStatusModal:function(){return Promise.all([n.e(7874),n.e(8299)]).then(n.bind(n,38165))}},mixins:[p.Z],props:{inline:{type:Boolean,default:!1}},data:function(){return{displayName:(0,a.ts)().displayName,heartbeatInterval:null,isAway:!1,isModalOpen:!1,loadingProfilePage:!1,mouseMoveListener:null,profileEnabled:g,setAwayTimeout:null}},computed:{elementTag:function(){return this.inline?"div":"li"},profilePageLink:function(){return this.profileEnabled?(0,i.generateUrl)("/u/{userId}",{userId:(0,a.ts)().uid}):null}},mounted:function(){var t=this;(0,o.Ld)("settings:display-name:updated",this.handleDisplayNameUpdate),(0,o.Ld)("settings:profile-enabled:updated",this.handleProfileEnabledUpdate),this.$store.dispatch("loadStatusFromInitialState"),OC.config.session_keepalive&&(this.heartbeatInterval=setInterval(this._backgroundHeartbeat.bind(this),3e5),this.setAwayTimeout=function(){t.isAway=!0},this.mouseMoveListener=l()((function(){var e=t.isAway;t.isAway=!1,clearTimeout(t.setAwayTimeout),setTimeout(t.setAwayTimeout,12e4),e&&t._backgroundHeartbeat()}),2e3,!0),window.addEventListener("mousemove",this.mouseMoveListener,{capture:!0,passive:!0}),this._backgroundHeartbeat()),(0,o.Ld)("user_status:status.updated",this.handleUserStatusUpdated)},beforeDestroy:function(){(0,o.r1)("settings:display-name:updated",this.handleDisplayNameUpdate),(0,o.r1)("settings:profile-enabled:updated",this.handleProfileEnabledUpdate),window.removeEventListener("mouseMove",this.mouseMoveListener),clearInterval(this.heartbeatInterval),(0,o.r1)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{handleDisplayNameUpdate:function(t){this.displayName=t},handleProfileEnabledUpdate:function(t){this.profileEnabled=t},loadProfilePage:function(){this.profileEnabled&&(this.loadingProfilePage=!0)},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1},_backgroundHeartbeat:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e.isAway);case 3:if(null==(r=t.sent)||!r.userId){t.next=8;break}e.$store.dispatch("setStatusFromHeartbeat",r),t.next=10;break;case 8:return t.next=10,e.$store.dispatch("reFetchStatusFromServer");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),v.debug("Failed sending heartbeat, got: "+(null===(n=t.t0.response)||void 0===n?void 0:n.status));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var e=this,r=arguments;return new Promise((function(n,s){var a=t.apply(e,r);function o(t){h(a,n,s,o,i,"next",t)}function i(t){h(a,n,s,o,i,"throw",t)}o(void 0)}))})()},handleUserStatusUpdated:function(t){OC.getCurrentUser().uid===t.userId&&this.$store.dispatch("setStatusFromObject",{status:t.status,icon:t.icon,message:t.message})}}},b=A,j=n(93379),y=n.n(j),w=n(7795),C=n.n(w),x=n(90569),_=n.n(x),k=n(3565),S=n.n(k),P=n(19216),O=n.n(P),I=n(44589),D=n.n(I),E=n(97548),M={};M.styleTagTransform=D(),M.setAttributes=S(),M.insert=_().bind(null,"head"),M.domAPI=C(),M.insertStyleElement=O(),y()(E.Z,M),E.Z&&E.Z.locals&&E.Z.locals;var U=(0,n(51900).Z)(b,(function(){var t=this,e=t._self._c;return e(t.elementTag,{tag:"component"},[e("div",{staticClass:"user-status-menu-item"},[t.inline?t._e():e("a",{staticClass:"user-status-menu-item__header",attrs:{href:t.profilePageLink},on:{click:function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.loadProfilePage.apply(null,arguments)}}},[e("div",{staticClass:"user-status-menu-item__header-content"},[e("div",{staticClass:"user-status-menu-item__header-content-displayname"},[t._v(t._s(t.displayName))]),t._v(" "),t.loadingProfilePage?e("div",{staticClass:"icon-loading-small"}):e("div",{staticClass:"user-status-menu-item__header-content-placeholder"})]),t._v(" "),t.profileEnabled?e("div",[t._v("\n\t\t\t\t"+t._s(t.t("user_status","View profile"))+"\n\t\t\t")]):t._e()]),t._v(" "),e(t.inline?"button":"a",{tag:"toggle",staticClass:"user-status-menu-item__toggle",class:{"user-status-menu-item__toggle--inline":t.inline},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openModal.apply(null,arguments)}}},[e("span",{staticClass:"user-status-menu-item__toggle-icon",class:t.statusIcon}),t._v("\n\t\t\t"+t._s(t.visibleMessage)+"\n\t\t")])],1),t._v(" "),t.isModalOpen?e("SetStatusModal",{on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"2b6b0ebc",null),R=U.exports,T=n(20629);function z(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}var B=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,i.generateOcsUrl)("apps/user_status/api/v1/predefined_statuses?format=json"),t.next=3,d.default.get(e);case 3:return r=t.sent,t.abrupt("return",r.data.ocs.data);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,s){var a=t.apply(e,r);function o(t){z(a,n,s,o,i,"next",t)}function i(t){z(a,n,s,o,i,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();function F(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){i=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function $(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}var N={loadAllPredefinedStatuses:function(t){return(e=regeneratorRuntime.mark((function e(){var r,n,s,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.state,n=t.commit,!(r.predefinedStatuses.length>0)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,B();case 5:s=e.sent,a=F(s);try{for(a.s();!(o=a.n()).done;)i=o.value,n("addPredefinedStatus",i)}catch(t){a.e(t)}finally{a.f()}case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(t){$(a,n,s,o,i,"next",t)}function i(t){$(a,n,s,o,i,"throw",t)}o(void 0)}))})();var e}},Z={state:{predefinedStatuses:[]},mutations:{addPredefinedStatus:function(t,e){t.predefinedStatuses.push(e)}},getters:{},actions:N};function q(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}function H(t){return function(){var e=this,r=arguments;return new Promise((function(n,s){var a=t.apply(e,r);function o(t){q(a,n,s,o,i,"next",t)}function i(t){q(a,n,s,o,i,"throw",t)}o(void 0)}))}}var K=function(){var t=H(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,i.generateOcsUrl)("apps/user_status/api/v1/user_status"),t.next=3,d.default.get(e);case 3:return r=t.sent,t.abrupt("return",r.data.ocs.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=H(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,i.generateOcsUrl)("apps/user_status/api/v1/user_status/status"),t.next=3,d.default.put(r,{statusType:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=H(regeneratorRuntime.mark((function t(e){var r,n,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:null,n=(0,i.generateOcsUrl)("apps/user_status/api/v1/user_status/message/predefined?format=json"),t.next=4,d.default.put(n,{messageId:e,clearAt:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=H(regeneratorRuntime.mark((function t(e){var r,n,s,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:null,n=a.length>2&&void 0!==a[2]?a[2]:null,s=(0,i.generateOcsUrl)("apps/user_status/api/v1/user_status/message/custom?format=json"),t.next=5,d.default.put(s,{message:e,statusIcon:r,clearAt:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=H(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,i.generateOcsUrl)("apps/user_status/api/v1/user_status/message?format=json"),t.next=3,d.default.delete(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=n(64039),X=n(80351),Y=n.n(X),tt=function(t){if(null===t)return null;var e=(0,V.n)();if("period"===t.type)return e.setSeconds(e.getSeconds()+t.time),Math.floor(e.getTime()/1e3);if("end-of"===t.type)switch(t.time){case"day":case"week":return Number(Y()(e).endOf(t.time).format("X"))}return"_time"===t.type?t.time:null};function et(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}function rt(t){return function(){var e=this,r=arguments;return new Promise((function(n,s){var a=t.apply(e,r);function o(t){et(a,n,s,o,i,"next",t)}function i(t){et(a,n,s,o,i,"throw",t)}o(void 0)}))}}var nt={state:{status:null,statusIsUserDefined:null,message:null,icon:null,clearAt:null,messageIsPredefined:null,messageId:null},mutations:{setStatus:function(t,e){var r=e.statusType;t.status=r,t.statusIsUserDefined=!0},setPredefinedMessage:function(t,e){var r=e.messageId,n=e.clearAt,s=e.message,a=e.icon;t.messageId=r,t.messageIsPredefined=!0,t.message=s,t.icon=a,t.clearAt=n},setCustomMessage:function(t,e){var r=e.message,n=e.icon,s=e.clearAt;t.messageId=null,t.messageIsPredefined=!1,t.message=r,t.icon=n,t.clearAt=s},clearMessage:function(t){t.messageId=null,t.messageIsPredefined=!1,t.message=null,t.icon=null,t.clearAt=null},loadStatusFromServer:function(t,e){var r=e.status,n=e.statusIsUserDefined,s=e.message,a=e.icon,o=e.clearAt,i=e.messageIsPredefined,u=e.messageId;t.status=r,t.message=s,t.icon=a,void 0!==n&&(t.statusIsUserDefined=n),void 0!==o&&(t.clearAt=o),void 0!==i&&(t.messageIsPredefined=i),void 0!==u&&(t.messageId=u)}},getters:{},actions:{setStatus:function(t,e){return rt(regeneratorRuntime.mark((function r(){var n,s,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.commit,i=t.state,u=e.statusType,r.next=4,G(u);case 4:s("setStatus",{statusType:u}),(0,o.j8)("user_status:status.updated",{status:i.status,message:i.message,icon:i.icon,clearAt:i.clearAt,userId:null===(n=(0,a.ts)())||void 0===n?void 0:n.uid});case 6:case"end":return r.stop()}}),r)})))()},setStatusFromObject:function(t,e){return rt(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,t.state,n("loadStatusFromServer",e);case 2:case"end":return r.stop()}}),r)})))()},setPredefinedMessage:function(t,e){return rt(regeneratorRuntime.mark((function r(){var n,s,i,u,c,l,d,m,f,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.commit,i=t.rootState,u=t.state,c=e.messageId,l=e.clearAt,d=tt(l),r.next=5,Q(c,d);case 5:m=i.predefinedStatuses.predefinedStatuses.find((function(t){return t.id===c})),f=m.message,p=m.icon,s("setPredefinedMessage",{messageId:c,clearAt:d,message:f,icon:p}),(0,o.j8)("user_status:status.updated",{status:u.status,message:u.message,icon:u.icon,clearAt:u.clearAt,userId:null===(n=(0,a.ts)())||void 0===n?void 0:n.uid});case 9:case"end":return r.stop()}}),r)})))()},setCustomMessage:function(t,e){return rt(regeneratorRuntime.mark((function r(){var n,s,i,u,c,l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.commit,i=t.state,u=e.message,c=e.icon,l=e.clearAt,d=tt(l),r.next=5,W(u,c,d);case 5:s("setCustomMessage",{message:u,icon:c,clearAt:d}),(0,o.j8)("user_status:status.updated",{status:i.status,message:i.message,icon:i.icon,clearAt:i.clearAt,userId:null===(n=(0,a.ts)())||void 0===n?void 0:n.uid});case 7:case"end":return r.stop()}}),r)})))()},clearMessage:function(t){return rt(regeneratorRuntime.mark((function e(){var r,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,s=t.state,e.next=3,J();case 3:n("clearMessage"),(0,o.j8)("user_status:status.updated",{status:s.status,message:s.message,icon:s.icon,clearAt:s.clearAt,userId:null===(r=(0,a.ts)())||void 0===r?void 0:r.uid});case 5:case"end":return e.stop()}}),e)})))()},reFetchStatusFromServer:function(t){return rt(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,K();case 3:n=e.sent,r("loadStatusFromServer",n);case 5:case"end":return e.stop()}}),e)})))()},setStatusFromHeartbeat:function(t,e){return rt(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(0,t.commit)("loadStatusFromServer",e);case 2:case"end":return r.stop()}}),r)})))()},loadStatusFromInitialState:function(t){(0,t.commit)("loadStatusFromServer",(0,u.j)("user_status","status"))}}};s.ZP.use(T.ZP);var st=new T.yh({modules:{predefinedStatuses:Z,userStatus:nt},strict:!0});n.nc=btoa((0,a.IH)()),s.ZP.prototype.t=t,s.ZP.prototype.$t=t;var at=function(){var t=document.getElementById("user_status-menu-entry");new s.ZP({el:t,render:function(t){return t(R)},store:st})};document.getElementById("user_status-menu-entry")?at():(0,o.Ld)("core:user-menu:mounted",at),document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("status",(function(t){return new(s.ZP.extend(R))({propsData:{inline:!0},store:st}).$mount(t)}))}))},84387:function(t,e,r){"use strict";var n=r(20629),s=r(64024),a=r(25108);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e,r,n,s,a,o){try{var i=t[a](o),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,s)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e);if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.Z={computed:c(c({},(0,n.rn)({statusType:function(t){return t.userStatus.status},statusIsUserDefined:function(t){return t.userStatus.statusIsUserDefined},customIcon:function(t){return t.userStatus.icon},customMessage:function(t){return t.userStatus.message}})),{},{visibleMessage:function(){if(this.customIcon&&this.customMessage)return"".concat(this.customIcon," ").concat(this.customMessage);if(this.customMessage)return this.customMessage;if(this.statusIsUserDefined)switch(this.statusType){case"online":return this.$t("user_status","Online");case"away":return this.$t("user_status","Away");case"dnd":return this.$t("user_status","Do not disturb");case"invisible":return this.$t("user_status","Invisible");case"offline":return this.$t("user_status","Offline")}return this.$t("user_status","Set status")},statusIcon:function(){switch(this.statusType){case"online":return"icon-user-status-online";case"away":return"icon-user-status-away";case"dnd":return"icon-user-status-dnd";case"invisible":case"offline":return"icon-user-status-invisible"}return""}}),methods:{changeStatus:function(t){var e,r=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.$store.dispatch("setStatus",{statusType:t});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),(0,s.x2)(r.$t("user_status","There was an error saving the new status")),a.debug(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function o(t){i(a,n,s,o,u,"next",t)}function u(t){i(a,n,s,o,u,"throw",t)}o(void 0)}))})()}}}},64039:function(t,e,r){"use strict";r.d(e,{n:function(){return n}});var n=function(){return new Date}},97548:function(t,e,r){"use strict";var n=r(87537),s=r.n(n),a=r(23645),o=r.n(a)()(s());o.push([t.id,".user-status-menu-item__header[data-v-2b6b0ebc]{display:flex !important;flex-direction:column !important;width:auto !important;height:66px !important;padding:10px 12px 5px 12px !important;align-items:flex-start !important;color:var(--color-main-text) !important}.user-status-menu-item__header[data-v-2b6b0ebc]:not([href]){height:var(--header-menu-item-height) !important;color:var(--color-text-maxcontrast) !important;cursor:default !important}.user-status-menu-item__header:not([href]) *[data-v-2b6b0ebc]{cursor:default !important}.user-status-menu-item__header[data-v-2b6b0ebc]:not([href]):hover{background-color:rgba(0,0,0,0) !important}.user-status-menu-item__header-content[data-v-2b6b0ebc]{display:inline-flex !important;font-weight:bold !important;gap:0 10px !important;width:auto}.user-status-menu-item__header-content-displayname[data-v-2b6b0ebc]{width:auto}.user-status-menu-item__header-content-placeholder[data-v-2b6b0ebc]{width:16px !important;height:24px !important;margin-right:10px !important;visibility:hidden !important}.user-status-menu-item__header span[data-v-2b6b0ebc]{color:var(--color-text-maxcontrast) !important}.user-status-menu-item__toggle-icon[data-v-2b6b0ebc]{width:16px;height:16px;margin-right:10px;opacity:1 !important;background-size:16px;vertical-align:middle !important}.user-status-menu-item__toggle--inline[data-v-2b6b0ebc]{width:auto;min-width:44px;height:44px;margin:0;border:0;border-radius:var(--border-radius-pill);background-color:var(--color-main-background-blur);font-size:inherit;font-weight:normal;-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur)}.user-status-menu-item__toggle--inline[data-v-2b6b0ebc]:active,.user-status-menu-item__toggle--inline[data-v-2b6b0ebc]:hover,.user-status-menu-item__toggle--inline[data-v-2b6b0ebc]:focus{background-color:var(--color-background-hover)}.user-status-menu-item__toggle--inline[data-v-2b6b0ebc]:focus{box-shadow:0 0 0 2px var(--color-main-text) !important}li[data-v-2b6b0ebc]{list-style-type:none}","",{version:3,sources:["webpack://./apps/user_status/src/UserStatus.vue"],names:[],mappings:"AAEC,gDACC,uBAAA,CACA,gCAAA,CACA,qBAAA,CACA,sBAAA,CACA,qCAAA,CACA,iCAAA,CACA,uCAAA,CAEA,4DACC,gDAAA,CACA,8CAAA,CACA,yBAAA,CAEA,8DACC,yBAAA,CAGD,kEACC,yCAAA,CAIF,wDACC,8BAAA,CACA,2BAAA,CACA,qBAAA,CACA,UAAA,CAEA,oEACC,UAAA,CAGD,oEACC,qBAAA,CACA,sBAAA,CACA,4BAAA,CACA,4BAAA,CAIF,qDACC,8CAAA,CAKD,qDACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,oBAAA,CACA,oBAAA,CACA,gCAAA,CAID,wDACC,UAAA,CACA,cAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,uCAAA,CACA,kDAAA,CACA,iBAAA,CACA,kBAAA,CAEA,8CAAA,CACA,sCAAA,CAEA,2LAGC,8CAAA,CAED,8DACC,sDAAA,CAMJ,oBACC,oBAAA",sourcesContent:["\r\n.user-status-menu-item {\r\n\t&__header {\r\n\t\tdisplay: flex !important;\r\n\t\tflex-direction: column !important;\r\n\t\twidth: auto !important;\r\n\t\theight: 44px * 1.5 !important;\r\n\t\tpadding: 10px 12px 5px 12px !important;\r\n\t\talign-items: flex-start !important;\r\n\t\tcolor: var(--color-main-text) !important;\r\n\r\n\t\t&:not([href]) {\r\n\t\t\theight: var(--header-menu-item-height) !important;\r\n\t\t\tcolor: var(--color-text-maxcontrast) !important;\r\n\t\t\tcursor: default !important;\r\n\r\n\t\t\t& * {\r\n\t\t\t\tcursor: default !important;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: transparent !important;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-content {\r\n\t\t\tdisplay: inline-flex !important;\r\n\t\t\tfont-weight: bold !important;\r\n\t\t\tgap: 0 10px !important;\r\n\t\t\twidth: auto;\r\n\r\n\t\t\t&-displayname {\r\n\t\t\t\twidth: auto;\r\n\t\t\t}\r\n\r\n\t\t\t&-placeholder {\r\n\t\t\t\twidth: 16px !important;\r\n\t\t\t\theight: 24px !important;\r\n\t\t\t\tmargin-right: 10px !important;\r\n\t\t\t\tvisibility: hidden !important;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tspan {\r\n\t\t\tcolor: var(--color-text-maxcontrast) !important;\r\n\t\t}\r\n\t}\r\n\r\n\t&__toggle {\r\n\t\t&-icon {\r\n\t\t\twidth: 16px;\r\n\t\t\theight: 16px;\r\n\t\t\tmargin-right: 10px;\r\n\t\t\topacity: 1 !important;\r\n\t\t\tbackground-size: 16px;\r\n\t\t\tvertical-align: middle !important;\r\n\t\t}\r\n\r\n\t\t// In dashboard\r\n\t\t&--inline {\r\n\t\t\twidth: auto;\r\n\t\t\tmin-width: 44px;\r\n\t\t\theight: 44px;\r\n\t\t\tmargin: 0;\r\n\t\t\tborder: 0;\r\n\t\t\tborder-radius: var(--border-radius-pill);\r\n\t\t\tbackground-color: var(--color-main-background-blur);\r\n\t\t\tfont-size: inherit;\r\n\t\t\tfont-weight: normal;\r\n\r\n\t\t\t-webkit-backdrop-filter: var(--background-blur);\r\n\t\t\tbackdrop-filter: var(--background-blur);\r\n\r\n\t\t\t&:active,\r\n\t\t\t&:hover,\r\n\t\t\t&:focus {\r\n\t\t\t\tbackground-color: var(--color-background-hover);\r\n\t\t\t}\r\n\t\t\t&:focus {\r\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-main-text) !important;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nli {\r\n\tlist-style-type: none;\r\n}\r\n\r\n"],sourceRoot:""}]),e.Z=o},46700:function(t,e,r){var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id=46700}},a={};function o(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={id:t,loaded:!1,exports:{}};return s[t].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=s,e=[],o.O=function(t,r,n,s){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],s=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||a>=s)&&Object.keys(o.O).every((function(t){return o.O[t](r[u])}))?r.splice(u--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,n,s]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,r){return o.f[r](t,e),e}),[]))},o.u=function(t){return"user-status-modal-"+t+".js?v=ea192c18a58277cf8bb3"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r={},n="nextcloud:",o.l=function(t,e,s,a){if(r[t])r[t].push(e);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+s){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",n+s),i.src=t),r[t]=[e];var m=function(e,n){i.onerror=i.onload=null,clearTimeout(f);var s=r[t];if(delete r[t],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},o.j=2613,function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){o.b=document.baseURI||self.location.href;var t={2613:0};o.f.j=function(e,r){var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(r,s){n=t[e]=[r,s]}));r.push(n[2]=s);var a=o.p+o.u(e),i=new Error;o.l(a,(function(r){if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,n[1](i)}}),"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,a=r[0],i=r[1],u=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(u)var l=u(o)}for(e&&e(r);c<a.length;c++)s=a[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(l)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),o.nc=void 0;var i=o.O(void 0,[7874],(function(){return o(43593)}));i=o.O(i)}();
//# sourceMappingURL=user_status-menu.js.map?v=8551d20755067584d0e3
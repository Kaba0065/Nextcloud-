/*! For license information please see core-profile.js.LICENSE.txt */
!function(){"use strict";var r,n={72425:function(r,n,e){var a,i=e(20144),o=e(45994),A=e(31352),l=e(61361),s=e(17499),c=null===(a=(0,o.ts)())?(0,s.IY)().setApp("core").build():(0,s.IY)().setApp("core").setUid(a.uid).build();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){C(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function C(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,r);if("object"!==d(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===d(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var f=e(78595),_=e(79954),v=e(79753),g=e(64024),m=e(75925),h=e.n(m),b=e(12945),x=e.n(b),y=e(76212),k=e.n(y),w=e(50246),B=e(73229),S=e(86158),P={name:"PrimaryActionButton",props:{disabled:{type:Boolean,default:!1},href:{type:String,required:!0},icon:{type:String,required:!0},target:{type:String,required:!0,validator:function(t){return["_self","_blank","_parent","_top"].includes(t)}}},computed:{colorPrimaryText:function(){return getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()}}},O=e(93379),E=e.n(O),D=e(7795),j=e.n(D),I=e(90569),U=e.n(I),z=e(3565),Z=e.n(z),M=e(19216),G=e.n(M),T=e(44589),W=e.n(T),Y=e(81001),q={};q.styleTagTransform=W(),q.setAttributes=Z(),q.insert=U().bind(null,"head"),q.domAPI=j(),q.insertStyleElement=G(),E()(Y.Z,q),Y.Z&&Y.Z.locals&&Y.Z.locals;var F=e(51900),$=(0,F.Z)(P,(function(){var t=this,r=t._self._c;return r("a",t._g({staticClass:"profile__primary-action-button",class:{disabled:t.disabled},attrs:{href:t.href,target:t.target,rel:"noopener noreferrer nofollow"}},t.$listeners),[r("img",{staticClass:"icon",class:[t.icon,{"icon-invert":"#ffffff"===t.colorPrimaryText}],attrs:{src:t.icon}}),t._v(" "),t._t("default")],2)}),[],!1,null,"35d5c4b6",null).exports,N=(0,_.j)("core","status",{}),K=(0,_.j)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1}),L=K.userId,V=K.displayname,H=K.address,R=K.organisation,J=K.role,Q=K.headline,X=K.biography,tt=K.actions,rt=K.isUserAvatarVisible,nt={name:"Profile",components:{AccountIcon:S.Z,NcActionLink:k(),NcActions:x(),NcAvatar:h(),MapMarkerIcon:w.Z,PencilIcon:B.default,PrimaryActionButton:$},data:function(){return{status:N,userId:L,displayname:V,address:H,organisation:R,role:J,headline:Q,biography:X,actions:tt,isUserAvatarVisible:rt,sections:OCA.Core.ProfileSections.getSections()}},computed:{isCurrentUser:function(){var t;return(null===(t=(0,o.ts)())||void 0===t?void 0:t.uid)===this.userId},allActions:function(){return this.actions},primaryAction:function(){return this.allActions.length?this.allActions[0]:null},middleActions:function(){return this.allActions.slice(1,4).length?this.allActions.slice(1,4):null},otherActions:function(){return this.allActions.slice(4).length?this.allActions.slice(4):null},settingsUrl:function(){return(0,v.generateUrl)("/settings/user")},colorMainBackground:function(){return getComputedStyle(document.body).getPropertyValue("--color-main-background").trim()},emptyProfileMessage:function(){return this.isCurrentUser?t("core","You have not added any info yet"):t("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted:function(){document.title="".concat(this.displayname||this.userId," - ").concat(document.title),(0,f.Ld)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy:function(){(0,f.r1)("user_status:status.updated",this.handleStatusUpdate)},methods:{handleStatusUpdate:function(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal:function(){var r=document.querySelector(".user-status-menu-item__toggle");this.isCurrentUser&&(r?r.click():(0,g.x2)(t("core","Error opening the user status modal, try hard refreshing the page")))}}},et=e(64619),at={};at.styleTagTransform=W(),at.setAttributes=Z(),at.insert=U().bind(null,"head"),at.domAPI=j(),at.insertStyleElement=G(),E()(et.Z,at),et.Z&&et.Z.locals&&et.Z.locals;var it=e(99868),ot={};ot.styleTagTransform=W(),ot.setAttributes=Z(),ot.insert=U().bind(null,"head"),ot.domAPI=j(),ot.insertStyleElement=G(),E()(it.Z,ot),it.Z&&it.Z.locals&&it.Z.locals;var At=(0,F.Z)(nt,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"profile"},[r("div",{staticClass:"profile__header"},[r("div",{staticClass:"profile__header__container"},[r("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),r("h2",{staticClass:"profile__header__container__displayname"},[t._v("\n\t\t\t\t"+t._s(t.displayname||t.userId)+"\n\t\t\t\t"),t.isCurrentUser?r("a",{staticClass:"primary profile__header__container__edit-button",attrs:{href:t.settingsUrl}},[r("PencilIcon",{staticClass:"pencil-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t")],1):t._e()]),t._v(" "),t.status.icon||t.status.message?r("div",{staticClass:"profile__header__container__status-text",class:{interactive:t.isCurrentUser},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.openStatusModal.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t")]):t._e()])]),t._v(" "),r("div",{staticClass:"profile__wrapper"},[r("div",{staticClass:"profile__content"},[r("div",{staticClass:"profile__sidebar"},[r("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),r("div",{staticClass:"user-actions"},[t.primaryAction?r("PrimaryActionButton",{staticClass:"user-actions__primary",attrs:{href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),r("div",{staticClass:"user-actions__other"},[t._l(t.middleActions,(function(n){return r("NcActions",{key:n.id,staticStyle:{"background-position":"14px center","background-size":"16px","background-repeat":"no-repeat"},style:u({backgroundImage:"url(".concat(n.icon,")")},"#181818"===t.colorMainBackground&&{filter:"invert(1)"}),attrs:{"default-icon":n.icon}},[r("NcActionLink",{attrs:{"close-after-click":!0,icon:n.icon,href:n.target,target:"phone"===n.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t")])],1)})),t._v(" "),t.otherActions?[r("NcActions",{attrs:{"force-menu":!0}},t._l(t.otherActions,(function(n){return r("NcActionLink",{key:n.id,class:{"icon-invert":"#181818"===t.colorMainBackground},attrs:{"close-after-click":!0,icon:n.icon,href:n.target,target:"phone"===n.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t\t")])})),1)]:t._e()],2)],1)],1),t._v(" "),r("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?r("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?r("div",{staticClass:"detail"},[r("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?r("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?r("div",{staticClass:"detail"},[r("p",[r("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography||t.sections.length>0?[t.headline?r("div",{staticClass:"profile__blocks-headline"},[r("h3",[t._v(t._s(t.headline))])]):t._e(),t._v(" "),t.biography?r("div",{staticClass:"profile__blocks-biography"},[r("p",[t._v(t._s(t.biography))])]):t._e(),t._v(" "),t._l(t.sections,(function(n,e){return r("div",{key:e,ref:"section-"+e,refInFor:!0,staticClass:"profile__additionalContent"},[r(n(t.$refs["section-"+e],t.userId),{tag:"component",attrs:{userId:t.userId}})],1)}))]:[r("div",{staticClass:"profile__blocks-empty-info"},[r("AccountIcon",{attrs:{size:60,"fill-color":"var(--color-text-maxcontrast)"}}),t._v(" "),r("h3",[t._v(t._s(t.emptyProfileMessage))]),t._v(" "),r("p",[t._v(t._s(t.t("core","The headline and about sections will show up here")))])],1)]],2)])])])}),[],!1,null,"3d0c11af",null),lt=At.exports;function st(t){return st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(t)}function ct(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,dt(e.key),e)}}function dt(t){var r=function(t,r){if("object"!==st(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,r);if("object"!==st(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===st(r)?r:String(r)}var pt=function(){function t(){var r,n,e;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,e=void 0,(n=dt(n="_sections"))in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,this._sections=[]}var r,n;return r=t,(n=[{key:"registerSection",value:function(t){this._sections.push(t)}},{key:"getSections",value:function(){return this._sections}}])&&ct(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();e.nc=btoa((0,o.IH)()),window.OCA||(window.OCA={}),window.OCA.Core||(window.OCA.Core={}),Object.assign(window.OCA.Core,{ProfileSections:new pt}),i.ZP.use(l.default),i.ZP.mixin({props:{logger:c},methods:{t:A.Iu}});var ut=i.ZP.extend(lt);window.addEventListener("DOMContentLoaded",(function(){(new ut).$mount("#vue-profile")}))},81001:function(t,r,n){var e=n(87537),a=n.n(e),i=n(23645),o=n.n(i)()(a());o.push([t.id,".profile__primary-action-button[data-v-35d5c4b6]{font-size:var(--default-font-size);font-weight:bold;width:188px;height:44px;padding:0 16px;line-height:44px;text-align:center;border-radius:var(--border-radius-pill);color:var(--color-primary-text);background-color:var(--color-primary-element);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.profile__primary-action-button .icon[data-v-35d5c4b6]{display:inline-block;vertical-align:middle;margin-bottom:2px;margin-right:4px}.profile__primary-action-button .icon.icon-invert[data-v-35d5c4b6]{filter:invert(1)}.profile__primary-action-button[data-v-35d5c4b6]:hover,.profile__primary-action-button[data-v-35d5c4b6]:focus,.profile__primary-action-button[data-v-35d5c4b6]:active{background-color:var(--color-primary-element-light)}","",{version:3,sources:["webpack://./core/src/components/Profile/PrimaryActionButton.vue"],names:[],mappings:"AACA,iDACC,kCAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,uCAAA,CACA,+BAAA,CACA,6CAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,uDACC,oBAAA,CACA,qBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,mEACC,gBAAA,CAIF,sKAGC,mDAAA",sourcesContent:["\n.profile__primary-action-button {\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\twidth: 188px;\n\theight: 44px;\n\tpadding: 0 16px;\n\tline-height: 44px;\n\ttext-align: center;\n\tborder-radius: var(--border-radius-pill);\n\tcolor: var(--color-primary-text);\n\tbackground-color: var(--color-primary-element);\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-bottom: 2px;\n\t\tmargin-right: 4px;\n\n\t\t&.icon-invert {\n\t\t\tfilter: invert(1);\n\t\t}\n\t}\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n}\n"],sourceRoot:""}]),r.Z=o},64619:function(t,r,n){var e=n(87537),a=n.n(e),i=n(23645),o=n.n(i)()(a());o.push([t.id,"#header{background-color:rgba(0,0,0,0) !important;background-image:none !important}#content{padding-top:0px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAEA,QACC,yCAAA,CACA,gCAAA,CAGD,SACC,eAAA",sourcesContent:["\r\n// Override header styles\r\n#header {\r\n\tbackground-color: transparent !important;\r\n\tbackground-image: none !important;\r\n}\r\n\r\n#content {\r\n\tpadding-top: 0px;\r\n}\r\n"],sourceRoot:""}]),r.Z=o},99868:function(t,r,n){var e=n(87537),a=n.n(e),i=n(23645),o=n.n(i)()(a());o.push([t.id,".profile[data-v-3d0c11af]{width:100%;overflow-y:auto}.profile__header[data-v-3d0c11af]{position:sticky;height:190px;top:-40px;background-color:var(--color-main-background-blur);backdrop-filter:var(--filter-background-blur);-webkit-backdrop-filter:var(--filter-background-blur)}.profile__header__container[data-v-3d0c11af]{align-self:flex-end;width:100%;max-width:1024px;margin:0 auto;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-3d0c11af]{grid-row:1/3}.profile__header__container__displayname[data-v-3d0c11af],.profile__header__container__status-text[data-v-3d0c11af]{color:var(--color-main-text)}.profile__header__container__displayname[data-v-3d0c11af]{width:640px;height:45px;margin-top:128px;margin-bottom:0;font-size:30px;display:flex;align-items:center;cursor:text}.profile__header__container__displayname[data-v-3d0c11af]:not(:last-child){margin-top:100px;margin-bottom:4px}.profile__header__container__edit-button[data-v-3d0c11af]{border:none;margin-left:18px;margin-top:2px;color:var(--color-primary-element);background-color:var(--color-primary-text);box-shadow:0 0 0 2px var(--color-primary-text);border-radius:var(--border-radius-pill);padding:0 18px;font-size:var(--default-font-size);height:44px;line-height:44px;font-weight:bold}.profile__header__container__edit-button[data-v-3d0c11af]:hover,.profile__header__container__edit-button[data-v-3d0c11af]:focus,.profile__header__container__edit-button[data-v-3d0c11af]:active{color:var(--color-primary-element);background-color:var(--color-primary-element-light)}.profile__header__container__edit-button .pencil-icon[data-v-3d0c11af]{display:inline-block;vertical-align:middle;margin-top:2px}.profile__header__container__status-text[data-v-3d0c11af]{width:max-content;max-width:640px;padding:5px 10px;margin-left:-12px;margin-top:2px}.profile__header__container__status-text.interactive[data-v-3d0c11af]{cursor:pointer}.profile__header__container__status-text.interactive[data-v-3d0c11af]:hover,.profile__header__container__status-text.interactive[data-v-3d0c11af]:focus,.profile__header__container__status-text.interactive[data-v-3d0c11af]:active{background-color:var(--color-main-background);color:var(--color-main-text);border-radius:var(--border-radius-pill);font-weight:bold;box-shadow:0 3px 6px var(--color-box-shadow)}.profile__sidebar[data-v-3d0c11af]{position:sticky;top:var(--header-height);align-self:flex-start;padding-top:20px;min-width:220px;margin:-150px 20px 0 0}.profile__sidebar[data-v-3d0c11af] .avatar.avatardiv,.profile__sidebar h2[data-v-3d0c11af]{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-3d0c11af] .avatar.avatardiv:not(.avatardiv--unknown){background-color:var(--color-main-background) !important;box-shadow:none}.profile__sidebar[data-v-3d0c11af] .avatar.avatardiv .avatardiv__user-status{right:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__sidebar[data-v-3d0c11af] .avatar.interactive.avatardiv .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-3d0c11af] .avatar.interactive.avatardiv .avatardiv__user-status:hover,.profile__sidebar[data-v-3d0c11af] .avatar.interactive.avatardiv .avatardiv__user-status:focus,.profile__sidebar[data-v-3d0c11af] .avatar.interactive.avatardiv .avatardiv__user-status:active{box-shadow:0 3px 6px var(--color-box-shadow)}.profile__wrapper[data-v-3d0c11af]{background-color:var(--color-main-background);min-height:100%}.profile__content[data-v-3d0c11af]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-3d0c11af]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-3d0c11af],.profile__blocks h3[data-v-3d0c11af]{overflow-wrap:anywhere}.profile__blocks-details[data-v-3d0c11af]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-3d0c11af]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-3d0c11af]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-3d0c11af]{margin-top:10px}.profile__blocks-headline h3[data-v-3d0c11af]{font-weight:bold;font-size:20px;margin:0}.profile__blocks-biography[data-v-3d0c11af]{white-space:pre-line}.profile__blocks h3[data-v-3d0c11af],.profile__blocks p[data-v-3d0c11af]{cursor:text}.profile__blocks-empty-info[data-v-3d0c11af]{margin-top:80px;margin-right:100px;display:flex;flex-direction:column;text-align:center}.profile__blocks-empty-info h3[data-v-3d0c11af]{font-weight:bold;font-size:18px;margin:8px 0}@media only screen and (max-width: 1024px){.profile__header[data-v-3d0c11af]{height:250px;position:unset}.profile__header__container[data-v-3d0c11af]{grid-template-columns:unset}.profile__header__container__displayname[data-v-3d0c11af]{margin:100px 20px 0px;width:unset;display:unset;text-align:center}.profile__header__container__edit-button[data-v-3d0c11af]{width:fit-content;display:block;margin:30px auto}.profile__content[data-v-3d0c11af]{display:block}.profile__blocks[data-v-3d0c11af]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__blocks-empty-info[data-v-3d0c11af]{margin:0}.profile__sidebar[data-v-3d0c11af]{margin:unset;position:unset}}.user-actions[data-v-3d0c11af]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-3d0c11af]{margin:0 auto}.user-actions__other[data-v-3d0c11af]{display:flex;justify-content:center;gap:0 4px}.user-actions__other a[data-v-3d0c11af]{filter:var(--background-invert-if-dark)}.icon-invert[data-v-3d0c11af] .action-link__icon{filter:invert(1)}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAIA,0BACC,UAAA,CACA,eAAA,CAEA,kCACC,eAAA,CACA,YAAA,CACA,SAAA,CACA,kDAAA,CACA,6CAAA,CACA,qDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAlBiB,CAmBjB,aAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,oHACC,4BAAA,CAGD,0DACC,WAjCgB,CAkChB,WAAA,CACA,gBAAA,CAEA,eAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,2EACC,gBAAA,CACA,iBAAA,CAIF,0DACC,WAAA,CACA,gBAAA,CACA,cAAA,CACA,kCAAA,CACA,0CAAA,CACA,8CAAA,CACA,uCAAA,CACA,cAAA,CACA,kCAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CAEA,iMAGC,kCAAA,CACA,mDAAA,CAGD,uEACC,oBAAA,CACA,qBAAA,CACA,cAAA,CAIF,0DACC,iBAAA,CACA,eA/EgB,CAgFhB,gBAAA,CACA,iBAAA,CACA,cAAA,CAEA,sEACC,cAAA,CAEA,qOAGC,6CAAA,CACA,4BAAA,CACA,uCAAA,CACA,gBAAA,CACA,4CAAA,CAOL,mCACC,eAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CAGA,2FACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGD,8EACC,wDAAA,CACA,eAAA,CAIA,6EACC,UAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKD,yFACC,cAAA,CAEA,8RAGC,4CAAA,CAMJ,mCACC,6CAAA,CACA,eAAA,CAGD,mCACC,gBA7JkB,CA8JlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WAtKkB,CAwKlB,yEACC,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CAEA,8CACC,gBAAA,CACA,cAAA,CACA,QAAA,CAIF,4CACC,oBAAA,CAGD,yEACC,WAAA,CAGD,6CACC,eAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,gDACC,gBAAA,CACA,cAAA,CACA,YAAA,CAMJ,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CAEA,0DACC,qBAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAKH,mCACC,aAAA,CAGD,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAEA,6CACC,QAAA,CAIF,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAGD,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CACA,wCACC,uCAAA,CAMF,iDACC,gBAAA",sourcesContent:["\r\n$profile-max-width: 1024px;\r\n$content-max-width: 640px;\r\n\r\n.profile {\r\n\twidth: 100%;\r\n\toverflow-y: auto;\r\n\r\n\t&__header {\r\n\t\tposition: sticky;\r\n\t\theight: 190px;\r\n\t\ttop: -40px;\r\n\t\tbackground-color: var(--color-main-background-blur);\r\n\t\tbackdrop-filter: var(--filter-background-blur);\r\n\t\t-webkit-backdrop-filter: var(--filter-background-blur);\r\n\r\n\t\t&__container {\r\n\t\t\talign-self: flex-end;\r\n\t\t\twidth: 100%;\r\n\t\t\tmax-width: $profile-max-width;\r\n\t\t\tmargin: 0 auto;\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-rows: max-content max-content;\r\n\t\t\tgrid-template-columns: 240px 1fr;\r\n\t\t\tjustify-content: center;\r\n\r\n\t\t\t&__placeholder {\r\n\t\t\t\tgrid-row: 1 / 3;\r\n\t\t\t}\r\n\r\n\t\t\t&__displayname, &__status-text {\r\n\t\t\t\tcolor: var(--color-main-text);\r\n\t\t\t}\r\n\r\n\t\t\t&__displayname {\r\n\t\t\t\twidth: $content-max-width;\r\n\t\t\t\theight: 45px;\r\n\t\t\t\tmargin-top: 128px;\r\n\t\t\t\t// Override the global style declaration\r\n\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\tfont-size: 30px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tcursor: text;\r\n\r\n\t\t\t\t&:not(:last-child) {\r\n\t\t\t\t\tmargin-top: 100px;\r\n\t\t\t\t\tmargin-bottom: 4px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&__edit-button {\r\n\t\t\t\tborder: none;\r\n\t\t\t\tmargin-left: 18px;\r\n\t\t\t\tmargin-top: 2px;\r\n\t\t\t\tcolor: var(--color-primary-element);\r\n\t\t\t\tbackground-color: var(--color-primary-text);\r\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-primary-text);\r\n\t\t\t\tborder-radius: var(--border-radius-pill);\r\n\t\t\t\tpadding: 0 18px;\r\n\t\t\t\tfont-size: var(--default-font-size);\r\n\t\t\t\theight: 44px;\r\n\t\t\t\tline-height: 44px;\r\n\t\t\t\tfont-weight: bold;\r\n\r\n\t\t\t\t&:hover,\r\n\t\t\t\t&:focus,\r\n\t\t\t\t&:active {\r\n\t\t\t\t\tcolor: var(--color-primary-element);\r\n\t\t\t\t\tbackground-color: var(--color-primary-element-light);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.pencil-icon {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tvertical-align: middle;\r\n\t\t\t\t\tmargin-top: 2px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&__status-text {\r\n\t\t\t\twidth: max-content;\r\n\t\t\t\tmax-width: $content-max-width;\r\n\t\t\t\tpadding: 5px 10px;\r\n\t\t\t\tmargin-left: -12px;\r\n\t\t\t\tmargin-top: 2px;\r\n\r\n\t\t\t\t&.interactive {\r\n\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t&:hover,\r\n\t\t\t\t\t&:focus,\r\n\t\t\t\t\t&:active {\r\n\t\t\t\t\t\tbackground-color: var(--color-main-background);\r\n\t\t\t\t\t\tcolor: var(--color-main-text);\r\n\t\t\t\t\t\tborder-radius: var(--border-radius-pill);\r\n\t\t\t\t\t\tfont-weight: bold;\r\n\t\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__sidebar {\r\n\t\tposition: sticky;\r\n\t\ttop: var(--header-height);\r\n\t\talign-self: flex-start;\r\n\t\tpadding-top: 20px;\r\n\t\tmin-width: 220px;\r\n\t\tmargin: -150px 20px 0 0;\r\n\r\n\t\t// Specificity hack is needed to override Avatar component styles\r\n\t\t&::v-deep .avatar.avatardiv, h2 {\r\n\t\t\ttext-align: center;\r\n\t\t\tmargin: auto;\r\n\t\t\tdisplay: block;\r\n\t\t\tpadding: 8px;\r\n\t\t}\r\n\r\n\t\t&::v-deep .avatar.avatardiv:not(.avatardiv--unknown) {\r\n\t\t\tbackground-color: var(--color-main-background) !important;\r\n\t\t\tbox-shadow: none;\r\n\t\t}\r\n\r\n\t\t&::v-deep .avatar.avatardiv {\r\n\t\t\t.avatardiv__user-status {\r\n\t\t\t\tright: 14px;\r\n\t\t\t\tbottom: 14px;\r\n\t\t\t\twidth: 34px;\r\n\t\t\t\theight: 34px;\r\n\t\t\t\tbackground-size: 28px;\r\n\t\t\t\tborder: none;\r\n\t\t\t\t// Styles when custom status icon and status text are set\r\n\t\t\t\tbackground-color: var(--color-main-background);\r\n\t\t\t\tline-height: 34px;\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&::v-deep .avatar.interactive.avatardiv {\r\n\t\t\t.avatardiv__user-status {\r\n\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t&:hover,\r\n\t\t\t\t&:focus,\r\n\t\t\t\t&:active {\r\n\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__wrapper {\r\n\t\tbackground-color: var(--color-main-background);\r\n\t\tmin-height: 100%;\r\n\t}\r\n\r\n\t&__content {\r\n\t\tmax-width: $profile-max-width;\r\n\t\tmargin: 0 auto;\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t&__blocks {\r\n\t\tmargin: 18px 0 80px 0;\r\n\t\tdisplay: grid;\r\n\t\tgap: 16px 0;\r\n\t\twidth: $content-max-width;\r\n\r\n\t\tp, h3 {\r\n\t\t\toverflow-wrap: anywhere;\r\n\t\t}\r\n\r\n\t\t&-details {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2px 0;\r\n\r\n\t\t\t.detail {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tcolor: var(--color-text-maxcontrast);\r\n\r\n\t\t\t\tp .map-icon {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tvertical-align: middle;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-headline {\r\n\t\t\tmargin-top: 10px;\r\n\r\n\t\t\th3 {\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tfont-size: 20px;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-biography {\r\n\t\t\twhite-space: pre-line;\r\n\t\t}\r\n\r\n\t\th3, p {\r\n\t\t\tcursor: text;\r\n\t\t}\r\n\r\n\t\t&-empty-info {\r\n\t\t\tmargin-top: 80px;\r\n\t\t\tmargin-right: 100px;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\ttext-align: center;\r\n\r\n\t\t\th3 {\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\tmargin: 8px 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\t.profile {\r\n\t\t&__header {\r\n\t\t\theight: 250px;\r\n\t\t\tposition: unset;\r\n\r\n\t\t\t&__container {\r\n\t\t\t\tgrid-template-columns: unset;\r\n\r\n\t\t\t\t&__displayname {\r\n\t\t\t\t\tmargin: 100px 20px 0px;\r\n\t\t\t\t\twidth: unset;\r\n\t\t\t\t\tdisplay: unset;\r\n\t\t\t\t\ttext-align: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&__edit-button {\r\n\t\t\t\t\twidth: fit-content;\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tmargin: 30px auto;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\r\n\t\t&__blocks {\r\n\t\t\twidth: unset;\r\n\t\t\tmax-width: 600px;\r\n\t\t\tmargin: 0 auto;\r\n\t\t\tpadding: 20px 50px 50px 50px;\r\n\r\n\t\t\t&-empty-info {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__sidebar {\r\n\t\t\tmargin: unset;\r\n\t\t\tposition: unset;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.user-actions {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 8px 0;\r\n\tmargin-top: 20px;\r\n\r\n\t&__primary {\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t&__other {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tgap: 0 4px;\r\n\t\ta {\r\n\t\t\tfilter: var(--background-invert-if-dark);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.icon-invert {\r\n\t&::v-deep .action-link__icon {\r\n\t\tfilter: invert(1);\r\n\t}\r\n}\r\n"],sourceRoot:""}]),r.Z=o}},e={};function a(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={id:t,loaded:!1,exports:{}};return n[t].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=n,r=[],a.O=function(t,n,e,i){if(!n){var o=1/0;for(c=0;c<r.length;c++){n=r[c][0],e=r[c][1],i=r[c][2];for(var A=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(A=!1,i<o&&(o=i));if(A){r.splice(c--,1);var s=e();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=r.length;c>0&&r[c-1][2]>i;c--)r[c]=r[c-1];r[c]=[n,e,i]},a.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(r,{a:r}),r},a.d=function(t,r){for(var n in r)a.o(r,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=9651,function(){a.b=document.baseURI||self.location.href;var t={9651:0};a.O.j=function(r){return 0===t[r]};var r=function(r,n){var e,i,o=n[0],A=n[1],l=n[2],s=0;if(o.some((function(r){return 0!==t[r]}))){for(e in A)a.o(A,e)&&(a.m[e]=A[e]);if(l)var c=l(a)}for(r&&r(n);s<o.length;s++)i=o[s],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}(),a.nc=void 0;var i=a.O(void 0,[7874],(function(){return a(72425)}));i=a.O(i)}();
//# sourceMappingURL=core-profile.js.map?v=003bbf5527a02d486c92
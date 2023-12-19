/*! For license information please see core-profile.js.LICENSE.txt */
(()=>{"use strict";var e,n,a,i={98092:(e,n,a)=>{var i=a(20144),r=a(77958),o=a(31352),A=a(2324),s=a(17499);const l=null===(d=(0,r.ts)())?(0,s.IY)().setApp("core").build():(0,s.IY)().setApp("core").setUid(d.uid).build();var d,c=a(69183),p=a(43554),C=a(79753),u=a(64024),_=a(18519),v=a(25220),g=a(41989);const m={name:"MapMarkerIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var h=a(51900);const f=(0,h.Z)(m,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon map-marker-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var b=a(77531);const x={name:"AccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=(0,h.Z)(x,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon account-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var k=a(64882);const w=(0,i.defineComponent)({name:"PrimaryActionButton",components:{NcButton:k.P2},props:{disabled:{type:Boolean,default:!1},href:{type:String,required:!0},icon:{type:String,required:!0},target:{type:String,required:!0,validator:t=>["_self","_blank","_parent","_top"].includes(t)}},methods:{t:o.Iu}});var Z=a(93379),B=a.n(Z),I=a(7795),D=a.n(I),N=a(90569),S=a.n(N),E=a(3565),M=a.n(E),P=a(19216),z=a.n(P),j=a(44589),L=a.n(j),T=a(96295),Y={};Y.styleTagTransform=L(),Y.setAttributes=M(),Y.insert=S().bind(null,"head"),Y.domAPI=D(),Y.insertStyleElement=z(),B()(T.Z,Y),T.Z&&T.Z.locals&&T.Z.locals;const G=(0,h.Z)(w,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcButton",{attrs:{type:"primary",href:t.href,alignment:"center",target:t.target,disabled:t.disabled},scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"icon",attrs:{"aria-hidden":"true",src:t.icon,alt:""}})]},proxy:!0}])},[t._v(" "),t._t("default")],2)}),[],!1,null,"6eb67209",null).exports,O=(0,p.j)("core","status",{}),{userId:U,displayname:H,address:W,organisation:$,role:Q,headline:R,biography:q,actions:V,isUserAvatarVisible:F}=(0,p.j)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1}),K={name:"Profile",components:{AccountIcon:y,NcActionLink:g.Z,NcActions:v.Z,NcAvatar:_.Z,MapMarkerIcon:f,PencilIcon:b.default,PrimaryActionButton:G},data:()=>({status:O,userId:U,displayname:H,address:W,organisation:$,role:Q,headline:R,biography:q,actions:V,isUserAvatarVisible:F,sections:OCA.Core.ProfileSections.getSections()}),computed:{isCurrentUser(){return(0,r.ts)()?.uid===this.userId},allActions(){return this.actions},primaryAction(){return this.allActions.length?this.allActions[0]:null},middleActions(){return this.allActions.slice(1,4).length?this.allActions.slice(1,4):null},otherActions(){return this.allActions.slice(4).length?this.allActions.slice(4):null},settingsUrl:()=>(0,C.generateUrl)("/settings/user"),colorMainBackground:()=>getComputedStyle(document.body).getPropertyValue("--color-main-background").trim(),emptyProfileMessage(){return this.isCurrentUser?t("core","You have not added any info yet"):t("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted(){document.title=`${this.displayname||this.userId} - ${document.title}`,(0,c.Ld)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy(){(0,c.r1)("user_status:status.updated",this.handleStatusUpdate)},methods:{handleStatusUpdate(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal(){const e=document.querySelector(".user-status-menu-item__toggle");this.isCurrentUser&&(e?e.click():(0,u.x2)(t("core","Error opening the user status modal, try hard refreshing the page")))}}};var J=a(5767),X={};X.styleTagTransform=L(),X.setAttributes=M(),X.insert=S().bind(null,"head"),X.domAPI=D(),X.insertStyleElement=z(),B()(J.Z,X),J.Z&&J.Z.locals&&J.Z.locals;var tt=a(58815),et={};et.styleTagTransform=L(),et.setAttributes=M(),et.insert=S().bind(null,"head"),et.domAPI=D(),et.insertStyleElement=z(),B()(tt.Z,et),tt.Z&&tt.Z.locals&&tt.Z.locals;const nt=(0,h.Z)(K,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile"},[e("div",{staticClass:"profile__header"},[e("div",{staticClass:"profile__header__container"},[e("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),e("h2",{staticClass:"profile__header__container__displayname"},[t._v("\n\t\t\t\t"+t._s(t.displayname||t.userId)+"\n\t\t\t\t"),t.isCurrentUser?e("a",{staticClass:"primary profile__header__container__edit-button",attrs:{href:t.settingsUrl}},[e("PencilIcon",{staticClass:"pencil-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t")],1):t._e()]),t._v(" "),t.status.icon||t.status.message?e("div",{staticClass:"profile__header__container__status-text",class:{interactive:t.isCurrentUser},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openStatusModal.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t")]):t._e()])]),t._v(" "),e("div",{staticClass:"profile__wrapper"},[e("div",{staticClass:"profile__content"},[e("div",{staticClass:"profile__sidebar"},[e("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),e("div",{staticClass:"user-actions"},[t.primaryAction?e("PrimaryActionButton",{staticClass:"user-actions__primary",attrs:{href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"user-actions__other"},[t._l(t.middleActions,(function(n){return e("NcActions",{key:n.id,staticStyle:{"background-position":"14px center","background-size":"16px","background-repeat":"no-repeat"},style:{backgroundImage:`url(${n.icon})`,..."#181818"===t.colorMainBackground&&{filter:"invert(1)"}},attrs:{"default-icon":n.icon}},[e("NcActionLink",{attrs:{"close-after-click":!0,icon:n.icon,href:n.target,target:"phone"===n.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t")])],1)})),t._v(" "),t.otherActions?[e("NcActions",{attrs:{"force-menu":!0}},t._l(t.otherActions,(function(n){return e("NcActionLink",{key:n.id,class:{"icon-invert":"#181818"===t.colorMainBackground},attrs:{"close-after-click":!0,icon:n.icon,href:n.target,target:"phone"===n.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t\t")])})),1)]:t._e()],2)],1)],1),t._v(" "),e("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?e("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?e("div",{staticClass:"detail"},[e("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?e("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?e("div",{staticClass:"detail"},[e("p",[e("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography||t.sections.length>0?[t.headline?e("div",{staticClass:"profile__blocks-headline"},[e("h3",[t._v(t._s(t.headline))])]):t._e(),t._v(" "),t.biography?e("div",{staticClass:"profile__blocks-biography"},[e("p",[t._v(t._s(t.biography))])]):t._e(),t._v(" "),t._l(t.sections,(function(n,a){return e("div",{key:a,ref:"section-"+a,refInFor:!0,staticClass:"profile__additionalContent"},[e(n(t.$refs["section-"+a],t.userId),{tag:"component",attrs:{userId:t.userId}})],1)}))]:[e("div",{staticClass:"profile__blocks-empty-info"},[e("AccountIcon",{attrs:{size:60,"fill-color":"var(--color-text-maxcontrast)"}}),t._v(" "),e("h3",[t._v(t._s(t.emptyProfileMessage))]),t._v(" "),e("p",[t._v(t._s(t.t("core","The headline and about sections will show up here")))])],1)]],2)])])])}),[],!1,null,"463d4788",null).exports;a.nc=btoa((0,r.IH)()),window.OCA||(window.OCA={}),window.OCA.Core||(window.OCA.Core={}),Object.assign(window.OCA.Core,{ProfileSections:new class{constructor(){var t,e,n;t=this,n=void 0,(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e="_sections"))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,this._sections=[]}registerSection(t){this._sections.push(t)}getSections(){return this._sections}}}),i.default.use(A.ZP),i.default.mixin({props:{logger:l},methods:{t:o.Iu}});const at=i.default.extend(nt);window.addEventListener("DOMContentLoaded",(()=>{(new at).$mount("#vue-profile")}))},96295:(t,e,n)=>{n.d(e,{Z:()=>A});var a=n(87537),i=n.n(a),r=n(23645),o=n.n(r)()(i());o.push([t.id,".icon[data-v-6eb67209]{filter:var(--primary-invert-if-dark)}.profile__primary-action-button[data-v-6eb67209]{font-size:var(--default-font-size);font-weight:bold;width:188px;height:44px;padding:0 16px;line-height:44px;text-align:center;border-radius:var(--border-radius-pill);color:var(--color-primary-element-text);background-color:var(--color-primary-element);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.profile__primary-action-button .icon[data-v-6eb67209]{display:inline-block;vertical-align:middle;margin-bottom:2px;margin-inline-end:4px}.profile__primary-action-button .icon.icon-invert[data-v-6eb67209]{filter:invert(1)}.profile__primary-action-button[data-v-6eb67209]:hover,.profile__primary-action-button[data-v-6eb67209]:focus,.profile__primary-action-button[data-v-6eb67209]:active{background-color:var(--color-primary-element-light)}","",{version:3,sources:["webpack://./core/src/components/Profile/PrimaryActionButton.vue"],names:[],mappings:"AACA,uBACC,oCAAA,CAGD,iDACC,kCAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,uCAAA,CACA,uCAAA,CACA,6CAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,uDACC,oBAAA,CACA,qBAAA,CACA,iBAAA,CACA,qBAAA,CAEA,mEACC,gBAAA,CAIF,sKAGC,mDAAA",sourcesContent:["\n.icon {\n\tfilter: var(--primary-invert-if-dark);\n}\n\n.profile__primary-action-button {\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\twidth: 188px;\n\theight: 44px;\n\tpadding: 0 16px;\n\tline-height: 44px;\n\ttext-align: center;\n\tborder-radius: var(--border-radius-pill);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-primary-element);\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-bottom: 2px;\n\t\tmargin-inline-end: 4px;\n\n\t\t&.icon-invert {\n\t\t\tfilter: invert(1);\n\t\t}\n\t}\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n}\n"],sourceRoot:""}]);const A=o},5767:(t,e,n)=>{n.d(e,{Z:()=>A});var a=n(87537),i=n.n(a),r=n(23645),o=n.n(r)()(i());o.push([t.id,"#header{background-color:rgba(0,0,0,0) !important;background-image:none !important}#content{padding-top:0px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAEA,QACC,yCAAA,CACA,gCAAA,CAGD,SACC,eAAA",sourcesContent:["\n// Override header styles\n#header {\n\tbackground-color: transparent !important;\n\tbackground-image: none !important;\n}\n\n#content {\n\tpadding-top: 0px;\n}\n"],sourceRoot:""}]);const A=o},58815:(t,e,n)=>{n.d(e,{Z:()=>A});var a=n(87537),i=n.n(a),r=n(23645),o=n.n(r)()(i());o.push([t.id,".profile[data-v-463d4788]{width:100%;overflow-y:auto}.profile__header[data-v-463d4788]{position:sticky;height:190px;top:-40px;background-color:var(--color-main-background-blur);backdrop-filter:var(--filter-background-blur);-webkit-backdrop-filter:var(--filter-background-blur)}.profile__header__container[data-v-463d4788]{align-self:flex-end;width:100%;max-width:1024px;margin:0 auto;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-463d4788]{grid-row:1/3}.profile__header__container__displayname[data-v-463d4788],.profile__header__container__status-text[data-v-463d4788]{color:var(--color-main-text)}.profile__header__container__displayname[data-v-463d4788]{width:640px;height:45px;margin-top:128px;margin-bottom:0;font-size:30px;display:flex;align-items:center;cursor:text}.profile__header__container__displayname[data-v-463d4788]:not(:last-child){margin-top:100px;margin-bottom:4px}.profile__header__container__edit-button[data-v-463d4788]{border:none;margin-inline-start:18px;margin-top:2px;color:var(--color-primary-element-text);background-color:var(--color-primary-element);box-shadow:0 0 0 2px var(--color-primary-element);border-radius:var(--border-radius-pill);padding:0 18px;font-size:var(--default-font-size);height:44px;line-height:44px;font-weight:bold}.profile__header__container__edit-button[data-v-463d4788]:hover,.profile__header__container__edit-button[data-v-463d4788]:focus,.profile__header__container__edit-button[data-v-463d4788]:active{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.profile__header__container__edit-button .pencil-icon[data-v-463d4788]{display:inline-block;vertical-align:middle;margin-top:2px}.profile__header__container__status-text[data-v-463d4788]{width:max-content;max-width:640px;padding:5px 10px;margin-inline-start:-12px;margin-top:2px}.profile__header__container__status-text.interactive[data-v-463d4788]{cursor:pointer}.profile__header__container__status-text.interactive[data-v-463d4788]:hover,.profile__header__container__status-text.interactive[data-v-463d4788]:focus,.profile__header__container__status-text.interactive[data-v-463d4788]:active{background-color:var(--color-main-background);color:var(--color-main-text);border-radius:var(--border-radius-pill);font-weight:bold;box-shadow:0 3px 6px var(--color-box-shadow)}.profile__sidebar[data-v-463d4788]{position:sticky;top:var(--header-height);align-self:flex-start;padding-top:20px;min-width:220px;margin:0;margin-top:-150px;margin-inline-end:20px}.profile__sidebar[data-v-463d4788] .avatar.avatardiv,.profile__sidebar h2[data-v-463d4788]{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-463d4788] .avatar.avatardiv:not(.avatardiv--unknown){background-color:var(--color-main-background) !important;box-shadow:none}.profile__sidebar[data-v-463d4788] .avatar.avatardiv .avatardiv__user-status{right:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__sidebar[data-v-463d4788] .avatar.interactive.avatardiv .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-463d4788] .avatar.interactive.avatardiv .avatardiv__user-status:hover,.profile__sidebar[data-v-463d4788] .avatar.interactive.avatardiv .avatardiv__user-status:focus,.profile__sidebar[data-v-463d4788] .avatar.interactive.avatardiv .avatardiv__user-status:active{box-shadow:0 3px 6px var(--color-box-shadow)}.profile__wrapper[data-v-463d4788]{background-color:var(--color-main-background);min-height:100%}.profile__content[data-v-463d4788]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-463d4788]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-463d4788],.profile__blocks h3[data-v-463d4788]{overflow-wrap:anywhere}.profile__blocks-details[data-v-463d4788]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-463d4788]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-463d4788]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-463d4788]{margin-top:10px}.profile__blocks-headline h3[data-v-463d4788]{font-weight:bold;font-size:20px;margin:0}.profile__blocks-biography[data-v-463d4788]{white-space:pre-line}.profile__blocks h3[data-v-463d4788],.profile__blocks p[data-v-463d4788]{cursor:text}.profile__blocks-empty-info[data-v-463d4788]{margin-top:80px;margin-inline-end:100px;display:flex;flex-direction:column;text-align:center}.profile__blocks-empty-info h3[data-v-463d4788]{font-weight:bold;font-size:18px;margin:8px 0}@media only screen and (max-width: 1024px){.profile__header[data-v-463d4788]{height:250px;position:unset}.profile__header__container[data-v-463d4788]{grid-template-columns:unset}.profile__header__container__displayname[data-v-463d4788]{margin:80px 20px 0px !important;height:1em;width:unset;display:unset;text-align:center}.profile__header__container__edit-button[data-v-463d4788]{width:fit-content;display:block;margin:60px auto}.profile__header__container__status-text[data-v-463d4788]{margin:4px auto}.profile__content[data-v-463d4788]{display:block}.profile__blocks[data-v-463d4788]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__blocks-empty-info[data-v-463d4788]{margin:0}.profile__sidebar[data-v-463d4788]{margin:unset;position:unset}}.user-actions[data-v-463d4788]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-463d4788]{margin:0 auto}.user-actions__other[data-v-463d4788]{display:flex;justify-content:center;gap:0 4px}.user-actions__other a[data-v-463d4788]{filter:var(--background-invert-if-dark)}.icon-invert[data-v-463d4788] .action-link__icon{filter:invert(1)}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAIA,0BACC,UAAA,CACA,eAAA,CAEA,kCACC,eAAA,CACA,YAAA,CACA,SAAA,CACA,kDAAA,CACA,6CAAA,CACA,qDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAlBiB,CAmBjB,aAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,oHACC,4BAAA,CAGD,0DACC,WAjCgB,CAkChB,WAAA,CACA,gBAAA,CAEA,eAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,2EACC,gBAAA,CACA,iBAAA,CAIF,0DACC,WAAA,CACA,wBAAA,CACA,cAAA,CACA,uCAAA,CACA,6CAAA,CACA,iDAAA,CACA,uCAAA,CACA,cAAA,CACA,kCAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CAEA,iMAGC,6CAAA,CACA,mDAAA,CAGD,uEACC,oBAAA,CACA,qBAAA,CACA,cAAA,CAIF,0DACC,iBAAA,CACA,eA/EgB,CAgFhB,gBAAA,CACA,yBAAA,CACA,cAAA,CAEA,sEACC,cAAA,CAEA,qOAGC,6CAAA,CACA,4BAAA,CACA,uCAAA,CACA,gBAAA,CACA,4CAAA,CAOL,mCACC,eAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,QAAA,CACA,iBAAA,CACA,sBAAA,CAGA,2FACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGD,8EACC,wDAAA,CACA,eAAA,CAIA,6EACC,UAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKD,yFACC,cAAA,CAEA,8RAGC,4CAAA,CAMJ,mCACC,6CAAA,CACA,eAAA,CAGD,mCACC,gBA/JkB,CAgKlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WAxKkB,CA0KlB,yEACC,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CAEA,8CACC,gBAAA,CACA,cAAA,CACA,QAAA,CAIF,4CACC,oBAAA,CAGD,yEACC,WAAA,CAGD,6CACC,eAAA,CACA,uBAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,gDACC,gBAAA,CACA,cAAA,CACA,YAAA,CAMJ,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CAEA,0DACC,+BAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAGD,0DACC,eAAA,CAKH,mCACC,aAAA,CAGD,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAEA,6CACC,QAAA,CAIF,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAGD,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CACA,wCACC,uCAAA,CAMF,iDACC,gBAAA",sourcesContent:["\n$profile-max-width: 1024px;\n$content-max-width: 640px;\n\n.profile {\n\twidth: 100%;\n\toverflow-y: auto;\n\n\t&__header {\n\t\tposition: sticky;\n\t\theight: 190px;\n\t\ttop: -40px;\n\t\tbackground-color: var(--color-main-background-blur);\n\t\tbackdrop-filter: var(--filter-background-blur);\n\t\t-webkit-backdrop-filter: var(--filter-background-blur);\n\n\t\t&__container {\n\t\t\talign-self: flex-end;\n\t\t\twidth: 100%;\n\t\t\tmax-width: $profile-max-width;\n\t\t\tmargin: 0 auto;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: max-content max-content;\n\t\t\tgrid-template-columns: 240px 1fr;\n\t\t\tjustify-content: center;\n\n\t\t\t&__placeholder {\n\t\t\t\tgrid-row: 1 / 3;\n\t\t\t}\n\n\t\t\t&__displayname, &__status-text {\n\t\t\t\tcolor: var(--color-main-text);\n\t\t\t}\n\n\t\t\t&__displayname {\n\t\t\t\twidth: $content-max-width;\n\t\t\t\theight: 45px;\n\t\t\t\tmargin-top: 128px;\n\t\t\t\t// Override the global style declaration\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tfont-size: 30px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: text;\n\n\t\t\t\t&:not(:last-child) {\n\t\t\t\t\tmargin-top: 100px;\n\t\t\t\t\tmargin-bottom: 4px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__edit-button {\n\t\t\t\tborder: none;\n\t\t\t\tmargin-inline-start: 18px;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tcolor: var(--color-primary-element-text);\n\t\t\t\tbackground-color: var(--color-primary-element);\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-primary-element);\n\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\tpadding: 0 18px;\n\t\t\t\tfont-size: var(--default-font-size);\n\t\t\t\theight: 44px;\n\t\t\t\tline-height: 44px;\n\t\t\t\tfont-weight: bold;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\t\t\tbackground-color: var(--color-primary-element-light);\n\t\t\t\t}\n\n\t\t\t\t.pencil-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\tmargin-top: 2px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__status-text {\n\t\t\t\twidth: max-content;\n\t\t\t\tmax-width: $content-max-width;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tmargin-inline-start: -12px;\n\t\t\t\tmargin-top: 2px;\n\n\t\t\t\t&.interactive {\n\t\t\t\t\tcursor: pointer;\n\n\t\t\t\t\t&:hover,\n\t\t\t\t\t&:focus,\n\t\t\t\t\t&:active {\n\t\t\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\t\t\tcolor: var(--color-main-text);\n\t\t\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__sidebar {\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\talign-self: flex-start;\n\t\tpadding-top: 20px;\n\t\tmin-width: 220px;\n\t\tmargin: 0;\n\t\tmargin-top: -150px;\n\t\tmargin-inline-end: 20px;\n\n\t\t// Specificity hack is needed to override Avatar component styles\n\t\t&::v-deep .avatar.avatardiv, h2 {\n\t\t\ttext-align: center;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding: 8px;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv:not(.avatardiv--unknown) {\n\t\t\tbackground-color: var(--color-main-background) !important;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tright: 14px;\n\t\t\t\tbottom: 14px;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tbackground-size: 28px;\n\t\t\t\tborder: none;\n\t\t\t\t// Styles when custom status icon and status text are set\n\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\tline-height: 34px;\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t}\n\n\t\t&::v-deep .avatar.interactive.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__wrapper {\n\t\tbackground-color: var(--color-main-background);\n\t\tmin-height: 100%;\n\t}\n\n\t&__content {\n\t\tmax-width: $profile-max-width;\n\t\tmargin: 0 auto;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\t&__blocks {\n\t\tmargin: 18px 0 80px 0;\n\t\tdisplay: grid;\n\t\tgap: 16px 0;\n\t\twidth: $content-max-width;\n\n\t\tp, h3 {\n\t\t\toverflow-wrap: anywhere;\n\t\t}\n\n\t\t&-details {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 2px 0;\n\n\t\t\t.detail {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t\t\tp .map-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&-headline {\n\t\t\tmargin-top: 10px;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&-biography {\n\t\t\twhite-space: pre-line;\n\t\t}\n\n\t\th3, p {\n\t\t\tcursor: text;\n\t\t}\n\n\t\t&-empty-info {\n\t\t\tmargin-top: 80px;\n\t\t\tmargin-inline-end: 100px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttext-align: center;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tmargin: 8px 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media only screen and (max-width: 1024px) {\n\t.profile {\n\t\t&__header {\n\t\t\theight: 250px;\n\t\t\tposition: unset;\n\n\t\t\t&__container {\n\t\t\t\tgrid-template-columns: unset;\n\n\t\t\t\t&__displayname {\n\t\t\t\t\tmargin: 80px 20px 0px!important;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\twidth: unset;\n\t\t\t\t\tdisplay: unset;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t&__edit-button {\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 60px auto;\n\t\t\t\t}\n\n\t\t\t\t&__status-text {\n\t\t\t\t\tmargin: 4px auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t&__blocks {\n\t\t\twidth: unset;\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 20px 50px 50px 50px;\n\n\t\t\t&-empty-info {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__sidebar {\n\t\t\tmargin: unset;\n\t\t\tposition: unset;\n\t\t}\n\t}\n}\n\n.user-actions {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px 0;\n\tmargin-top: 20px;\n\n\t&__primary {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__other {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 0 4px;\n\t\ta {\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t}\n\t}\n}\n\n.icon-invert {\n\t&::v-deep .action-link__icon {\n\t\tfilter: invert(1);\n\t}\n}\n"],sourceRoot:""}]);const A=o},39896:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE1LjQgMTYuNkwxMC44IDEybDQuNi00LjZMMTQgNmwtNiA2IDYgNiAxLjQtMS40eiIvPjwvc3ZnPg=="},76899:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE4LjQgNy40TDE3IDZsLTYgNiA2IDYgMS40LTEuNC00LjYtNC42IDQuNi00LjZtLTYgMEwxMSA2bC02IDYgNiA2IDEuNC0xLjRMNy44IDEybDQuNi00LjZ6Ii8+PC9zdmc+"},88931:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTUuNiA3LjRMNyA2bDYgNi02IDYtMS40LTEuNCA0LjYtNC42LTQuNi00LjZtNiAwTDEzIDZsNiA2LTYgNi0xLjQtMS40IDQuNi00LjYtNC42LTQuNnoiLz48L3N2Zz4="},16556:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTguNiAxNi42bDQuNi00LjYtNC42LTQuNkwxMCA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4="},64882:(t,e,n)=>{n.d(e,{$U:()=>S.Z,Iw:()=>A.Z,Jh:()=>G.Z,O3:()=>c.Z,P2:()=>M.Z,QG:()=>lt.Z,SL:()=>Q.Z,a0:()=>H.Z,fg:()=>E.Z,h3:()=>dt.Z,rw:()=>P.Z});var a=n(72155),i=n(66236),r=n(75944),o=n(45157),A=n(26053),s=n(41989),l=n(99313),d=n(20090),c=n(25220),p=n(96204),C=n(16894),u=n(94162),_=n(40874),v=n(27657),g=n(2047),m=n(68121),h=n(4867),f=n(89998),b=n(23762),x=n(36065),y=n(55721),k=n(55349),w=n(87875),Z=n(1927),B=n(56956),I=n(36135),D=n(98445),N=n(20938),S=n(3904),E=n(5594),M=n(74628),P=n(96),z=n(15758),j=n(73743),L=n(59897),T=n(89241),Y=n(96226),G=n(97947),O=n(20551),U=n(65027),H=n(19775),W=n(6318),$=n(78573),Q=n(22175),R=n(93428),q=n(66654),V=n(40873),F=n(64865),K=n(8691),J=n(88175),X=n(20435),tt=n(52740),et=n(6156),nt=n(16972),at=n(34246),it=n(34854),rt=n(42213),ot=n(22663),At=n(33474),st=n(26380),lt=(n(94553),n(93664),n(79753),n(86884)),dt=n(49368),ct=(n(69183),n(74911)),pt=n(35380),Ct=n(56857),ut=n(67912),_t=n(64864),vt=n(13888),gt=n(34509),mt=n(4409),ht=(n(52299),n(50279),n(93911),n(85302),n(90318)),ft=n(17593),bt=(n(79845),n(84722),n(76692),n(40946),n(73045));a.Z,i.Z,r.Z,o.Z,A.Z,s.Z,l.Z,d.Z,p.Z,C.Z,u.Z,c.Z,_.Z,v.Z,g.Z,m.Z,h.Z,f.Z,b.Z,x.Z,y.Z,k.Z,w.Z,Z.Z,B.Z,I.Z,D.Z,At.NcAutoCompleteResult,N.N,S.Z,E.Z,M.Z,P.Z,z.Z,j.Z,L.Z,T.Z,Y.Z,G.Z,O.Z,U.Z,H.Z,W.Z,$.Z,Q.Z,R.Z,q.Z,V.N,F.Z,K.Z,J.Z,X.Z,ot.N,tt.Z,et.Z,nt.Z,at.Z,it.Z,rt.Z,At.default,st.N,ct.Z,lt.Z,pt.Z,Ct.Z,ut.Z,_t.N,mt.Z,dt.Z,vt.Z,gt.Z,Symbol.toStringTag,ht.X,ft.X,bt.VTooltip,Symbol.toStringTag}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={id:t,loaded:!1,exports:{}};return i[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=i,e=[],o.O=(t,n,a,i)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var A=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((t=>o.O[t](n[s])))?n.splice(s--,1):(A=!1,i<r&&(r=i));if(A){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v="+{923:"aaa6fb3561797665bf42",1273:"fe23995dc78e475b3cbb"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},a="nextcloud:",o.l=(t,e,i,r)=>{if(n[t])n[t].push(e);else{var A,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==a+i){A=c;break}}A||(s=!0,(A=document.createElement("script")).charset="utf-8",A.timeout=120,o.nc&&A.setAttribute("nonce",o.nc),A.setAttribute("data-webpack",a+i),A.src=t),n[t]=[e];var p=(e,a)=>{A.onerror=A.onload=null,clearTimeout(C);var i=n[t];if(delete n[t],A.parentNode&&A.parentNode.removeChild(A),i&&i.forEach((t=>t(a))),e)return e(a)},C=setTimeout(p.bind(null,void 0,{type:"timeout",target:A}),12e4);A.onerror=p.bind(null,A.onerror),A.onload=p.bind(null,A.onload),s&&document.head.appendChild(A)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=9651,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!t;)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={9651:0};o.f.j=(e,n)=>{var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(((n,i)=>a=t[e]=[n,i]));n.push(a[2]=i);var r=o.p+o.u(e),A=new Error;o.l(r,(n=>{if(o.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;A.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",A.name="ChunkLoadError",A.type=i,A.request=r,a[1](A)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,r=n[0],A=n[1],s=n[2],l=0;if(r.some((e=>0!==t[e]))){for(a in A)o.o(A,a)&&(o.m[a]=A[a]);if(s)var d=s(o)}for(e&&e(n);l<r.length;l++)i=r[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.nc=void 0;var A=o.O(void 0,[7874],(()=>o(98092)));A=o.O(A)})();
//# sourceMappingURL=core-profile.js.map?v=f838788a6bf1d12964b0
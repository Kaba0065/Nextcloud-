/*! For license information please see settings-vue-settings-admin-basic-settings.js.LICENSE.txt */
!function(){var e,n={83642:function(e,n,r){"use strict";var s=r(20144),o=r(45994),i=r(79954),a=r(31352),c=(r(36144),(0,r(17499).IY)().setApp("settings").detectUser().build()),u=r(64024),l=r(4820),d=r(79753),g=r(10128);function A(e,t,n,r,s,o,i){try{var a=e[o](i),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,s)}r(65509);var p,f,b,m,v=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t?"1":"0",n=(0,d.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"settings",key:"profile_enabled_by_default"}),e.next=4,(0,g.confirmPassword)();case 4:return e.next=6,l.default.post(n,{value:t});case 6:return r=e.sent,e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function i(e){A(o,r,s,i,a,"next",e)}function a(e){A(o,r,s,i,a,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===E(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=Object.freeze({ADDRESS:"address",AVATAR:"avatar",BIOGRAPHY:"biography",DISPLAYNAME:"displayname",EMAIL_COLLECTION:"additional_mail",EMAIL:"email",HEADLINE:"headline",NOTIFICATION_EMAIL:"notify_email",FEDIVERSE:"fediverse",ORGANISATION:"organisation",PHONE:"phone",PROFILE_ENABLED:"profile_enabled",ROLE:"role",TWITTER:"twitter",WEBSITE:"website"}),h=Object.freeze({ADDRESS:(0,a.Iu)("settings","Location"),AVATAR:(0,a.Iu)("settings","Profile picture"),BIOGRAPHY:(0,a.Iu)("settings","About"),DISPLAYNAME:(0,a.Iu)("settings","Full name"),EMAIL_COLLECTION:(0,a.Iu)("settings","Additional email"),EMAIL:(0,a.Iu)("settings","Email"),HEADLINE:(0,a.Iu)("settings","Headline"),ORGANISATION:(0,a.Iu)("settings","Organisation"),PHONE:(0,a.Iu)("settings","Phone number"),PROFILE_ENABLED:(0,a.Iu)("settings","Profile"),ROLE:(0,a.Iu)("settings","Role"),TWITTER:(0,a.Iu)("settings","Twitter"),FEDIVERSE:(0,a.Iu)("settings","Fediverse (e.g. Mastodon)"),WEBSITE:(0,a.Iu)("settings","Website")}),y=(Object.freeze((j(p={},I.ADDRESS,h.ADDRESS),j(p,I.AVATAR,h.AVATAR),j(p,I.BIOGRAPHY,h.BIOGRAPHY),j(p,I.DISPLAYNAME,h.DISPLAYNAME),j(p,I.EMAIL_COLLECTION,h.EMAIL_COLLECTION),j(p,I.EMAIL,h.EMAIL),j(p,I.HEADLINE,h.HEADLINE),j(p,I.ORGANISATION,h.ORGANISATION),j(p,I.PHONE,h.PHONE),j(p,I.PROFILE_ENABLED,h.PROFILE_ENABLED),j(p,I.ROLE,h.ROLE),j(p,I.TWITTER,h.TWITTER),j(p,I.FEDIVERSE,h.FEDIVERSE),j(p,I.WEBSITE,h.WEBSITE),p)),Object.freeze({PROFILE_VISIBILITY:(0,a.Iu)("settings","Profile visibility")}),Object.freeze((j(f={},h.ADDRESS,I.ADDRESS),j(f,h.AVATAR,I.AVATAR),j(f,h.BIOGRAPHY,I.BIOGRAPHY),j(f,h.DISPLAYNAME,I.DISPLAYNAME),j(f,h.EMAIL_COLLECTION,I.EMAIL_COLLECTION),j(f,h.EMAIL,I.EMAIL),j(f,h.HEADLINE,I.HEADLINE),j(f,h.ORGANISATION,I.ORGANISATION),j(f,h.PHONE,I.PHONE),j(f,h.PROFILE_ENABLED,I.PROFILE_ENABLED),j(f,h.ROLE,I.ROLE),j(f,h.TWITTER,I.TWITTER),j(f,h.FEDIVERSE,I.FEDIVERSE),j(f,h.WEBSITE,I.WEBSITE),f)),Object.freeze({LANGUAGE:"language",LOCALE:"locale"}),Object.freeze({LANGUAGE:(0,a.Iu)("settings","Language"),LOCALE:(0,a.Iu)("settings","Locale")}),Object.freeze({PRIVATE:"v2-private",LOCAL:"v2-local",FEDERATED:"v2-federated",PUBLISHED:"v2-published"}));Object.freeze((j(b={},h.ADDRESS,[y.LOCAL,y.PRIVATE]),j(b,h.AVATAR,[y.LOCAL,y.PRIVATE]),j(b,h.BIOGRAPHY,[y.LOCAL,y.PRIVATE]),j(b,h.DISPLAYNAME,[y.LOCAL]),j(b,h.EMAIL_COLLECTION,[y.LOCAL]),j(b,h.EMAIL,[y.LOCAL]),j(b,h.HEADLINE,[y.LOCAL,y.PRIVATE]),j(b,h.ORGANISATION,[y.LOCAL,y.PRIVATE]),j(b,h.PHONE,[y.LOCAL,y.PRIVATE]),j(b,h.PROFILE_ENABLED,[y.LOCAL,y.PRIVATE]),j(b,h.ROLE,[y.LOCAL,y.PRIVATE]),j(b,h.TWITTER,[y.LOCAL,y.PRIVATE]),j(b,h.FEDIVERSE,[y.LOCAL,y.PRIVATE]),j(b,h.WEBSITE,[y.LOCAL,y.PRIVATE]),b)),Object.freeze([h.BIOGRAPHY,h.HEADLINE,h.ORGANISATION,h.ROLE]),Object.freeze((j(m={},y.PRIVATE,{name:y.PRIVATE,displayName:(0,a.Iu)("settings","Private"),tooltip:(0,a.Iu)("settings","Only visible to people matched via phone number integration through Talk on mobile"),tooltipDisabled:(0,a.Iu)("settings","Not available as this property is required for core functionality including file sharing and calendar invitations"),iconClass:"icon-phone"}),j(m,y.LOCAL,{name:y.LOCAL,displayName:(0,a.Iu)("settings","Local"),tooltip:(0,a.Iu)("settings","Only visible to people on this instance and guests"),iconClass:"icon-password"}),j(m,y.FEDERATED,{name:y.FEDERATED,displayName:(0,a.Iu)("settings","Federated"),tooltip:(0,a.Iu)("settings","Only synchronize to trusted servers"),tooltipDisabled:(0,a.Iu)("settings","Not available as federation has been disabled for your account, contact your system administrator if you have any questions"),iconClass:"icon-contacts-dark"}),j(m,y.PUBLISHED,{name:y.PUBLISHED,displayName:(0,a.Iu)("settings","Published"),tooltip:(0,a.Iu)("settings","Synchronize to trusted servers and the global and public address book"),tooltipDisabled:(0,a.Iu)("settings","Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions"),iconClass:"icon-link"}),m)),y.LOCAL,Object.freeze({NOT_VERIFIED:0,VERIFICATION_IN_PROGRESS:1,VERIFIED:2});var L=r(20571),C=r.n(L);function O(e,t,n,r,s,o,i){try{var a=e[o](i),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,s)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function i(e){O(o,r,s,i,a,"next",e)}function a(e){O(o,r,s,i,a,"throw",e)}i(void 0)}))}}var k=(0,i.j)("settings","profileEnabledByDefault",!0),T={name:"ProfileSettings",components:{NcCheckboxRadioSwitch:C()},data:function(){return{initialProfileEnabledByDefault:k}},methods:{onProfileDefaultChange:function(e){var t=this;return R(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("boolean"!=typeof e){n.next=3;break}return n.next=3,t.updateProfileDefault(e);case 3:case"end":return n.stop()}}),n)})))()},updateProfileDefault:function(e){var n=this;return R(regeneratorRuntime.mark((function r(){var s,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v(e);case 3:i=r.sent,n.handleResponse({isEnabled:e,status:null===(s=i.ocs)||void 0===s||null===(o=s.meta)||void 0===o?void 0:o.status}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n.handleResponse({errorMessage:t("settings","Unable to update profile default setting"),error:r.t0});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},handleResponse:function(e){var t=e.isEnabled,n=e.status,r=e.errorMessage,s=e.error;"ok"===n?this.initialProfileEnabledByDefault=t:((0,u.x2)(r),c.error(r,s))}}},N=r(51900),P=(0,N.Z)(T,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"profile-settings"}},[t("h2",{staticClass:"inlineblock"},[e._v("\n\t\t"+e._s(e.t("settings","Profile"))+"\n\t")]),e._v(" "),t("p",{staticClass:"settings-hint"},[e._v("\n\t\t"+e._s(e.t("settings","Enable or disable profile by default for new users."))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.initialProfileEnabledByDefault},on:{"update:checked":[function(t){e.initialProfileEnabledByDefault=t},e.onProfileDefaultChange]}},[e._v("\n\t\t"+e._s(e.t("settings","Enable"))+"\n\t")])],1)}),[],!1,null,"1df56ddc",null).exports,x=r(13299),D=r.n(x),w=r(57290),S=r.n(w),M=r(80351),_=r.n(M),B=r(25108);function z(e,t,n,r,s,o,i){try{var a=e[o](i),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,s)}function H(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function i(e){z(o,r,s,i,a,"next",e)}function a(e){z(o,r,s,i,a,"throw",e)}i(void 0)}))}}var V=(0,i.j)("settings","lastCron"),F=(0,i.j)("settings","cronMaxAge",""),G=(0,i.j)("settings","backgroundJobsMode","cron"),Z=(0,i.j)("settings","cliBasedCronPossible",!0),J=(0,i.j)("settings","cliBasedCronUser","www-data"),U=(0,i.j)("settings","backgroundJobsDocUrl"),W={name:"BackgroundJob",components:{NcCheckboxRadioSwitch:C(),NcSettingsSection:D(),NcNoteCard:S()},data:function(){return{lastCron:V,cronMaxAge:F,backgroundJobsMode:G,cliBasedCronPossible:Z,cliBasedCronUser:J,backgroundJobsDocUrl:U,relativeTime:_()(1e3*V).fromNow(),maxAgeRelativeTime:_()(1e3*F).fromNow()}},computed:{cronLabel:function(){var e=t("settings","Use system cron service to call the cron.php file every 5 minutes. Recommended for all instances.");return this.cliBasedCronPossible&&(e+=" "+t("settings",'The cron.php needs to be executed by the system user "{user}".',{user:this.cliBasedCronUser})),e},oldExecution:function(){return Date.now()/1e3-this.lastCron>600},longExecutionNotCron:function(){return Date.now()/1e3-this.cronMaxAge>43200&&"cron"!==this.backgroundJobsMode},longExecutionCron:function(){return Date.now()/1e3-this.cronMaxAge>86400&&"cron"===this.backgroundJobsMode}},methods:{onBackgroundJobModeChanged:function(e){var n=this;return H(regeneratorRuntime.mark((function r(){var s,o,i,a,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=(0,d.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"backgroundjobs_mode"}),r.next=3,(0,g.confirmPassword)();case 3:return r.prev=3,r.next=6,l.default.post(s,{value:e});case 6:a=r.sent,c=a.data,n.handleResponse({status:null===(o=c.ocs)||void 0===o||null===(i=o.meta)||void 0===i?void 0:i.status}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),n.handleResponse({errorMessage:t("settings","Unable to update background job mode"),error:r.t0});case 14:case"end":return r.stop()}}),r,null,[[3,11]])})))()},handleResponse:function(e){var t=this;return H(regeneratorRuntime.mark((function n(){var r,s,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.status,s=e.errorMessage,o=e.error,"ok"!==r){n.next=6;break}return n.next=4,t.deleteError();case 4:n.next=8;break;case 6:(0,u.x2)(s),B.error(s,o);case 8:case"end":return n.stop()}}),n)})))()},deleteError:function(){return H(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,d.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"cronErrors"}),e.next=3,(0,g.confirmPassword)();case 3:return e.prev=3,e.next=6,l.default.delete(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),B.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})))()}}},Y=W,q=r(93379),X=r.n(q),Q=r(7795),$=r.n(Q),K=r(90569),ee=r.n(K),te=r(3565),ne=r.n(te),re=r(19216),se=r.n(re),oe=r(44589),ie=r.n(oe),ae=r(63139),ce={};ce.styleTagTransform=ie(),ce.setAttributes=ne(),ce.insert=ee().bind(null,"head"),ce.domAPI=$(),ce.insertStyleElement=se(),X()(ae.Z,ce),ae.Z&&ae.Z.locals&&ae.Z.locals;var ue=(0,N.Z)(Y,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{title:e.t("settings","Background jobs"),description:e.t("settings","For the server to work properly, it's important to configure background jobs correctly. Cron is the recommended setting. Please see the documentation for more information."),"doc-url":e.backgroundJobsDocUrl}},[0!==e.lastCron?[e.oldExecution?t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job execution ran {time}. Something seems wrong.",{time:e.relativeTime}))+"\n\t\t")]):e.longExecutionCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider increasing the execution frequency.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):e.longExecutionNotCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider switching to system cron.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):t("NcNoteCard",{attrs:{type:"success"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job ran {relativeTime}.",{relativeTime:e.relativeTime}))+"\n\t\t")])]:t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t"+e._s(e.t("settings","Background job did not run yet!"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"ajaxSwitch",attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"ajax"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","AJAX"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","Execute one task with each page loaded. Use case: Single user instance.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"webcron"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Webcron"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","cron.php is registered at a webcron service to call cron.php every 5 minutes over HTTP. Use case: Very small instance (1–5 users depending on the usage).")))]),e._v(" "),e.cliBasedCronPossible?t("NcCheckboxRadioSwitch",{attrs:{type:"radio",checked:e.backgroundJobsMode,value:"cron",name:"backgroundJobsMode"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Cron (Recommended)"))+"\n\t")]):e._e(),e._v(" "),e.cliBasedCronPossible?t("em",[e._v(e._s(e.cronLabel))]):t("em",[e._v("\n\t\t{{ t('settings', 'To run this you need the PHP POSIX extension. See {linkstart}PHP documentation{linkend} for more details.', {\n\t\t\tlinkstart: '"),t("a",{attrs:{href:"https://www.php.net/manual/en/book.posix.php"}},[e._v("',\n\t\t\tlinkend: '")]),e._v("',\n\t\t}) }}\n\t")])],2)}),[],!1,null,"35d90e04",null).exports;r.nc=btoa((0,o.IH)());var le=(0,i.j)("settings","profileEnabledGlobally",!0);s.ZP.mixin({props:{logger:c},methods:{t:a.Iu}}),(new(s.ZP.extend(ue))).$mount("#vue-admin-background-job"),le&&(new(s.ZP.extend(P))).$mount("#vue-admin-profile-settings")},63139:function(e,t,n){"use strict";var r=n(87537),s=n.n(r),o=n(23645),i=n.n(o)()(s());i.push([e.id,".error[data-v-35d90e04]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-text);background-color:var(--color-error);width:initial}.warning[data-v-35d90e04]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-text);background-color:var(--color-warning);width:initial}.ajaxSwitch[data-v-35d90e04]{margin-top:1rem}","",{version:3,sources:["webpack://./apps/settings/src/components/BasicSettings/BackgroundJob.vue"],names:[],mappings:"AACA,wBACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,+BAAA,CACA,mCAAA,CACA,aAAA,CAED,0BACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,+BAAA,CACA,qCAAA,CACA,aAAA,CAED,6BACC,eAAA",sourcesContent:["\n.error {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-text);\n\tbackground-color: var(--color-error);\n\twidth: initial;\n}\n.warning {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-text);\n\tbackground-color: var(--color-warning);\n\twidth: initial;\n}\n.ajaxSwitch {\n\tmargin-top: 1rem;\n}\n"],sourceRoot:""}]),t.Z=i},46700:function(e,t,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=46700},81490:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=n,e=[],s.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=6192,function(){s.b=document.baseURI||self.location.href;var e={6192:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(c)var l=c(s)}for(t&&t(n);u<i.length;u++)o=i[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),s.nc=void 0;var o=s.O(void 0,[7874],(function(){return s(83642)}));o=s.O(o)}();
//# sourceMappingURL=settings-vue-settings-admin-basic-settings.js.map?v=a96658f3d3cd32da1229
/*! For license information please see theming-admin-theming.js.LICENSE.txt */
!function(){"use strict";var e,n={5076:function(e,n,r){var a=r(20144),i=r(79954),o=r(15961),l=r(4820),s=r(79753),u=["color","logo","background","logoheader","favicon","disable-user-theming"],d={emits:["update:theming"],data:function(){return{showSuccess:!1,errorMessage:""}},computed:{id:function(){return"admin-theming-".concat(this.name)}},methods:{reset:function(){this.showSuccess=!1,this.errorMessage=""},handleSuccess:function(){var e=this;this.showSuccess=!0,setTimeout((function(){e.showSuccess=!1}),2e3),u.includes(this.name)&&this.$emit("update:theming")}}};function c(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,l,"next",e)}function l(e){c(i,r,a,o,l,"throw",e)}o(void 0)}))}}var p={mixins:[d],watch:{value:function(e){this.localValue=e}},data:function(){return{localValue:this.value}},methods:{save:function(){var e=this;return m(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.reset(),n=(0,s.generateUrl)("/apps/theming/ajax/updateStylesheet"),r=!0===e.localValue?"yes":!1===e.localValue?"no":e.localValue,t.prev=3,t.next=6,l.default.post(n,{setting:e.name,value:r});case 6:e.$emit("update:value",e.localValue),e.handleSuccess(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.errorMessage=null===(a=t.t0.response.data.data)||void 0===a?void 0:a.message;case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},undo:function(){var e=this;return m(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.reset(),n=(0,s.generateUrl)("/apps/theming/ajax/undoChanges"),t.prev=2,t.next=5,l.default.post(n,{setting:e.name});case 5:e.$emit("update:value",e.defaultValue),e.handleSuccess(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.errorMessage=null===(r=t.t0.response.data.data)||void 0===r?void 0:r.message;case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()}}},g={name:"CheckboxField",components:{NcCheckboxRadioSwitch:o.rw,NcNoteCard:o.qf},mixins:[p],props:{name:{type:String,required:!0},value:{type:Boolean,required:!0},defaultValue:{type:Boolean,required:!0},displayName:{type:String,required:!0},label:{type:String,required:!0},description:{type:String,required:!0}}},h=r(93379),f=r.n(h),A=r(7795),v=r.n(A),y=r(90569),b=r.n(y),C=r(3565),x=r.n(C),N=r(19216),w=r.n(N),k=r(44589),_=r.n(k),S=r(17083),M={};M.styleTagTransform=_(),M.setAttributes=x(),M.insert=b().bind(null,"head"),M.domAPI=v(),M.insertStyleElement=w(),f()(S.Z,M),S.Z&&S.Z.locals&&S.Z.locals;var T=r(51900),I=(0,T.Z)(g,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"field"},[t("label",{attrs:{for:e.id}},[e._v(e._s(e.displayName))]),e._v(" "),t("div",{staticClass:"field__row"},[t("NcCheckboxRadioSwitch",{attrs:{type:"switch",id:e.id,checked:e.localValue},on:{"update:checked":[function(t){e.localValue=t},e.save]}},[e._v("\n\t\t\t"+e._s(e.label)+"\n\t\t")])],1),e._v(" "),t("p",{staticClass:"field__description"},[e._v(e._s(e.description))]),e._v(" "),e.errorMessage?t("NcNoteCard",{attrs:{type:"error","show-alert":!0}},[t("p",[e._v(e._s(e.errorMessage))])]):e._e()],1)}),[],!1,null,"17145f08",null).exports,L=r(20296),F=r(92425);function U(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){U(i,r,a,o,l,"next",e)}function l(e){U(i,r,a,o,l,"throw",e)}o(void 0)}))}}var j={name:"ColorPickerField",components:{NcButton:o.P2,NcColorPicker:o.m,NcNoteCard:o.qf,Undo:F.default},mixins:[p],props:{name:{type:String,required:!0},value:{type:String,required:!0},defaultValue:{type:String,required:!0},displayName:{type:String,required:!0}},methods:{debounceSave:(0,L.debounce)(P(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.save();case 2:case"end":return e.stop()}}),e,this)}))),200)}},D=r(4510),V={};V.styleTagTransform=_(),V.setAttributes=x(),V.insert=b().bind(null,"head"),V.domAPI=v(),V.insertStyleElement=w(),f()(D.Z,V),D.Z&&D.Z.locals&&D.Z.locals;var E=(0,T.Z)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"field"},[t("label",{attrs:{for:e.id}},[e._v(e._s(e.displayName))]),e._v(" "),t("div",{staticClass:"field__row"},[t("NcColorPicker",{attrs:{value:e.localValue,"advanced-fields":!0},on:{"update:value":[function(t){e.localValue=t},e.debounceSave]}},[t("NcButton",{staticClass:"field__button",attrs:{type:"primary",id:e.id,"aria-label":e.t("theming","Select a custom color"),"data-admin-theming-setting-primary-color-picker":""}},[e._v("\n\t\t\t\t"+e._s(e.value)+"\n\t\t\t")])],1),e._v(" "),e.value!==e.defaultValue?t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("theming","Reset to default"),"data-admin-theming-setting-primary-color-reset":""},on:{click:e.undo},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Undo",{attrs:{size:20}})]},proxy:!0}],null,!1,33666776)}):e._e()],1),e._v(" "),e.errorMessage?t("NcNoteCard",{attrs:{type:"error","show-alert":!0}},[t("p",[e._v(e._s(e.errorMessage))])]):e._e()],1)}),[],!1,null,"105820ba",null).exports,z=r(57612),R=r(75762);function B(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){B(i,r,a,o,l,"next",e)}function l(e){B(i,r,a,o,l,"throw",e)}o(void 0)}))}}var Z={name:"FileInputField",components:{Delete:z.Z,NcButton:o.P2,NcLoadingIcon:o.lb,NcNoteCard:o.qf,Undo:F.default,Upload:R.Z},mixins:[d],props:{name:{type:String,required:!0},mimeName:{type:String,required:!0},mimeValue:{type:String,required:!0},defaultMimeValue:{type:String,required:!0},displayName:{type:String,required:!0},ariaLabel:{type:String,required:!0}},data:function(){return{showLoading:!1}},computed:{showReset:function(){return this.mimeValue!==this.defaultMimeValue},showRemove:function(){if("background"===this.name){if(this.mimeValue.startsWith("image/"))return!0;if(this.mimeValue===this.defaultMimeValue)return!0}return!1}},methods:{activateLocalFilePicker:function(){this.reset(),this.$refs.input.value=null,this.$refs.input.click()},onChange:function(e){var t=this;return O(regeneratorRuntime.mark((function n(){var r,a,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.target.files[0],(a=new FormData).append("key",t.name),a.append("image",r),i=(0,s.generateUrl)("/apps/theming/ajax/uploadImage"),n.prev=5,t.showLoading=!0,n.next=9,l.default.post(i,a);case 9:t.showLoading=!1,t.$emit("update:mime-value",r.type),t.handleSuccess(),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(5),t.showLoading=!1,t.errorMessage=null===(o=n.t0.response.data.data)||void 0===o?void 0:o.message;case 18:case"end":return n.stop()}}),n,null,[[5,14]])})))()},undo:function(){var e=this;return O(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.reset(),n=(0,s.generateUrl)("/apps/theming/ajax/undoChanges"),t.prev=2,t.next=5,l.default.post(n,{setting:e.mimeName});case 5:e.$emit("update:mime-value",e.defaultMimeValue),e.handleSuccess(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.errorMessage=null===(r=t.t0.response.data.data)||void 0===r?void 0:r.message;case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},removeBackground:function(){var e=this;return O(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.reset(),n=(0,s.generateUrl)("/apps/theming/ajax/updateStylesheet"),t.prev=2,t.next=5,l.default.post(n,{setting:e.mimeName,value:"backgroundColor"});case 5:e.$emit("update:mime-value","backgroundColor"),e.handleSuccess(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.errorMessage=null===(r=t.t0.response.data.data)||void 0===r?void 0:r.message;case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()}}},Y=Z,q=r(78169),G={};G.styleTagTransform=_(),G.setAttributes=x(),G.insert=b().bind(null,"head"),G.domAPI=v(),G.insertStyleElement=w(),f()(q.Z,G),q.Z&&q.Z.locals&&q.Z.locals;var $=(0,T.Z)(Y,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"field"},[t("label",{attrs:{for:e.id}},[e._v(e._s(e.displayName))]),e._v(" "),t("div",{staticClass:"field__row"},[t("NcButton",{attrs:{type:"secondary",id:e.id,"aria-label":e.ariaLabel,"data-admin-theming-setting-file-picker":""},on:{click:e.activateLocalFilePicker},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Upload",{attrs:{size:20}})]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.t("theming","Upload"))+"\n\t\t")]),e._v(" "),e.showReset?t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("theming","Reset to default"),"data-admin-theming-setting-file-reset":""},on:{click:e.undo},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Undo",{attrs:{size:20}})]},proxy:!0}],null,!1,33666776)}):e._e(),e._v(" "),e.showRemove?t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("theming","Remove background image"),"data-admin-theming-setting-file-remove":""},on:{click:e.removeBackground},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Delete",{attrs:{size:20}})]},proxy:!0}],null,!1,2705356561)}):e._e(),e._v(" "),e.showLoading?t("NcLoadingIcon",{staticClass:"field__loading-icon",attrs:{size:20}}):e._e()],1),e._v(" "),"logoheader"!==e.name&&"favicon"!==e.name||e.mimeValue===e.defaultMimeValue?e._e():t("div",{staticClass:"field__preview",class:{"field__preview--logoheader":"logoheader"===e.name,"field__preview--favicon":"favicon"===e.name}}),e._v(" "),e.errorMessage?t("NcNoteCard",{attrs:{type:"error","show-alert":!0}},[t("p",[e._v(e._s(e.errorMessage))])]):e._e(),e._v(" "),t("input",{ref:"input",attrs:{type:"file"},on:{change:e.onChange}})],1)}),[],!1,null,"3d620660",null).exports,W={name:"TextField",components:{NcTextField:o.h3},mixins:[p],props:{name:{type:String,required:!0},value:{type:String,required:!0},defaultValue:{type:String,required:!0},type:{type:String,required:!0},displayName:{type:String,required:!0},placeholder:{type:String,required:!0},maxlength:{type:Number,required:!0}}},H=r(75012),Q={};Q.styleTagTransform=_(),Q.setAttributes=x(),Q.insert=b().bind(null,"head"),Q.domAPI=v(),Q.insertStyleElement=w(),f()(H.Z,Q),H.Z&&H.Z.locals&&H.Z.locals;var X=(0,T.Z)(W,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"field"},[t("NcTextField",{attrs:{value:e.localValue,label:e.displayName,"label-visible":!0,placeholder:e.placeholder,type:e.type,maxlength:e.maxlength,spellcheck:!1,success:e.showSuccess,error:Boolean(e.errorMessage),"helper-text":e.errorMessage,"show-trailing-button":e.value!==e.defaultValue,"trailing-button-icon":"undo"},on:{"update:value":function(t){e.localValue=t},"trailing-button-click":e.undo,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save.apply(null,arguments)},blur:e.save}})],1)}),[],!1,null,"21244e1d",null),J=X.exports,K=(0,i.j)("theming","adminThemingParameters"),ee=K.backgroundMime,te=K.canThemeIcons,ne=K.color,re=K.docUrl,ae=K.docUrlIcons,ie=K.faviconMime,oe=K.isThemable,le=K.legalNoticeUrl,se=K.logoheaderMime,ue=K.logoMime,de=K.name,ce=K.notThemableErrorMessage,me=K.privacyPolicyUrl,pe=K.slogan,ge=K.url,he=K.userThemingDisabled,fe=[{name:"name",value:de,defaultValue:"Nextcloud",type:"text",displayName:t("theming","Name"),placeholder:t("theming","Name"),maxlength:250},{name:"url",value:ge,defaultValue:"https://nextcloud.com",type:"url",displayName:t("theming","Web link"),placeholder:"https://…",maxlength:500},{name:"slogan",value:pe,defaultValue:t("theming","a safe home for all your data"),type:"text",displayName:t("theming","Slogan"),placeholder:t("theming","Slogan"),maxlength:500}],Ae={name:"color",value:ne,defaultValue:"#0082c9",displayName:t("theming","Color")},ve=[{name:"logo",mimeName:"logoMime",mimeValue:ue,defaultMimeValue:"",displayName:t("theming","Logo"),ariaLabel:t("theming","Upload new logo")},{name:"background",mimeName:"backgroundMime",mimeValue:ee,defaultMimeValue:"",displayName:t("theming","Background and login image"),ariaLabel:t("theming","Upload new background and login image")}],ye=[{name:"imprintUrl",value:le,defaultValue:"",type:"url",displayName:t("theming","Legal notice link"),placeholder:"https://…",maxlength:500},{name:"privacyUrl",value:me,defaultValue:"",type:"url",displayName:t("theming","Privacy policy link"),placeholder:"https://…",maxlength:500}],be=[{name:"logoheader",mimeName:"logoheaderMime",mimeValue:se,defaultMimeValue:"",displayName:t("theming","Header logo"),ariaLabel:t("theming","Upload new header logo")},{name:"favicon",mimeName:"faviconMime",mimeValue:ie,defaultMimeValue:"",displayName:t("theming","Favicon"),ariaLabel:t("theming","Upload new favicon")}],Ce={name:"disable-user-theming",value:he,defaultValue:!1,displayName:t("theming","User settings"),label:t("theming","Disable user theming"),description:t("theming","Although you can select and customize your instance, users can change their background and colors. If you want to enforce your customization, you can toggle this on.")},xe={name:"AdminTheming",components:{CheckboxField:I,ColorPickerField:E,FileInputField:$,NcNoteCard:o.qf,NcSettingsSection:o.gE,TextField:J},emits:["update:theming"],data:function(){return{textFields:fe,colorPickerField:Ae,fileInputFields:ve,advancedTextFields:ye,advancedFileInputFields:be,userThemingField:Ce,canThemeIcons:te,docUrl:re,docUrlIcons:ae,isThemable:oe,notThemableErrorMessage:ce}}},Ne=r(27247),we={};we.styleTagTransform=_(),we.setAttributes=x(),we.insert=b().bind(null,"head"),we.domAPI=v(),we.insertStyleElement=w(),f()(Ne.Z,we),Ne.Z&&Ne.Z.locals&&Ne.Z.locals;var ke=(0,T.Z)(xe,(function(){var e=this,t=e._self._c;return t("section",[t("NcSettingsSection",{attrs:{title:e.t("theming","Theming"),description:e.t("theming","Theming makes it possible to easily customize the look and feel of your instance and supported clients. This will be visible for all users."),"doc-url":e.docUrl,"data-admin-theming-settings":""}},[t("div",{staticClass:"admin-theming"},[e.isThemable?e._e():t("NcNoteCard",{attrs:{type:"error","show-alert":!0}},[t("p",[e._v(e._s(e.notThemableErrorMessage))])]),e._v(" "),e._l(e.textFields,(function(n){return t("TextField",{key:n.name,attrs:{"data-admin-theming-setting-field":n.name,"default-value":n.defaultValue,"display-name":n.displayName,maxlength:n.maxlength,name:n.name,placeholder:n.placeholder,type:n.type,value:n.value},on:{"update:value":function(t){return e.$set(n,"value",t)},"update:theming":function(t){return e.$emit("update:theming")}}})})),e._v(" "),t("ColorPickerField",{attrs:{name:e.colorPickerField.name,"default-value":e.colorPickerField.defaultValue,"display-name":e.colorPickerField.displayName,value:e.colorPickerField.value,"data-admin-theming-setting-primary-color":""},on:{"update:value":function(t){return e.$set(e.colorPickerField,"value",t)},"update:theming":function(t){return e.$emit("update:theming")}}}),e._v(" "),e._l(e.fileInputFields,(function(n){return t("FileInputField",{key:n.name,attrs:{"aria-label":n.ariaLabel,"data-admin-theming-setting-file":n.name,"default-mime-value":n.defaultMimeValue,"display-name":n.displayName,"mime-name":n.mimeName,"mime-value":n.mimeValue,name:n.name},on:{"update:mimeValue":function(t){return e.$set(n,"mimeValue",t)},"update:mime-value":function(t){return e.$set(n,"mimeValue",t)},"update:theming":function(t){return e.$emit("update:theming")}}})})),e._v(" "),t("div",{staticClass:"admin-theming__preview",attrs:{"data-admin-theming-preview":""}},[t("div",{staticClass:"admin-theming__preview-logo",attrs:{"data-admin-theming-preview-logo":""}})])],2)]),e._v(" "),t("NcSettingsSection",{attrs:{title:e.t("theming","Advanced options")}},[t("div",{staticClass:"admin-theming-advanced"},[e._l(e.advancedTextFields,(function(n){return t("TextField",{key:n.name,attrs:{name:n.name,value:n.value,"default-value":n.defaultValue,type:n.type,"display-name":n.displayName,placeholder:n.placeholder,maxlength:n.maxlength},on:{"update:value":function(t){return e.$set(n,"value",t)},"update:theming":function(t){return e.$emit("update:theming")}}})})),e._v(" "),e._l(e.advancedFileInputFields,(function(n){return t("FileInputField",{key:n.name,attrs:{name:n.name,"mime-name":n.mimeName,"mime-value":n.mimeValue,"default-mime-value":n.defaultMimeValue,"display-name":n.displayName,"aria-label":n.ariaLabel},on:{"update:mimeValue":function(t){return e.$set(n,"mimeValue",t)},"update:mime-value":function(t){return e.$set(n,"mimeValue",t)},"update:theming":function(t){return e.$emit("update:theming")}}})})),e._v(" "),t("CheckboxField",{attrs:{name:e.userThemingField.name,value:e.userThemingField.value,"default-value":e.userThemingField.defaultValue,"display-name":e.userThemingField.displayName,label:e.userThemingField.label,description:e.userThemingField.description,"data-admin-theming-setting-disable-user-theming":""},on:{"update:theming":function(t){return e.$emit("update:theming")}}}),e._v(" "),e.canThemeIcons?e._e():t("a",{attrs:{href:e.docUrlIcons,rel:"noreferrer noopener"}},[t("em",[e._v(e._s(e.t("theming","Install the ImageMagick PHP extension with support for SVG images to automatically generate favicons based on the uploaded logo and color.")))])])],2)])],1)}),[],!1,null,"4f7ac635",null).exports;function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}a.ZP.prototype.OC=OC,a.ZP.prototype.t=t;var Se=new(a.ZP.extend(ke));Se.$mount("#admin-theming"),Se.$on("update:theming",(function(){var e;(e=document.head.querySelectorAll("link.theme"),function(e){if(Array.isArray(e))return _e(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_e(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){var t=new URL(e.href);t.searchParams.set("v",Date.now());var n=e.cloneNode();n.href=t.toString(),n.onload=function(){return e.remove()},document.head.append(n)}))}))},27247:function(e,t,n){var r=n(87537),a=n.n(r),i=n(23645),o=n.n(i),l=n(61667),s=n.n(l),u=new URL(n(92770),n.b),d=o()(a()),c=s()(u);d.push([e.id,".admin-theming[data-v-4f7ac635],.admin-theming-advanced[data-v-4f7ac635]{display:flex;flex-direction:column;gap:8px 0}.admin-theming__preview[data-v-4f7ac635]{width:230px;height:140px;background-size:cover;background-position:center;text-align:center;margin-top:10px;background-color:var(--color-primary-default, #0082c9);background-image:var(--image-background-plain, var(--image-background-default, linear-gradient(40deg, #0082c9 0%, #30b6ff 100%)))}.admin-theming__preview-logo[data-v-4f7ac635]{width:20%;height:20%;margin-top:20px;display:inline-block;background-size:contain;background-position:center;background-repeat:no-repeat;background-image:var(--image-logo, url("+c+"))}","",{version:3,sources:["webpack://./apps/theming/src/AdminTheming.vue"],names:[],mappings:"AACA,yEAEC,YAAA,CACA,qBAAA,CACA,SAAA,CAIA,yCACC,WAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CAIA,sDAAA,CAKA,iIAAA,CAEA,8CACC,SAAA,CACA,UAAA,CACA,eAAA,CACA,oBAAA,CACA,uBAAA,CACA,0BAAA,CACA,2BAAA,CACA,2EAAA",sourcesContent:["\r\n.admin-theming,\r\n.admin-theming-advanced {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 8px 0;\r\n}\r\n\r\n.admin-theming {\r\n\t&__preview {\r\n\t\twidth: 230px;\r\n\t\theight: 140px;\r\n\t\tbackground-size: cover;\r\n\t\tbackground-position: center;\r\n\t\ttext-align: center;\r\n\t\tmargin-top: 10px;\r\n\t\t/* This is basically https://github.com/nextcloud/server/blob/master/core/css/guest.css\r\n\t\t   But without the user variables. That way the admin can preview the render as guest*/\r\n\t\t/* As guest, there is no user color color-background-plain */\r\n\t\tbackground-color: var(--color-primary-default, #0082c9);\r\n\t\t/* As guest, there is no user background (--image-background)\r\n\t\t1. Empty background if defined\r\n\t\t2. Else default background\r\n\t\t3. Finally default gradient (should not happened, the background is always defined anyway) */\r\n\t\tbackground-image: var(--image-background-plain, var(--image-background-default, linear-gradient(40deg, #0082c9 0%, #30b6ff 100%)));\r\n\r\n\t\t&-logo {\r\n\t\t\twidth: 20%;\r\n\t\t\theight: 20%;\r\n\t\t\tmargin-top: 20px;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tbackground-size: contain;\r\n\t\t\tbackground-position: center;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tbackground-image: var(--image-logo, url('../../../core/img/logo/logo.svg'));\r\n\t\t}\r\n\t}\r\n}\r\n"],sourceRoot:""}]),t.Z=d},17083:function(e,t,n){var r=n(87537),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,".field[data-v-17145f08]{display:flex;flex-direction:column;gap:4px 0}.field__row[data-v-17145f08]{display:flex;gap:0 4px}.field__description[data-v-17145f08]{color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./apps/theming/src/components/admin/shared/field.scss","webpack://./apps/theming/src/components/admin/CheckboxField.vue"],names:[],mappings:"AAsBA,wBACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,6BACC,YAAA,CACA,SAAA,CCzBD,qCACC,mCAAA",sourcesContent:["/**\r\n * @copyright 2022 Christopher Ng <chrng8@gmail.com>\r\n *\r\n * @author Christopher Ng <chrng8@gmail.com>\r\n *\r\n * @license AGPL-3.0-or-later\r\n *\r\n * This program is free software: you can redistribute it and/or modify\r\n * it under the terms of the GNU Affero General Public License as\r\n * published by the Free Software Foundation, either version 3 of the\r\n * License, or (at your option) any later version.\r\n *\r\n * This program is distributed in the hope that it will be useful,\r\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\r\n * GNU Affero General Public License for more details.\r\n *\r\n * You should have received a copy of the GNU Affero General Public License\r\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\r\n *\r\n */\r\n\r\n.field {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 4px 0;\r\n\r\n\t&__row {\r\n\t\tdisplay: flex;\r\n\t\tgap: 0 4px;\r\n\t}\r\n}\r\n","\r\n@import './shared/field.scss';\r\n\r\n.field {\r\n\t&__description {\r\n\t\tcolor: var(--color-text-maxcontrast);\r\n\t}\r\n}\r\n"],sourceRoot:""}]),t.Z=o},4510:function(e,t,n){var r=n(87537),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,".field[data-v-105820ba]{display:flex;flex-direction:column;gap:4px 0}.field__row[data-v-105820ba]{display:flex;gap:0 4px}.field__button[data-v-105820ba]{width:230px !important;border-radius:var(--border-radius-large) !important;background-color:var(--color-primary-default) !important}.field__button[data-v-105820ba]:hover{background-color:var(--color-primary-element-default-hover) !important}","",{version:3,sources:["webpack://./apps/theming/src/components/admin/shared/field.scss","webpack://./apps/theming/src/components/admin/ColorPickerField.vue"],names:[],mappings:"AAsBA,wBACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,6BACC,YAAA,CACA,SAAA,CCxBD,gCACC,sBAAA,CACA,mDAAA,CACA,wDAAA,CACA,sCACC,sEAAA",sourcesContent:["/**\r\n * @copyright 2022 Christopher Ng <chrng8@gmail.com>\r\n *\r\n * @author Christopher Ng <chrng8@gmail.com>\r\n *\r\n * @license AGPL-3.0-or-later\r\n *\r\n * This program is free software: you can redistribute it and/or modify\r\n * it under the terms of the GNU Affero General Public License as\r\n * published by the Free Software Foundation, either version 3 of the\r\n * License, or (at your option) any later version.\r\n *\r\n * This program is distributed in the hope that it will be useful,\r\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\r\n * GNU Affero General Public License for more details.\r\n *\r\n * You should have received a copy of the GNU Affero General Public License\r\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\r\n *\r\n */\r\n\r\n.field {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 4px 0;\r\n\r\n\t&__row {\r\n\t\tdisplay: flex;\r\n\t\tgap: 0 4px;\r\n\t}\r\n}\r\n","\r\n@import './shared/field.scss';\r\n\r\n.field {\r\n\t// Override default NcButton styles\r\n\t&__button {\r\n\t\twidth: 230px !important;\r\n\t\tborder-radius: var(--border-radius-large) !important;\r\n\t\tbackground-color: var(--color-primary-default) !important;\r\n\t\t&:hover {\r\n\t\t\tbackground-color: var(--color-primary-element-default-hover) !important;\r\n\t\t}\r\n\t}\r\n}\r\n"],sourceRoot:""}]),t.Z=o},78169:function(e,t,n){var r=n(87537),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,".field[data-v-3d620660]{display:flex;flex-direction:column;gap:4px 0}.field__row[data-v-3d620660]{display:flex;gap:0 4px}.field__loading-icon[data-v-3d620660]{width:44px;height:44px}.field__preview[data-v-3d620660]{width:70px;height:70px;background-size:contain;background-position:center;background-repeat:no-repeat;margin:10px 0}.field__preview--logoheader[data-v-3d620660]{background-image:var(--image-logoheader)}.field__preview--favicon[data-v-3d620660]{background-image:var(--image-favicon)}input[type=file][data-v-3d620660]{display:none}","",{version:3,sources:["webpack://./apps/theming/src/components/admin/shared/field.scss","webpack://./apps/theming/src/components/admin/FileInputField.vue"],names:[],mappings:"AAsBA,wBACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,6BACC,YAAA,CACA,SAAA,CCzBD,sCACC,UAAA,CACA,WAAA,CAGD,iCACC,UAAA,CACA,WAAA,CACA,uBAAA,CACA,0BAAA,CACA,2BAAA,CACA,aAAA,CAEA,6CACC,wCAAA,CAGD,0CACC,qCAAA,CAKH,kCACC,YAAA",sourcesContent:["/**\r\n * @copyright 2022 Christopher Ng <chrng8@gmail.com>\r\n *\r\n * @author Christopher Ng <chrng8@gmail.com>\r\n *\r\n * @license AGPL-3.0-or-later\r\n *\r\n * This program is free software: you can redistribute it and/or modify\r\n * it under the terms of the GNU Affero General Public License as\r\n * published by the Free Software Foundation, either version 3 of the\r\n * License, or (at your option) any later version.\r\n *\r\n * This program is distributed in the hope that it will be useful,\r\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\r\n * GNU Affero General Public License for more details.\r\n *\r\n * You should have received a copy of the GNU Affero General Public License\r\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\r\n *\r\n */\r\n\r\n.field {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 4px 0;\r\n\r\n\t&__row {\r\n\t\tdisplay: flex;\r\n\t\tgap: 0 4px;\r\n\t}\r\n}\r\n","\r\n@import './shared/field.scss';\r\n\r\n.field {\r\n\t&__loading-icon {\r\n\t\twidth: 44px;\r\n\t\theight: 44px;\r\n\t}\r\n\r\n\t&__preview {\r\n\t\twidth: 70px;\r\n\t\theight: 70px;\r\n\t\tbackground-size: contain;\r\n\t\tbackground-position: center;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tmargin: 10px 0;\r\n\r\n\t\t&--logoheader {\r\n\t\t\tbackground-image: var(--image-logoheader);\r\n\t\t}\r\n\r\n\t\t&--favicon {\r\n\t\t\tbackground-image: var(--image-favicon);\r\n\t\t}\r\n\t}\r\n}\r\n\r\ninput[type=\"file\"] {\r\n\tdisplay: none;\r\n}\r\n"],sourceRoot:""}]),t.Z=o},75012:function(e,t,n){var r=n(87537),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,".field[data-v-21244e1d]{max-width:400px}","",{version:3,sources:["webpack://./apps/theming/src/components/admin/TextField.vue"],names:[],mappings:"AACA,wBACC,eAAA",sourcesContent:["\r\n.field {\r\n\tmax-width: 400px;\r\n}\r\n"],sourceRoot:""}]),t.Z=o},92770:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjEyOCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjU2IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTI4IDdjLTI1Ljg3MSAwLTQ3LjgxNyAxNy40ODUtNTQuNzEzIDQxLjIwOS01Ljk3OTUtMTIuNDYxLTE4LjY0Mi0yMS4yMDktMzMuMjg3LTIxLjIwOS0yMC4zMDQgMC0zNyAxNi42OTYtMzcgMzdzMTYuNjk2IDM3IDM3IDM3YzE0LjY0NSAwIDI3LjMwOC04Ljc0ODEgMzMuMjg3LTIxLjIwOSA2Ljg5NTcgMjMuNzI0IDI4Ljg0MiA0MS4yMDkgNTQuNzEzIDQxLjIwOXM0Ny44MTctMTcuNDg1IDU0LjcxMy00MS4yMDljNS45Nzk1IDEyLjQ2MSAxOC42NDIgMjEuMjA5IDMzLjI4NyAyMS4yMDkgMjAuMzA0IDAgMzctMTYuNjk2IDM3LTM3cy0xNi42OTYtMzctMzctMzdjLTE0LjY0NSAwLTI3LjMwOCA4Ljc0ODEtMzMuMjg3IDIxLjIwOS02Ljg5NTctMjMuNzI0LTI4Ljg0Mi00MS4yMDktNTQuNzEzLTQxLjIwOXptMCAyMmMxOS40NiAwIDM1IDE1LjU0IDM1IDM1cy0xNS41NCAzNS0zNSAzNS0zNS0xNS41NC0zNS0zNSAxNS41NC0zNSAzNS0zNXptLTg4IDIwYzguNDE0NiAwIDE1IDYuNTg1NCAxNSAxNXMtNi41ODU0IDE1LTE1IDE1LTE1LTYuNTg1NC0xNS0xNSA2LjU4NTQtMTUgMTUtMTV6bTE3NiAwYzguNDE0NiAwIDE1IDYuNTg1NCAxNSAxNXMtNi41ODU0IDE1LTE1IDE1LTE1LTYuNTg1NC0xNS0xNSA2LjU4NTQtMTUgMTUtMTV6IiBjb2xvcj0iIzAwMDAwMCIgZmlsbD0iI2ZmZiIgc3R5bGU9Ii1pbmtzY2FwZS1zdHJva2U6bm9uZSIvPjwvc3ZnPg0K"}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=n,e=[],a.O=function(t,n,r,i){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],i=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<o&&(o=i));if(l){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.j=5544,function(){a.b=document.baseURI||self.location.href;var e={5544:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,o=n[0],l=n[1],s=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(t&&t(n);u<o.length;u++)i=o[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),a.nc=void 0;var i=a.O(void 0,[7874],(function(){return a(5076)}));i=a.O(i)}();
//# sourceMappingURL=theming-admin-theming.js.map?v=96953889a84f58fe6ad3
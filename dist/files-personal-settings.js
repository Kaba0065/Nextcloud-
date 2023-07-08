/*! For license information please see files-personal-settings.js.LICENSE.txt */
(()=>{"use strict";var e,r={76703:(e,r,s)=>{var n=s(20144),i=s(77958),o=s(18574),a=s(20296),l=s.n(a),c=s(79753),d=s(3255),u=s(36456),p=s.n(u),f=s(10861),h=s.n(f);const g=(0,s(17499).IY)().setApp("files").detectUser().build(),m=(0,d.fn)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setModal(!0).setType(1).allowDirectories().build(),v={name:"TransferOwnershipDialogue",components:{NcSelect:p(),NcButton:h()},data:()=>({directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}),computed:{canSubmit(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions(){return Object.keys(this.userSuggestions).map((e=>{const t=this.userSuggestions[e];return{user:t.uid,displayName:t.displayName,icon:"icon-user"}}))},submitButtonText(){if(!this.canSubmit)return t("files","Transfer");const e=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:e[e.length-1],userid:this.selectedUser.displayName})},readableDirectory(){return this.directory?this.directory.substring(1):""}},created(){this.findUserDebounced=l()(this.findUser,300),this.findUser("")},methods:{start(){this.directoryPickerError=void 0,m.pick().then((e=>""===e?"/":e)).then((e=>{if(g.debug("path ".concat(e," selected for transferring ownership")),!e.startsWith("/"))throw new Error(t("files","Invalid path selected"));this.directory=e})).catch((e=>{g.error("Selecting object for transfer aborted: ".concat(e.message||"Unknown error"),{error:e}),this.directoryPickerError=e.message||t("files","Unknown error")}))},async findUser(e){if(this.query=e.trim(),!(e.length<this.config.minSearchStringLength)){this.loadingUsers=!0;try{const t=await o.Z.get((0,c.generateOcsUrl)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:e,perPage:20,lookup:!1}});this.userSuggestions={},t.data.ocs.data.exact.users.concat(t.data.ocs.data.users).forEach((e=>{n.default.set(this.userSuggestions,e.value.shareWith,{uid:e.value.shareWith,displayName:e.label})}))}catch(e){g.error("could not fetch users",{error:e})}finally{this.loadingUsers=!1}}},submit(){this.canSubmit||g.warn("ignoring form submit"),this.submitError=void 0;const e={path:this.directory,recipient:this.selectedUser.user};g.debug("submit transfer ownership form",e);const r=(0,c.generateOcsUrl)("apps/files/api/v1/transferownership");o.Z.post(r,e).then((e=>e.data)).then((e=>{g.info("Transfer ownership request sent",{data:e}),this.directory=void 0,this.selectedUser=null,(0,d.s$)(t("files","Ownership transfer request sent"))})).catch((e=>{var r;g.error("Could not send ownership transfer request",{error:e}),403===(null==e||null===(r=e.response)||void 0===r?void 0:r.status)?this.submitError=t("files","Cannot transfer ownership of a file or folder you do not own"):this.submitError=e.message||t("files","Unknown error")}))}}};var b=s(93379),w=s.n(b),A=s(7795),y=s.n(A),C=s(90569),_=s.n(C),x=s(3565),S=s.n(x),U=s(19216),O=s.n(U),k=s(44589),T=s.n(k),E=s(10247),D={};D.styleTagTransform=T(),D.setAttributes=S(),D.insert=_().bind(null,"head"),D.domAPI=y(),D.insertStyleElement=O(),w()(E.Z,D),E.Z&&E.Z.locals&&E.Z.locals;var j=s(51900);const B={name:"PersonalSettings",components:{TransferOwnershipDialogue:(0,j.Z)(v,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.t("files","Transfer ownership of a file or folder"))+" ")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("p",{staticClass:"transfer-select-row"},[t("span",[e._v(e._s(e.readableDirectory))]),e._v(" "),void 0===e.directory?t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Change"))+"\n\t\t\t")]),e._v(" "),t("span",{staticClass:"error"},[e._v(e._s(e.directoryPickerError))])],1),e._v(" "),t("p",{staticClass:"new-owner-row"},[t("label",{attrs:{for:"targetUser"}},[t("span",[e._v(e._s(e.t("files","New owner")))])]),e._v(" "),t("NcSelect",{staticClass:"middle-align",attrs:{"input-id":"targetUser",options:e.formatedUserSuggestions,multiple:!1,loading:e.loadingUsers,label:"displayName","user-select":!0},on:{search:e.findUserDebounced},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1),e._v(" "),t("p",[t("input",{staticClass:"primary",attrs:{type:"submit",disabled:!e.canSubmit},domProps:{value:e.submitButtonText}}),e._v(" "),t("span",{staticClass:"error"},[e._v(e._s(e.submitError))])])])])}),[],!1,null,"0410c550",null).exports}},N=(0,j.Z)(B,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[t("h2",[e._v(e._s(e.t("files","Files")))]),e._v(" "),t("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;s.nc=btoa((0,i.IH)()),n.default.prototype.t=t,window.TESTING||(new(n.default.extend(N))).$mount("#files-personal-settings")},10247:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(87537),n=r.n(s),i=r(23645),o=r.n(i)()(n());o.push([e.id,".middle-align[data-v-0410c550]{vertical-align:middle}p[data-v-0410c550]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-0410c550]{display:flex}.new-owner-row label[data-v-0410c550]{display:flex;align-items:center}.new-owner-row label span[data-v-0410c550]{margin-right:8px}.new-owner-row .multiselect[data-v-0410c550]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-0410c550]{margin-right:8px}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AACA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CAEA,2CACC,gBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,gBAAA",sourcesContent:["\n.middle-align {\n\tvertical-align: middle;\n}\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n.new-owner-row {\n\tdisplay: flex;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\tspan {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmax-width: 280px;\n\t}\n}\n.transfer-select-row {\n\tspan {\n\t\tmargin-right: 8px;\n\t}\n}\n"],sourceRoot:""}]);const a=o}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=r,e=[],n.O=(t,r,s,i)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],i=e[d][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,s,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=1623,(()=>{n.b=document.baseURI||self.location.href;var e={1623:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,i,o=r[0],a=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var d=l(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var i=n.O(void 0,[7874],(()=>n(76703)));i=n.O(i)})();
//# sourceMappingURL=files-personal-settings.js.map?v=4372d3ab1f1752eea2e7
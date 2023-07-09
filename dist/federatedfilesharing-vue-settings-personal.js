(()=>{"use strict";var e,r={92546:(e,r,i)=>{var o=i(20144),n=i(77958),a=i(31352),l=(i(36144),i(3255)),s=i(79954),c=i(13299),d=i.n(c),u=i(10861),p=i.n(u);const f={name:"TwitterIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var h=i(51900);const g=(0,h.Z)(f,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon twitter-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,C={name:"FacebookIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},m=(0,h.Z)(C,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon facebook-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var b=i(97859);const v={name:"ClipboardIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=(0,h.Z)(v,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon clipboard-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,A={name:"PersonalSettings",components:{NcButton:p(),NcSettingsSection:d(),Twitter:g,Facebook:m,Web:b.default,Clipboard:y},data:()=>({color:(0,s.j)("federatedfilesharing","color"),textColor:(0,s.j)("federatedfilesharing","textColor"),logoPath:(0,s.j)("federatedfilesharing","logoPath"),reference:(0,s.j)("federatedfilesharing","reference"),cloudId:(0,s.j)("federatedfilesharing","cloudId"),docUrlFederated:(0,s.j)("federatedfilesharing","docUrlFederated"),showHtml:!1,isCopied:!1}),computed:{messageWithURL(){return t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID, see {url}",{url:this.reference})},messageWithoutURL:()=>t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID"),shareDiasporaUrl(){return"https://share.diasporafoundation.org/?title=".concat(encodeURIComponent(this.messageWithoutURL),"&url=").concat(encodeURIComponent(this.reference))},shareTwitterUrl(){return"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(this.messageWithURL))},shareFacebookUrl(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(this.reference))},logoPathAbsolute(){return window.location.protocol+"//"+window.location.host+this.logoPath},backgroundStyle(){return"padding:10px;background-color:".concat(this.color,";color:").concat(this.textColor,";border-radius:3px;padding-left:4px;")},linkStyle(){return"background-image:url(".concat(this.logoPathAbsolute,");width:50px;height:30px;position:relative;top:8px;background-size:contain;display:inline-block;background-repeat:no-repeat; background-position: center center;")},htmlCode(){return'<a target="_blank" rel="noreferrer noopener" href="'.concat(this.reference,'" style="').concat(this.backgroundStyle,'">\n\t<span style="').concat(this.linkStyle,'"></span>\n\t').concat(t("federatedfilesharing","Share with me via Nextcloud"),"\n</a>")},copyLinkTooltip(){return this.isCopied?t("federatedfilesharing","Cloud ID copied to the clipboard"):t("federatedfilesharing","Copy to clipboard")}},methods:{async copyCloudId(){navigator.clipboard?(await navigator.clipboard.writeText(this.cloudId),this.isCopied=!0,(0,l.s$)(t("federatedfilesharing","Copied!")),this.$refs.clipboard.$el.focus()):(0,l.x2)(t("federatedfilesharing","Clipboard is not available"))},goTo(t){window.location.href=t}}};var _=i(93379),x=i.n(_),w=i(7795),k=i.n(w),I=i(90569),M=i.n(I),S=i(3565),T=i.n(S),D=i(19216),N=i.n(D),j=i(44589),z=i.n(j),Z=i(41832),H={};H.styleTagTransform=z(),H.setAttributes=T(),H.insert=M().bind(null,"head"),H.domAPI=k(),H.insertStyleElement=N(),x()(Z.Z,H),Z.Z&&Z.Z.locals&&Z.Z.locals;const B=(0,h.Z)(A,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.t("federatedfilesharing","Federated Cloud"),description:t.t("federatedfilesharing","You can share with anyone who uses a Nextcloud server or other Open Cloud Mesh (OCM) compatible servers and services! Just put their Federated Cloud ID in the share dialog. It looks like person@cloud.example.com"),"doc-url":t.docUrlFederated}},[e("p",{staticClass:"cloud-id-text"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Your Federated Cloud ID:"))+"\n\t\t"),e("strong",{attrs:{id:"cloudid"}},[t._v(t._s(t.cloudId))]),t._v(" "),e("NcButton",{ref:"clipboard",staticClass:"clipboard",attrs:{title:t.copyLinkTooltip,"aria-label":t.copyLinkTooltip,type:"tertiary-no-background"},on:{click:function(e){return e.preventDefault(),t.copyCloudId.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Clipboard",{attrs:{size:20}})]},proxy:!0}])})],1),t._v(" "),e("p",{staticClass:"social-button"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Share it so your friends can share files with you:"))),e("br"),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareFacebookUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Facebook",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Facebook"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareTwitterUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Twitter",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Twitter"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareDiasporaUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{attrs:{width:"20",height:"20",viewBox:"-10 -5 1034 1034",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"currentColor",d:"M502 197q-96 0-96.5 1.5t-1.5 137-1.5 138-2 2.5T266 432.5 132.5 390t-30 94T74 578l232 77q21 8 21 10t-79.5 117.5T168 899t79.5 56.5T328 1011t81-110 82-110 41 55l83 115q43 60 44 60t79.5-58 79-59-76-112.5-76-113.5T795 632.5t129.5-44-28-94T867 400t-128 42-128.5 43-2.5-7.5-1-38.5l-3-108q-4-133-5-133.5t-97-.5z"}})])]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Diaspora"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){t.showHtml=!t.showHtml}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Web",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Add to your website"))+"\n\t\t")])],1),t._v(" "),t.showHtml?[e("p",{staticStyle:{margin:"10px 0"}},[e("a",{style:t.backgroundStyle,attrs:{target:"_blank",rel:"noreferrer noopener",href:t.reference}},[e("span",{style:t.linkStyle}),t._v("\n\t\t\t\t"+t._s(t.t("federatedfilesharing","Share with me via Nextcloud"))+"\n\t\t\t")])]),t._v(" "),e("p",[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","HTML Code:"))+"\n\t\t\t"),e("br"),t._v(" "),e("pre",[t._v(t._s(t.htmlCode))])])]:t._e()],2)}),[],!1,null,"5b277ff8",null).exports;i.nc=btoa((0,n.IH)()),o.default.mixin({methods:{t:a.Iu}}),(new(o.default.extend(B))).$mount("#vue-personal-federated")},41832:(t,e,r)=>{r.d(e,{Z:()=>l});var i=r(87537),o=r.n(i),n=r(23645),a=r.n(n)()(o());a.push([t.id,".social-button[data-v-5b277ff8]{margin-top:.5rem}.social-button button[data-v-5b277ff8]{display:inline-flex;margin-left:.5rem;margin-top:1rem}.cloud-id-text[data-v-5b277ff8]{display:flex;align-items:center}.cloud-id-text button[data-v-5b277ff8]{display:inline-flex}pre[data-v-5b277ff8]{margin-top:0;white-space:pre-wrap}#cloudid[data-v-5b277ff8]{margin-left:.25rem}","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,gCACC,gBAAA,CACA,uCACC,mBAAA,CACA,iBAAA,CACA,eAAA,CAGF,gCACC,YAAA,CACA,kBAAA,CACA,uCACC,mBAAA,CAGF,qBACC,YAAA,CACA,oBAAA,CAED,0BACC,kBAAA",sourcesContent:["\n.social-button {\n\tmargin-top: 0.5rem;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t\tmargin-left: 0.5rem;\n\t\tmargin-top: 1rem;\n\t}\n}\n.cloud-id-text {\n\tdisplay: flex;\n\talign-items: center;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t}\n}\npre {\n\tmargin-top: 0;\n\twhite-space: pre-wrap;\n}\n#cloudid {\n\tmargin-left: 0.25rem;\n}\n"],sourceRoot:""}]);const l=a},81490:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,e=[],o.O=(t,r,i,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],n=e[d][2];for(var l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(o.O).every((t=>o.O[t](r[s])))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,i,n]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=5855,(()=>{o.b=document.baseURI||self.location.href;var t={5855:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var i,n,a=r[0],l=r[1],s=r[2],c=0;if(a.some((e=>0!==t[e]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var d=s(o)}for(e&&e(r);c<a.length;c++)n=a[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.nc=void 0;var n=o.O(void 0,[7874],(()=>o(92546)));n=o.O(n)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-personal.js.map?v=46a0cb0c9d4090856b70
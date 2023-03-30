!function(){"use strict";var e,n={30157:function(e,n,r){var o=r(20144),i=r(45994),a=r(31352),c=(r(36144),r(64024)),l=r(79954),s=r(13299),d=r.n(s),u=r(10861),f=r.n(u),p=r(67185),h=r(1381),g=r(97859),m=r(70386);function v(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}var b={name:"PersonalSettings",components:{NcButton:f(),NcSettingsSection:d(),Twitter:p.Z,Facebook:h.Z,Web:g.default,Clipboard:m.Z},data:function(){return{color:(0,l.j)("federatedfilesharing","color"),textColor:(0,l.j)("federatedfilesharing","textColor"),logoPath:(0,l.j)("federatedfilesharing","logoPath"),reference:(0,l.j)("federatedfilesharing","reference"),cloudId:(0,l.j)("federatedfilesharing","cloudId"),docUrlFederated:(0,l.j)("federatedfilesharing","docUrlFederated"),showHtml:!1,isCopied:!1}},computed:{messageWithURL:function(){return t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID, see {url}",{url:this.reference})},messageWithoutURL:function(){return t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID")},shareDiasporaUrl:function(){return"https://share.diasporafoundation.org/?title=".concat(encodeURIComponent(this.messageWithoutURL),"&url=").concat(encodeURIComponent(this.reference))},shareTwitterUrl:function(){return"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(this.messageWithURL))},shareFacebookUrl:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(this.reference))},logoPathAbsolute:function(){return window.location.protocol+"//"+window.location.host+this.logoPath},backgroundStyle:function(){return"padding:10px;background-color:".concat(this.color,";color:").concat(this.textColor,";border-radius:3px;padding-left:4px;")},linkStyle:function(){return"background-image:url(".concat(this.logoPathAbsolute,");width:50px;height:30px;position:relative;top:8px;background-size:contain;display:inline-block;background-repeat:no-repeat; background-position: center center;")},htmlCode:function(){return'<a target="_blank" rel="noreferrer noopener" href="'.concat(this.reference,'" style="').concat(this.backgroundStyle,'">\n\t<span style="').concat(this.linkStyle,'"></span>\n\t').concat(t("federatedfilesharing","Share with me via Nextcloud"),"\n</a>")},copyLinkTooltip:function(){return this.isCopied?t("federatedfilesharing","Cloud ID copied to the clipboard"):t("federatedfilesharing","Copy to clipboard")}},methods:{copyCloudId:function(){var e,n=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=3;break}return(0,c.x2)(t("federatedfilesharing","Clipboard is not available")),e.abrupt("return");case 3:return e.next=5,navigator.clipboard.writeText(n.cloudId);case 5:n.isCopied=!0,(0,c.s$)(t("federatedfilesharing","Copied!")),n.$refs.clipboard.$el.focus();case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(t){v(i,r,o,a,c,"next",t)}function c(t){v(i,r,o,a,c,"throw",t)}a(void 0)}))})()},goTo:function(t){window.location.href=t}}},y=b,A=r(93379),C=r.n(A),x=r(7795),w=r.n(x),I=r(90569),k=r.n(I),_=r(3565),M=r.n(_),T=r(19216),D=r.n(T),S=r(44589),j=r.n(S),N=r(41832),Z={};Z.styleTagTransform=j(),Z.setAttributes=M(),Z.insert=k().bind(null,"head"),Z.domAPI=w(),Z.insertStyleElement=D(),C()(N.Z,Z),N.Z&&N.Z.locals&&N.Z.locals;var P=(0,r(51900).Z)(y,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.t("federatedfilesharing","Federated Cloud"),description:t.t("federatedfilesharing","You can share with anyone who uses a Nextcloud server or other Open Cloud Mesh (OCM) compatible servers and services! Just put their Federated Cloud ID in the share dialog. It looks like person@cloud.example.com"),"doc-url":t.docUrlFederated}},[e("p",{staticClass:"cloud-id-text"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Your Federated Cloud ID:"))+"\n\t\t"),e("strong",{attrs:{id:"cloudid"}},[t._v(t._s(t.cloudId))]),t._v(" "),e("NcButton",{ref:"clipboard",staticClass:"clipboard",attrs:{title:t.copyLinkTooltip,"aria-label":t.copyLinkTooltip,type:"tertiary-no-background"},on:{click:function(e){return e.preventDefault(),t.copyCloudId.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Clipboard",{attrs:{size:20}})]},proxy:!0}])})],1),t._v(" "),e("p",{staticClass:"social-button"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Share it so your friends can share files with you:"))),e("br"),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareFacebookUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Facebook",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Facebook"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareTwitterUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Twitter",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Twitter"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareDiasporaUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{attrs:{width:"20",height:"20",viewBox:"-10 -5 1034 1034",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"currentColor",d:"M502 197q-96 0-96.5 1.5t-1.5 137-1.5 138-2 2.5T266 432.5 132.5 390t-30 94T74 578l232 77q21 8 21 10t-79.5 117.5T168 899t79.5 56.5T328 1011t81-110 82-110 41 55l83 115q43 60 44 60t79.5-58 79-59-76-112.5-76-113.5T795 632.5t129.5-44-28-94T867 400t-128 42-128.5 43-2.5-7.5-1-38.5l-3-108q-4-133-5-133.5t-97-.5z"}})])]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Diaspora"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){t.showHtml=!t.showHtml}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Web",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Add to your website"))+"\n\t\t")])],1),t._v(" "),t.showHtml?[e("p",{staticStyle:{margin:"10px 0"}},[e("a",{style:t.backgroundStyle,attrs:{target:"_blank",rel:"noreferrer noopener",href:t.reference}},[e("span",{style:t.linkStyle}),t._v("\n\t\t\t\t"+t._s(t.t("federatedfilesharing","Share with me via Nextcloud"))+"\n\t\t\t")])]),t._v(" "),e("p",[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","HTML Code:"))+"\n\t\t\t"),e("br"),t._v(" "),e("pre",[t._v(t._s(t.htmlCode))])])]:t._e()],2)}),[],!1,null,"5b277ff8",null),B=P.exports;r.nc=btoa((0,i.IH)()),o.ZP.mixin({methods:{t:a.Iu}}),(new(o.ZP.extend(B))).$mount("#vue-personal-federated")},41832:function(t,e,n){var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,".social-button[data-v-5b277ff8]{margin-top:.5rem}.social-button button[data-v-5b277ff8]{display:inline-flex;margin-left:.5rem;margin-top:1rem}.cloud-id-text[data-v-5b277ff8]{display:flex;align-items:center}.cloud-id-text button[data-v-5b277ff8]{display:inline-flex}pre[data-v-5b277ff8]{margin-top:0;white-space:pre-wrap}#cloudid[data-v-5b277ff8]{margin-left:.25rem}","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,gCACC,gBAAA,CACA,uCACC,mBAAA,CACA,iBAAA,CACA,eAAA,CAGF,gCACC,YAAA,CACA,kBAAA,CACA,uCACC,mBAAA,CAGF,qBACC,YAAA,CACA,oBAAA,CAED,0BACC,kBAAA",sourcesContent:["\n.social-button {\n\tmargin-top: 0.5rem;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t\tmargin-left: 0.5rem;\n\t\tmargin-top: 1rem;\n\t}\n}\n.cloud-id-text {\n\tdisplay: flex;\n\talign-items: center;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t}\n}\npre {\n\tmargin-top: 0;\n\twhite-space: pre-wrap;\n}\n#cloudid {\n\tmargin-left: 0.25rem;\n}\n"],sourceRoot:""}]),e.Z=a},81490:function(t){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:function(t){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=n,e=[],o.O=function(t,n,r,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],i=e[d][2];for(var c=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},o.j=5855,function(){o.b=document.baseURI||self.location.href;var t={5855:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],c=n[1],l=n[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var d=l(o)}for(e&&e(n);s<a.length;s++)i=a[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.nc=void 0;var i=o.O(void 0,[7874],(function(){return o(30157)}));i=o.O(i)}();
//# sourceMappingURL=federatedfilesharing-vue-settings-personal.js.map?v=7986a44ebdb28e08ce8b
/*! For license information please see sharebymail-vue-settings-admin-sharebymail.js.LICENSE.txt */
(()=>{"use strict";var e,a={27113:(e,a,i)=>{var o=i(20144),r=i(77958),n=i(31352),s=(i(36144),i(20571)),d=i.n(s),l=i(13299),c=i.n(l),u=i(79954),y=i(3255),p=i(18574),h=i(79753),g=i(10128),m=(i(65509),i(25108));const v={name:"AdminSettings",components:{NcCheckboxRadioSwitch:d(),NcSettingsSection:c()},data:()=>({sendPasswordMail:(0,u.j)("sharebymail","sendPasswordMail"),replyToInitiator:(0,u.j)("sharebymail","replyToInitiator")}),methods:{async update(e,a){await(0,g.confirmPassword)();const i=(0,h.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"sharebymail",key:e}),o=a?"yes":"no";try{var r,n;const{data:e}=await p.Z.post(i,{value:o});this.handleResponse({status:null===(r=e.ocs)||void 0===r||null===(n=r.meta)||void 0===n?void 0:n.status})}catch(e){this.handleResponse({errorMessage:t("sharebymail","Unable to update share by mail config"),error:e})}},async handleResponse(e){let{status:t,errorMessage:a,error:i}=e;"ok"!==t&&((0,y.x2)(a),m.error(a,i))}}},b=(0,i(51900).Z)(v,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{title:e.t("sharebymail","Share by mail"),description:e.t("sharebymail","Allows users to share a personalized link to a file or folder by putting in an email address.")}},[t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.sendPasswordMail},on:{"update:checked":[function(t){e.sendPasswordMail=t},function(t){return e.update("sendpasswordmail",e.sendPasswordMail)}]}},[e._v("\n\t\t"+e._s(e.t("sharebymail","Send password by mail"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.replyToInitiator},on:{"update:checked":[function(t){e.replyToInitiator=t},function(t){return e.update("replyToInitiator",e.replyToInitiator)}]}},[e._v("\n\t\t"+e._s(e.t("sharebymail","Reply to initiator"))+"\n\t")])],1)}),[],!1,null,null,null).exports;i.nc=btoa((0,r.IH)()),o.default.mixin({methods:{t:n.Iu}}),(new(o.default.extend(b))).$mount("#vue-admin-sharebymail")},81490:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=a,e=[],o.O=(t,a,i,r)=>{if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,d=0;d<a.length;d++)(!1&r||n>=r)&&Object.keys(o.O).every((e=>o.O[e](a[d])))?a.splice(d--,1):(s=!1,r<n&&(n=r));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,i,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=3173,(()=>{o.b=document.baseURI||self.location.href;var e={3173:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,n=a[0],s=a[1],d=a[2],l=0;if(n.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var c=d(o)}for(t&&t(a);l<n.length;l++)r=n[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self.webpackChunknextcloud=self.webpackChunknextcloud||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o.nc=void 0;var r=o.O(void 0,[7874],(()=>o(27113)));r=o.O(r)})();
//# sourceMappingURL=sharebymail-vue-settings-admin-sharebymail.js.map?v=a06edc5a72648e02c147
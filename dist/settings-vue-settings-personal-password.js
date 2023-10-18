/*! For license information please see settings-vue-settings-personal-password.js.LICENSE.txt */
!function(){"use strict";var t,e,n,r={423:function(t,e,n){var r=n(20144),o=n(67912),s=n(57274),a=n(16972),i=n(93664),c=n(79753),u=n(64024),l={name:"PasswordSection",components:{NcSettingsSection:o.Z,NcButton:s.Z,NcPasswordField:a.Z},data:function(){return{oldPass:"",newPass:""}},methods:{changePassword:function(){var t=this;i.Z.post((0,c.generateUrl)("/settings/personal/changepassword"),{oldpassword:this.oldPass,newpassword:this.newPass}).then((function(t){return t.data})).then((function(e){"error"===e.status?(t.errorMessage=e.data.message,(0,u.x2)(e.data.message)):(0,u.s$)(e.data.message)}))}}},d=n(93379),p=n.n(d),f=n(7795),m=n.n(f),h=n(90569),w=n.n(h),g=n(3565),v=n.n(g),b=n(19216),P=n.n(b),y=n(44589),A=n.n(y),N=n(23482),S={};S.styleTagTransform=A(),S.setAttributes=v(),S.insert=w().bind(null,"head"),S.domAPI=m(),S.insertStyleElement=P(),p()(N.Z,S),N.Z&&N.Z.locals&&N.Z.locals;var x=(0,n(51900).Z)(l,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Password")}},[e("form",{attrs:{id:"passwordform",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.changePassword.apply(null,arguments)}}},[e("NcPasswordField",{attrs:{id:"old-pass",label:t.t("settings","Current password"),name:"oldpassword",value:t.oldPass,autocomplete:"current-password",autocapitalize:"none",autocorrect:"off"},on:{"update:value":function(e){t.oldPass=e}}}),t._v(" "),e("NcPasswordField",{attrs:{id:"new-pass",label:t.t("settings","New password"),value:t.newPass,maxlength:469,autocomplete:"new-password",autocapitalize:"none",autocorrect:"off","check-password-strength":!0},on:{"update:value":function(e){t.newPass=e}}}),t._v(" "),e("NcButton",{attrs:{type:"primary","native-type":"submit",disabled:0===t.newPass.length||0===t.oldPass.length}},[t._v("\n\t\t\t"+t._s(t.t("settings","Change password"))+"\n\t\t")])],1)])}),[],!1,null,null,null),C=x.exports,T=n(31352);n.nc=btoa(OC.requestToken),r.default.prototype.t=T.Iu,r.default.prototype.n=T.uN,new r.default({el:"#security-password",name:"main-personal-password",render:function(t){return t(C)}})},23482:function(t,e,n){var r=n(87537),o=n.n(r),s=n(23645),a=n.n(s)()(o());a.push([t.id,"\n#passwordform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tmax-width: 400px;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/PasswordSection.vue"],names:[],mappings:";AAiGA;CACA,aAAA;CACA,sBAAA;CACA,SAAA;CACA,gBAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright 2022 Carl Schwan <carl@carlschwan.eu>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n<template>\n\t<NcSettingsSection :name="t(\'settings\', \'Password\')">\n\t\t<form id="passwordform" method="POST" @submit.prevent="changePassword">\n\t\t\t<NcPasswordField id="old-pass"\n\t\t\t\t:label="t(\'settings\', \'Current password\')"\n\t\t\t\tname="oldpassword"\n\t\t\t\t:value.sync="oldPass"\n\t\t\t\tautocomplete="current-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tautocorrect="off" />\n\n\t\t\t<NcPasswordField id="new-pass"\n\t\t\t\t:label="t(\'settings\', \'New password\')"\n\t\t\t\t:value.sync="newPass"\n\t\t\t\t:maxlength="469"\n\t\t\t\tautocomplete="new-password"\n\t\t\t\tautocapitalize="none"\n\t\t\t\tautocorrect="off"\n\t\t\t\t:check-password-strength="true" />\n\n\t\t\t<NcButton type="primary"\n\t\t\t\tnative-type="submit"\n\t\t\t\t:disabled="newPass.length === 0 || oldPass.length === 0">\n\t\t\t\t{{ t(\'settings\', \'Change password\') }}\n\t\t\t</NcButton>\n\t\t</form>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport NcSettingsSection from \'@nextcloud/vue/dist/Components/NcSettingsSection.js\'\nimport NcButton from \'@nextcloud/vue/dist/Components/NcButton.js\'\nimport NcPasswordField from \'@nextcloud/vue/dist/Components/NcPasswordField.js\'\nimport axios from \'@nextcloud/axios\'\nimport { generateUrl } from \'@nextcloud/router\'\nimport { showSuccess, showError } from \'@nextcloud/dialogs\'\n\nexport default {\n\tname: \'PasswordSection\',\n\tcomponents: {\n\t\tNcSettingsSection,\n\t\tNcButton,\n\t\tNcPasswordField,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\toldPass: \'\',\n\t\t\tnewPass: \'\',\n\t\t}\n\t},\n\tmethods: {\n\t\tchangePassword() {\n\t\t\taxios.post(generateUrl(\'/settings/personal/changepassword\'), {\n\t\t\t\toldpassword: this.oldPass,\n\t\t\t\tnewpassword: this.newPass,\n\t\t\t})\n\t\t\t\t.then(res => res.data)\n\t\t\t\t.then(data => {\n\t\t\t\t\tif (data.status === \'error\') {\n\t\t\t\t\t\tthis.errorMessage = data.data.message\n\t\t\t\t\t\tshowError(data.data.message)\n\t\t\t\t\t} else {\n\t\t\t\t\t\tshowSuccess(data.data.message)\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\t},\n}\n<\/script>\n\n<style>\n\t#passwordform {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t\tmax-width: 400px;\n\t}\n</style>\n'],sourceRoot:""}]),e.Z=a}},o={};function s(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=r,t=[],s.O=function(e,n,r,o){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,{a:e}),e},s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))},s.u=function(t){return t+"-"+t+".js?v=216e3e54c5b7efd17824"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e={},n="nextcloud:",s.l=function(t,r,o,a){if(e[t])e[t].push(r);else{var i,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+o),i.src=t),e[t]=[r];var p=function(n,r){i.onerror=i.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),n)return n(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},s.j=3574,function(){var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t}(),function(){s.b=document.baseURI||self.location.href;var t={3574:0};s.f.j=function(e,n){var r=s.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=t[e]=[n,o]}));n.push(r[2]=o);var a=s.p+s.u(e),i=new Error;s.l(a,(function(n){if(s.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,a=n[0],i=n[1],c=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(c)var l=c(s)}for(e&&e(n);u<a.length;u++)o=a[u],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),s.nc=void 0;var a=s.O(void 0,[7874],(function(){return s(423)}));a=s.O(a)}();
//# sourceMappingURL=settings-vue-settings-personal-password.js.map?v=003c3649d5d52abcab30
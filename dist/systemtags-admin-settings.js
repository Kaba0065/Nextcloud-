/*! For license information please see systemtags-admin-settings.js.LICENSE.txt */
(()=>{"use strict";var t,e,a,s={16118:(t,e,a)=>{var s=a(20144),i=a(64024),n=a(31352);const r=(0,a(17499).IY)().setApp("systemtags").detectUser().build();var l=a(36906);const o=t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const a=t.split("/");let s;do{s=a[a.length-1],a.pop()}while(!s&&a.length>0);return Number(s)},d=t=>{if("name"in t)return t;const e={...t};return e.name=t.displayName,delete e.displayName,e},g=t=>{if("displayName"in t)return{...t};const e={...t};return e.displayName=t.name,delete e.name,e};a(93664);var c=a(79753),u=a(14596),m=a(77958);const p=(0,c.generateRemoteUrl)("dav"),y=(0,u.eI)(p,{headers:{requesttoken:(0,m.IH)()??""}});var A=a(62642),h=a(86884),b=a(35380),v=a(67912),T=a(49368),C=a(25108);const f=[{userVisible:!0,userAssignable:!0,name:(0,n.Iu)("systemtags","Public")},{userVisible:!0,name:(0,n.Iu)("systemtags","Restricted")},{name:(0,n.Iu)("systemtags","Invisible")}],I={name:"",canAssign:!0,userAssignable:!0,userVisible:!0},x=(0,s.defineComponent)({name:"AdminSettings",components:{NcButton:A.Z,NcSelect:h.Z,NcSelectTags:b.Z,NcSettingsSection:v.Z,NcTextField:T.Z},data:()=>({allTags:[],error:"",selectedTag:null,editableTag:{...I},TAG_VISIBILITY:f}),computed:{currentVisibility(){return this.editableTag.userAssignable?f[0]:this.editableTag.userVisible?f[1]:f[2]},hasChanges(){return this.editableTag.id?JSON.stringify(this.editableTag)===JSON.stringify(d(this.selectedTag)):JSON.stringify(this.editableTag)===JSON.stringify(I)}},watch:{selectedTag(){this.onResetTag()}},async mounted(){this.allTags=await(async()=>{try{const{data:t}=await y.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,a]=t;return[(0,l.Z)(e),"displayName"===(0,l.Z)(e)?`${a}`:a]})))})))(t)}catch(t){throw r.error((0,n.Iu)("systemtags","Failed to load tags"),{error:t}),new Error((0,n.Iu)("systemtags","Failed to load tags"))}})()},methods:{t:n.Iu,onUpdateVisibility(t){this.editableTag={...t,name:this.editableTag.name,id:this.editableTag.id}},async onDeleteTag(){try{C.warn(this.selectedTag),await(async t=>{try{await y.deleteFile(`systemtags/${t.id}`)}catch(t){throw r.error(t),t}})(this.selectedTag),(0,i.s$)((0,n.Iu)("systemtags",'Tag "{name}" deleted',{name:this.selectedTag.displayName})),this.allTags=this.allTags.filter((t=>{let{id:e}=t;return e!==this.selectedTag.id})),this.selectedTag=null}catch(t){r.error(t),(0,i.x2)((0,n.Iu)("systemtags","Could not delete tag"))}},async onUpdateTag(){if(this.editableTag.id)try{await(async t=>{try{await y.customRequest(`systemtags/${t.id}`,{method:"PROPPATCH",data:(e=t.displayName,`<?xml version="1.0" encoding="utf-8"?> \n<d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:set> \n\t\t<d:prop> \n\t\t\t<oc:display-name>${e}</oc:display-name> \n\t\t</d:prop> \n\t</d:set> \n</d:propertyupdate>`)})}catch(t){throw r.error(t),t}var e})(g(this.editableTag)),this.allTags.filter((t=>{let{id:e}=t;return e===this.editableTag.id}))[0].displayName=this.editableTag.name,this.onResetTag(),(0,i.s$)((0,n.Iu)("systemtags",'Tag renamed to "{name}"',{name:this.editableTag.name}))}catch(t){(0,i.x2)((0,n.Iu)("systemtags","Could not rename tag"))}else try{const t=await(async t=>{const e=d(t),{headers:a}=await y.customRequest("/systemtags",{method:"POST",data:e}),s=a.get("content-location");if(s)return{...t,id:o(s)};throw r.debug('Missing "Content-Location" header'),new Error((0,n.Iu)("systemtags",'Missing "Content-Location" header'))})({...this.editableTag});(0,i.s$)((0,n.Iu)("systemtags",'Tag "{name}" created',{name:this.editableTag.name})),this.allTags.push(g(t)),this.onResetTag()}catch(t){409===t.response?.status?this.error=(0,n.Iu)("systemtags",'Tag "{name}" already exists',{name:this.editableTag.name}):(0,i.x2)((0,n.Iu)("systemtags",'Could not create tag "{name}"',{name:this.editableTag.name}))}},onResetTag(){this.selectedTag?this.editableTag=d(this.selectedTag):this.editableTag={...I}}}});var w=a(93379),N=a.n(w),j=a(7795),S=a.n(j),M=a(90569),Z=a.n(M),_=a(3565),L=a.n(_),D=a(19216),O=a.n(D),B=a(44589),R=a.n(B),P=a(40676),E={};E.styleTagTransform=R(),E.setAttributes=L(),E.insert=Z().bind(null,"head"),E.domAPI=S(),E.insertStyleElement=O(),N()(P.Z,E),P.Z&&P.Z.locals&&P.Z.locals;const Y=(0,a(51900).Z)(x,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcSettingsSection",{attrs:{"data-cy-systemtags-section":"",name:t.t("systemtags","Collaborative tags"),description:t.t("systemtags","Collaborative tags are available for all users. Restricted tags are visible to users but cannot be assigned by them. Invisible tags are for internal use, since users cannot see or assign them."),"limit-width":!0}},[e("p",[t._v(t._s(t.t("systemtags","Either select an existing tag to edit or create a new one.")))]),t._v(" "),e("NcSelectTags",{attrs:{"data-cy-systemtags-select":"","fetch-tags":!1,options:t.allTags,multiple:!1,passthru:!0,placeholder:t.t("systemtags","Select tag to edit")},model:{value:t.selectedTag,callback:function(e){t.selectedTag=e},expression:"selectedTag"}}),t._v(" "),e("h3",[t._v("\n\t\t"+t._s(t.selectedTag?t.t("systemtags",'Edit tag "{tag}"',{tag:t.selectedTag.displayName}):t.t("systemtags","Create a new tag"))+"\n\t")]),t._v(" "),e("div",{staticClass:"tag-editor"},[e("NcTextField",{staticClass:"tag-editor__name",attrs:{"data-cy-systemtags-name":"",value:t.editableTag.name,label:t.t("systemtags","Tag name"),error:""!==t.error,"helper-text":t.error},on:{"update:value":function(e){return t.$set(t.editableTag,"name",e)},input:function(e){t.error=""}}}),t._v(" "),e("label",{staticClass:"tag-editor__visibility-label"},[e("span",[t._v(t._s(t.t("systemtags","Tag visibility")))]),t._v(" "),e("NcSelect",{staticClass:"tag-editor__visibility",attrs:{value:t.currentVisibility,"data-cy-systemtags-visibility":"",label:"name",clearable:!1,multiple:!1,options:t.TAG_VISIBILITY},on:{input:t.onUpdateVisibility}})],1),t._v(" "),e("div",{staticClass:"tag-editor__button-group"},[e("NcButton",{directives:[{name:"show",rawName:"v-show",value:t.selectedTag,expression:"selectedTag"}],attrs:{type:"error"},on:{click:t.onDeleteTag}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Delete"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.hasChanges,type:"tertiary"},on:{click:t.onResetTag}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Reset"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.hasChanges,type:"primary"},on:{click:t.onUpdateTag}},[t._v("\n\t\t\t\t"+t._s(t.selectedTag?t.t("systemtags","Update"):t.t("systemtags","Create"))+"\n\t\t\t")])],1)],1)],1)}),[],!1,null,"664a6d36",null).exports;new s.default({el:"#systemtags",render:t=>t(Y)})},40676:(t,e,a)=>{a.d(e,{Z:()=>l});var s=a(87537),i=a.n(s),n=a(23645),r=a.n(n)()(i());r.push([t.id,".tag-editor[data-v-664a6d36]{display:flex;flex-direction:row;flex-wrap:wrap;gap:12px;justify-content:start;align-items:end}.tag-editor__name[data-v-664a6d36]{flex:1 1 fit-content}.tag-editor__visibility[data-v-664a6d36]{width:100%;min-width:160px}.tag-editor__visibility-label[data-v-664a6d36]{display:flex;flex:1 1;flex-direction:column}.tag-editor__button-group[data-v-664a6d36]{height:44px;display:flex;flex-wrap:wrap;gap:8px}","",{version:3,sources:["webpack://./apps/systemtags/src/components/AdminSettings.vue"],names:[],mappings:"AACA,6BACC,YAAA,CACA,kBAAA,CACA,cAAA,CACA,QAAA,CACA,qBAAA,CACA,eAAA,CAEA,mCACC,oBAAA,CAGD,yCACC,UAAA,CACA,eAAA,CAGD,+CACC,YAAA,CACA,QAAA,CACA,qBAAA,CAGD,2CACC,WAAA,CACA,YAAA,CACA,cAAA,CACA,OAAA",sourcesContent:["\n.tag-editor {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tgap: 12px;\n\tjustify-content: start;\n\talign-items: end;\n\n\t&__name {\n\t\tflex: 1 1 fit-content;\n\t}\n\n\t&__visibility {\n\t\twidth: 100%;\n\t\tmin-width: 160px;\n\t}\n\n\t&__visibility-label {\n\t\tdisplay: flex;\n\t\tflex: 1 1;\n\t\tflex-direction: column;\n\t}\n\n\t&__button-group {\n\t\theight: 44px;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 8px;\n\t}\n}\n"],sourceRoot:""}]);const l=r},42761:t=>{t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:t=>{t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:t=>{t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},i={};function n(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={id:t,loaded:!1,exports:{}};return s[t].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=s,t=[],n.O=(e,a,s,i)=>{if(!a){var r=1/0;for(g=0;g<t.length;g++){a=t[g][0],s=t[g][1],i=t[g][2];for(var l=!0,o=0;o<a.length;o++)(!1&i||r>=i)&&Object.keys(n.O).every((t=>n.O[t](a[o])))?a.splice(o--,1):(l=!1,i<r&&(r=i));if(l){t.splice(g--,1);var d=s();void 0!==d&&(e=d)}}return e}i=i||0;for(var g=t.length;g>0&&t[g-1][2]>i;g--)t[g]=t[g-1];t[g]=[a,s,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce(((e,a)=>(n.f[a](t,e),e)),[])),n.u=t=>t+"-"+t+".js?v="+{2863:"410edc658e5ed3f0b304",5823:"aa9c0b79b12237080e88"}[t],n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},a="nextcloud:",n.l=(t,s,i,r)=>{if(e[t])e[t].push(s);else{var l,o;if(void 0!==i)for(var d=document.getElementsByTagName("script"),g=0;g<d.length;g++){var c=d[g];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==a+i){l=c;break}}l||(o=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",a+i),l.src=t),e[t]=[s];var u=(a,s)=>{l.onerror=l.onload=null,clearTimeout(m);var i=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((t=>t(s))),a)return a(s)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),o&&document.head.appendChild(l)}},n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.j=6090,(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&!t;)t=a[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{n.b=document.baseURI||self.location.href;var t={6090:0};n.f.j=(e,a)=>{var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var i=new Promise(((a,i)=>s=t[e]=[a,i]));a.push(s[2]=i);var r=n.p+n.u(e),l=new Error;n.l(r,(a=>{if(n.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,s[1](l)}}),"chunk-"+e,e)}},n.O.j=e=>0===t[e];var e=(e,a)=>{var s,i,r=a[0],l=a[1],o=a[2],d=0;if(r.some((e=>0!==t[e]))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(o)var g=o(n)}for(e&&e(a);d<r.length;d++)i=r[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(g)},a=self.webpackChunknextcloud=self.webpackChunknextcloud||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})(),n.nc=void 0;var r=n.O(void 0,[7874],(()=>n(16118)));r=n.O(r)})();
//# sourceMappingURL=systemtags-admin-settings.js.map?v=4b28a96526a189aa3ae7
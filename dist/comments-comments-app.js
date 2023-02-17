/*! For license information please see comments-comments-app.js.LICENSE.txt */
!function(){var e,n={88321:function(e,n,r){"use strict";var o=r(17499),s=r(31352),i=r(79753),a=r(45994),c=r(79954),u=r(4820),m=r(61361),l=r(20144),d=r(93455),p=r.n(d),f=r(10861),h=r.n(f),g=r(36272),v=r(92141),A=r(94603),y=r(80351),C=r.n(y),j=r(45400),b=r.n(j),x=r(12945),_=r.n(x),w=r(875),k=r.n(w),O=r(75925),D=r.n(O),S=r(12323),P=r.n(S),R=r(13408),N=r.n(R),I=r(39429),T={name:"Moment",props:{timestamp:{type:Number,required:!0},format:{type:String,default:"LLL"}},computed:{title:function(){return C().unix(this.timestamp).format(this.format)},formatted:function(){return C().unix(this.timestamp).fromNow()}}},E=r(51900),M=(0,E.Z)(T,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"live-relative-timestamp",attrs:{"data-timestamp":1e3*t.timestamp,title:t.title}},[t._v(t._s(t.formatted))])}),[],!1,null,null,null).exports,B=function(){return(0,i.generateRemoteUrl)("dav/comments")};function z(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new DOMParser,r=t,o=0;o<e;o++)r=n.parseFromString(r,"text/html").documentElement.textContent;return r}var q=r(81063);u.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",(0,q.getPatcher)().patch("request",u.default);var Z=(0,q.createClient)(B());function L(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function $(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){L(s,r,o,i,a,"next",t)}function a(t){L(s,r,o,i,a,"throw",t)}i(void 0)}))}}function U(t,e,n){return F.apply(this,arguments)}function F(){return(F=$(regeneratorRuntime.mark((function t(e,n,r){var o,s,i,c,m,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=["",e,n].join("/"),t.next=3,u.default.post(B()+o,{actorDisplayName:(0,a.ts)().displayName,actorId:(0,a.ts)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:r,objectType:"files",verb:"comment"});case 3:return s=t.sent,i=parseInt(s.headers["content-location"].split("/").pop()),c=o+"/"+i,t.next=8,Z.stat(c,{details:!0});case 8:return m=t.sent,(l=m.data.props).actorDisplayName=z(l.actorDisplayName,2),l.message=z(l.message,2),t.abrupt("return",m.data);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function Y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){G(s,r,o,i,a,"next",t)}function a(t){G(s,r,o,i,a,"throw",t)}i(void 0)}))}}function W(t,e,n){return H.apply(this,arguments)}function H(){return(H=Y(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=["",e,n,r].join("/"),t.next=3,Z.deleteFile(o);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function Q(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){V(s,r,o,i,a,"next",t)}function a(t){V(s,r,o,i,a,"throw",t)}i(void 0)}))}}function X(t,e,n,r){return K.apply(this,arguments)}function K(){return(K=Q(regeneratorRuntime.mark((function t(e,n,r,o){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=["",e,n,r].join("/"),t.next=3,Z.customRequest(s,Object.assign({method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>'.concat(o,"</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var J=r(64024);function tt(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function et(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){tt(s,r,o,i,a,"next",t)}function a(t){tt(s,r,o,i,a,"throw",t)}i(void 0)}))}}var nt={props:{id:{type:Number,default:null},message:{type:String,default:""},ressourceId:{type:[String,Number],required:!0}},data:function(){return{deleted:!1,editing:!1,loading:!1}},methods:{onEdit:function(){this.editing=!0},onEditCancel:function(){this.editing=!1,this.updateLocalMessage(this.message)},onEditComment:function(e){var n=this;return et(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.loading=!0,r.prev=1,r.next=4,X(n.commentsType,n.ressourceId,n.id,e);case 4:n.logger.debug("Comment edited",{commentsType:n.commentsType,ressourceId:n.ressourceId,id:n.id,message:e}),n.$emit("update:message",e),n.editing=!1,r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),(0,J.x2)(t("comments","An error occurred while trying to edit the comment")),console.error(r.t0);case 13:return r.prev=13,n.loading=!1,r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})))()},onDeleteWithUndo:function(){var e=this;this.deleted=!0;var n=setTimeout(this.onDelete,J.et);(0,J.yl)(t("comments","Comment deleted"),(function(){clearTimeout(n),e.deleted=!1}))},onDelete:function(){var e=this;return et(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W(e.commentsType,e.ressourceId,e.id);case 3:e.logger.debug("Comment deleted",{commentsType:e.commentsType,ressourceId:e.ressourceId,id:e.id}),e.$emit("delete",e.id),n.next=12;break;case 7:n.prev=7,n.t0=n.catch(0),(0,J.x2)(t("comments","An error occurred while trying to delete the comment")),console.error(n.t0),e.deleted=!1;case 12:case"end":return n.stop()}}),n,null,[[0,7]])})))()},onNewComment:function(e){var n=this;return et(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.loading=!0,r.prev=1,r.next=4,U(n.commentsType,n.ressourceId,e);case 4:o=r.sent,n.logger.debug("New comment posted",{commentsType:n.commentsType,ressourceId:n.ressourceId,newComment:o}),n.$emit("new",o),n.$emit("update:message",""),n.localMessage="",r.next=15;break;case 11:r.prev=11,r.t0=r.catch(1),(0,J.x2)(t("comments","An error occurred while trying to create the comment")),console.error(r.t0);case 15:return r.prev=15,n.loading=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[1,11,15,18]])})))()}}},rt={name:"Comment",components:{NcActionButton:b(),NcActions:_(),NcActionSeparator:k(),ArrowRight:I.default,NcAvatar:D(),NcButton:h(),Moment:M,NcRichContenteditable:P()},mixins:[N(),nt],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0}},data:function(){return{expanded:!1,localMessage:""}},computed:{isOwnComment:function(){return(0,a.ts)().uid===this.actorId},renderedContent:function(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage:function(){return!this.localMessage||""===this.localMessage.trim()},timestamp:function(){return parseInt(C()(this.creationDateTime).format("x"),10)/1e3}},watch:{message:function(t){this.updateLocalMessage(t)}},beforeMount:function(){this.updateLocalMessage(this.message)},methods:{updateLocalMessage:function(t){this.localMessage=t.toString()},onSubmit:function(){var t=this;if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((function(){t.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand:function(){this.expanded=!0}}},ot=r(93379),st=r.n(ot),it=r(7795),at=r.n(it),ct=r(90569),ut=r.n(ct),mt=r(3565),lt=r.n(mt),dt=r(19216),pt=r.n(dt),ft=r(44589),ht=r.n(ft),gt=r(66443),vt={};vt.styleTagTransform=ht(),vt.setAttributes=lt(),vt.insert=ut().bind(null,"head"),vt.domAPI=at(),vt.insertStyleElement=pt(),st()(gt.Z,vt),gt.Z&&gt.Z.locals&&gt.Z.locals;var At=(0,E.Z)(rt,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:!t.deleted,expression:"!deleted"}],staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{attrs:{icon:"icon-close"},on:{click:t.onEditCancel}},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-rename"},on:{click:t.onEdit}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-delete"},on:{click:t.onDeleteWithUndo}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("Moment",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp}}):t._e()],1),t._v(" "),t.editor||t.editing?e("div",{staticClass:"comment__editor"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,value:t.localMessage,"user-data":t.userData},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("NcButton",{staticClass:"comment__submit",attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("span",{staticClass:"icon-loading-small"}):e("ArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,2357784758)})],1):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},domProps:{innerHTML:t._s(t.renderedContent)},on:{click:t.onExpand}})])])}),[],!1,null,"9539c956",null).exports,yt=r(7582),Ct=r(18635);function jt(t){return jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jt(t)}function bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?bt(Object(n),!0).forEach((function(e){_t(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _t(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==jt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==jt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===jt(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function kt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){wt(s,r,o,i,a,"next",t)}function a(t){wt(s,r,o,i,a,"throw",t)}i(void 0)}))}}var Ot=20;function Dt(t){return St.apply(this,arguments)}function St(){return St=kt(regeneratorRuntime.mark((function t(e){var n,r,o,s,i,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commentsType,r=e.ressourceId,o=a.length>1&&void 0!==a[1]?a[1]:{},s=null,i=["",n,r].join("/"),t.next=6,Z.customRequest(i,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(Ot,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(o.offset||0,"</oc:offset>\n\t\t\t</oc:filter-comments>")},o)).then((function(t){return s=t,t.data})).then(yt.parseXML).then((function(t){return Pt(t,!0)})).then((function(t){return(0,Ct.processResponsePayload)(s,t,!0)})).then((function(t){return t.data}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)}))),St.apply(this,arguments)}function Pt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.multistatus.response;return n.map((function(t){var n=t.propstat.prop,r=xt(xt({},n),{},{actorDisplayName:z(n.actorDisplayName,2),message:z(n.message,2)});return(0,yt.prepareFileFromProps)(r,r.id.toString(),e)}))}function Rt(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}var Nt=function(t){var e=u.default.CancelToken.source(),n=function(){var n,r=(n=regeneratorRuntime.mark((function n(r,o){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t(r,Object.assign({cancelToken:e.token},o)));case 1:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function i(t){Rt(s,r,o,i,a,"next",t)}function a(t){Rt(s,r,o,i,a,"throw",t)}i(void 0)}))});return function(t,e){return r.apply(this,arguments)}}();return{request:n,cancel:e.cancel}};function It(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Tt(t,e,n,r,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function Et(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){Tt(s,r,o,i,a,"next",t)}function a(t){Tt(s,r,o,i,a,"throw",t)}i(void 0)}))}}l.ZP.use(m.default);var Mt={name:"Comments",components:{Comment:At,NcEmptyContent:p(),NcButton:h(),RefreshIcon:g.Z,MessageReplyTextIcon:v.Z,AlertCircleOutlineIcon:A.default},data:function(){return{error:"",loading:!1,done:!1,ressourceId:null,offset:0,comments:[],cancelRequest:function(){},editorData:{actorDisplayName:(0,a.ts)().displayName,actorId:(0,a.ts)().uid,key:"editor"},Comment:At,userData:{}}},computed:{hasComments:function(){return this.comments.length>0},isFirstLoading:function(){return this.loading&&0===this.offset}},methods:{update:function(t){var e=this;return Et(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.ressourceId=t,e.resetState(),e.getComments();case 3:case"end":return n.stop()}}),n)})))()},onScrollBottomReached:function(){this.error||this.done||this.loading||this.getComments()},genMentionsData:function(t){var e=this;return Object.values(t).flat().forEach((function(t){e.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,a.ts)().uid===t.mentionId}})),this.userData},getComments:function(){var e=this;return Et(regeneratorRuntime.mark((function n(){var r,o,s,i,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cancelRequest("cancel"),n.prev=1,e.loading=!0,e.error="",o=Nt(Dt),s=o.request,i=o.cancel,e.cancelRequest=i,n.next=8,s({commentsType:e.commentsType,ressourceId:e.ressourceId},{offset:e.offset});case 8:a=n.sent,e.logger.debug("Processed ".concat(a.length," comments"),{comments:a}),a.length<Ot&&(e.done=!0),(r=e.comments).push.apply(r,function(t){if(Array.isArray(t))return It(t)}(c=a)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||function(t,e){if(t){if("string"==typeof t)return It(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?It(t,e):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e.offset+=Ot,n.next=21;break;case 15:if(n.prev=15,n.t0=n.catch(1),"cancel"!==n.t0.message){n.next=19;break}return n.abrupt("return");case 19:e.error=t("comments","Unable to load the comments list"),console.error("Error loading the comments list",n.t0);case 21:return n.prev=21,e.loading=!1,n.finish(21);case 24:case"end":return n.stop()}var c}),n,null,[[1,15,21,24]])})))()},autoComplete:function(t,e){var n=this;return Et(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.default.get((0,i.generateOcsUrl)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:n.ressourceId,sorter:"commenters|share-recipients",limit:(0,c.j)("comments","maxAutoCompleteResults")}});case 2:return r.sent.data.ocs.data.forEach((function(t){n.userData[t.id]=t})),r.abrupt("return",e(Object.values(n.userData)));case 5:case"end":return r.stop()}}),r)})))()},onNewComment:function(t){this.comments.unshift(t)},onDelete:function(t){var e=this.comments.findIndex((function(e){return e.props.id===t}));e>-1?this.comments.splice(e,1):console.error("Could not find the deleted comment in the list",t)},resetState:function(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}},Bt=r(69106),zt={};zt.styleTagTransform=ht(),zt.setAttributes=lt(),zt.insert=ut().bind(null,"head"),zt.domAPI=at(),zt.insertStyleElement=pt(),st()(Bt.Z,zt),Bt.Z&&Bt.Z.locals&&Bt.Z.locals;var qt=(0,E.Z)(Mt,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comments",class:{"icon-loading":t.isFirstLoading}},[e("Comment",t._b({staticClass:"comments__writer",attrs:{"auto-complete":t.autoComplete,"user-data":t.userData,editor:!0,"ressource-id":t.ressourceId},on:{new:t.onNewComment}},"Comment",t.editorData,!1)),t._v(" "),t.isFirstLoading?t._e():[!t.hasComments&&t.done?e("NcEmptyContent",{staticClass:"comments__empty",attrs:{title:t.t("comments","No comments yet, start the conversation!")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("MessageReplyTextIcon")]},proxy:!0}],null,!1,1033639148)}):t._l(t.comments,(function(n){return e("Comment",t._b({key:n.props.id,staticClass:"comments__list",attrs:{"auto-complete":t.autoComplete,message:n.props.message,"ressource-id":t.ressourceId,"user-data":t.genMentionsData(n.props.mentions)},on:{"update:message":function(e){return t.$set(n.props,"message",e)},delete:t.onDelete}},"Comment",n.props,!1))})),t._v(" "),t.loading&&!t.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):t.hasComments&&t.done?e("div",{staticClass:"comments__info"},[t._v("\n\t\t\t"+t._s(t.t("comments","No more messages"))+"\n\t\t")]):t.error?[e("NcEmptyContent",{staticClass:"comments__error",attrs:{title:t.error},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircleOutlineIcon")]},proxy:!0}],null,!1,66050004)}),t._v(" "),e("NcButton",{staticClass:"comments__retry",on:{click:t.getComments},scopedSlots:t._u([{key:"icon",fn:function(){return[e("RefreshIcon")]},proxy:!0}],null,!1,3924573781)},[t._v("\n\t\t\t\t"+t._s(t.t("comments","Retry"))+"\n\t\t\t")])]:t._e()]],2)}),[],!1,null,"3311fcb9",null).exports;function Zt(t){return Zt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zt(t)}function Lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Zt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==Zt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===Zt(o)?o:String(o)),r)}var o}function $t(t,e,n){return e&&Lt(t.prototype,e),n&&Lt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ft=(0,o.IY)().setApp("comments").detectUser().build();l.ZP.mixin({data:function(){return{logger:Ft}},methods:{t:s.Iu,n:s.uN}});var Gt=$t((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",n=arguments.length>1?arguments[1]:void 0;Ut(this,t),l.ZP.mixin({data:function(){return{commentsType:e}}});var r=l.ZP.extend(qt);return new r(n)}));window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:Gt}),console.debug("OCA.Comments.View initialized")},66443:function(t,e,n){"use strict";var r=n(87537),o=n.n(r),s=n(23645),i=n.n(s)()(o());i.push([t.id,".comment[data-v-9539c956]{display:flex;gap:16px;position:relative;padding:5px 10px}.comment__side[data-v-9539c956]{display:flex;align-items:flex-start;padding-top:16px}.comment__body[data-v-9539c956]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-9539c956]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-9539c956]{margin-left:10px !important}.comment__author[data-v-9539c956]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-9539c956],.comment__timestamp[data-v-9539c956]{margin-left:auto;text-align:right;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__submit[data-v-9539c956]{position:absolute !important;right:0;bottom:0;margin:1px}.comment__message[data-v-9539c956]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-9539c956]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-9539c956]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,QAAA,CACA,iBAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,gBAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,gBAAA,CACA,kBAAA,CACA,mCAAA,CAGD,kCACC,4BAAA,CACA,OAAA,CACA,QAAA,CAEA,UAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YArEiB",sourcesContent:['\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tdisplay: flex;\n\tgap: 16px;\n\tposition: relative;\n\tpadding: 5px $comment-padding;\n\n\t&__side {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tpadding-top: 16px;\n\t}\n\n\t&__body {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-direction: column;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t}\n\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\ttext-align: right;\n\t\twhite-space: nowrap;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\t// Align with input border\n\t\tmargin: 1px;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\tmargin-top: -6px;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]),e.Z=i},69106:function(t,e,n){"use strict";var r=n(87537),o=n.n(r),s=n(23645),i=n.n(s)()(o());i.push([t.id,".comments__empty[data-v-3311fcb9],.comments__error[data-v-3311fcb9]{margin-top:0 !important}.comments__retry[data-v-3311fcb9]{margin:0 auto}.comments__info[data-v-3311fcb9]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AAGC,oEAEC,uBAAA,CAGD,kCACC,aAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n.comments {\n\t// Do not add emptycontent top margin\n\t&__empty,\n\t&__error {\n\t\tmargin-top: 0 !important;\n\t}\n\n\t&__retry {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]),e.Z=i},46700:function(t,e,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=46700},69862:function(){},40964:function(){}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var s=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=n,e=[],o.O=function(t,n,r,s){if(!n){var i=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],s=e[m][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[n,r,s]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},o.j=6335,function(){o.b=document.baseURI||self.location.href;var t={6335:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,i=n[0],a=n[1],c=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var m=c(o)}for(e&&e(n);u<i.length;u++)s=i[u],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(m)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.nc=void 0;var s=o.O(void 0,[7874],(function(){return o(88321)}));s=o.O(s)}();
//# sourceMappingURL=comments-comments-app.js.map?v=47c22c18f4a0496d99cb
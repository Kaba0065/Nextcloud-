!function(){"use strict";var n,e={49983:function(n,e,t){var r=t(4820),o=t(79753),i=t(78595);window.OC.Settings=window.OC.Settings||{},window.OC.Settings.Apps=window.OC.Settings.Apps||{rebuildNavigation:function(){return r.default.get((0,o.generateOcsUrl)("core/navigation",2)+"/apps?format=json").then((function(n){var e=n.data;200===e.ocs.meta.statuscode&&((0,i.j8)("nextcloud:app-menu.refresh",{apps:e.ocs.data}),window.dispatchEvent(new Event("resize")))}))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},n=[],r.O=function(e,t,o,i){if(!t){var u=1/0;for(d=0;d<n.length;d++){t=n[d][0],o=n[d][1],i=n[d][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](t[c])}))?t.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(d--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[t,o,i]},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,{a:e}),e},r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},r.j=1647,function(){r.b=document.baseURI||self.location.href;var n={1647:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,i,u=t[0],a=t[1],c=t[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var d=c(r)}for(e&&e(t);f<u.length;f++)i=u[f],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(d)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),r.nc=void 0;var o=r.O(void 0,[7874],(function(){return r(49983)}));o=r.O(o)}();
//# sourceMappingURL=settings-apps.js.map?v=4731bf0a8c0e96ea03cd
(()=>{"use strict";var e,t={49983:(e,t,r)=>{var n=r(4820),o=r(79753),i=r(78595);window.OC.Settings=window.OC.Settings||{},window.OC.Settings.Apps=window.OC.Settings.Apps||{rebuildNavigation:()=>n.Z.get((0,o.generateOcsUrl)("core/navigation",2)+"/apps?format=json").then((e=>{let{data:t}=e;200===t.ocs.meta.statuscode&&((0,i.j8)("nextcloud:app-menu.refresh",{apps:t.ocs.data}),window.dispatchEvent(new Event("resize")))}))}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var d=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(d=!1,i<a&&(a=i));if(d){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=1647,(()=>{n.b=document.baseURI||self.location.href;var e={1647:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,a=r[0],d=r[1],l=r[2],s=0;if(a.some((t=>0!==e[t]))){for(o in d)n.o(d,o)&&(n.m[o]=d[o]);if(l)var c=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var o=n.O(void 0,[7874],(()=>n(49983)));o=n.O(o)})();
//# sourceMappingURL=settings-apps.js.map?v=4a1e3b4d303396576973
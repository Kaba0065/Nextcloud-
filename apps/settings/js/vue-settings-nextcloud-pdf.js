!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/js/",r(r.s=590)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(9))},103:function(t,n,r){var e=r(6),o=r(0),i=r(93);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},108:function(t,n,r){var e=r(5),o=r(17),i=r(94).indexOf,u=r(45);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},11:function(t,n,r){var e=r(6),o=r(103),i=r(4),u=r(40),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},113:function(t,n,r){var e=r(29);t.exports=e("navigator","userAgent")||""},114:function(t,n,r){var e=r(5),o=r(115),i=r(25),u=r(11);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},115:function(t,n,r){var e=r(29),o=r(59),i=r(76),u=r(4);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},116:function(t,n,r){var e=r(1);t.exports=e},117:function(t,n,r){var e=r(70);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},12:function(t,n,r){var e=r(6),o=r(11),i=r(28);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},14:function(t,n,r){var e=r(21);t.exports=function(t){return Object(e(t))}},144:function(t,n,r){"use strict";var e=r(3),o=r(0),i=r(43),u=r(8),c=r(14),f=r(16),a=r(50),s=r(75),p=r(63),l=r(2),v=r(48),y=l("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),h=p("concat"),x=function(t){if(!u(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var n,r,e,o,i,u=c(this),p=s(u,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(x(i=-1===n?u:arguments[n])){if(l+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&a(p,l,i[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(p,l++,i)}return p.length=l,p}})},15:function(t,n,r){var e=r(1),o=r(12),i=r(5),u=r(61),c=r(85),f=r(20),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=p.join("string"==typeof n?n:""))),t!==e?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=r:o(t,n,r)):l?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},16:function(t,n,r){var e=r(31),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},17:function(t,n,r){var e=r(49),o=r(21);t.exports=function(t){return e(o(t))}},184:function(t,n,r){var e=r(1),o=r(85),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},2:function(t,n,r){var e=r(1),o=r(44),i=r(5),u=r(69),c=r(70),f=r(117),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)&&(c||"string"==typeof a[t])||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},20:function(t,n,r){var e,o,i,u=r(184),c=r(1),f=r(8),a=r(12),s=r(5),p=r(62),l=r(51),v=r(45),y=c.WeakMap;if(u||p.state){var d=p.state||(p.state=new y),h=d.get,x=d.has,b=d.set;e=function(t,n){if(x.call(d,t))throw new TypeError("Object already initialized");return n.facade=t,b.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return x.call(d,t)}}else{var g=l("state");v[g]=!0,e=function(t,n){if(s(t,g))throw new TypeError("Object already initialized");return n.facade=t,a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},21:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},25:function(t,n,r){var e=r(6),o=r(68),i=r(28),u=r(17),c=r(40),f=r(5),a=r(103),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},28:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},29:function(t,n,r){var e=r(116),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},3:function(t,n,r){var e=r(1),o=r(25).f,i=r(12),u=r(15),c=r(61),f=r(114),a=r(99);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,h=t.stat;if(r=d?e:h?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},30:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},31:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},33:function(t,n){t.exports=!1},4:function(t,n,r){var e=r(8);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},40:function(t,n,r){var e=r(8);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},43:function(t,n,r){var e=r(30);t.exports=Array.isArray||function(t){return"Array"==e(t)}},44:function(t,n,r){var e=r(33),o=r(62);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.15.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},45:function(t,n){t.exports={}},48:function(t,n,r){var e,o,i=r(1),u=r(113),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]<4?1:e[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},49:function(t,n,r){var e=r(0),o=r(30),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},5:function(t,n,r){var e=r(14),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(e(t),n)}},50:function(t,n,r){"use strict";var e=r(40),o=r(11),i=r(28);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},51:function(t,n,r){var e=r(44),o=r(69),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},59:function(t,n,r){var e=r(108),o=r(72).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},590:function(t,n,r){"use strict";r.r(n);var e=r(82),o=!0===Object(e.loadState)("settings","has-reasons-use-nextcloud-pdf");window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("open-reasons-use-nextcloud-pdf");t&&o&&t.addEventListener("click",(function(t){t.preventDefault(),OCA.Viewer.open({path:"/Reasons to use Nextcloud.pdf"})}))}))},6:function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},61:function(t,n,r){var e=r(1),o=r(12);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},62:function(t,n,r){var e=r(1),o=r(61),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},63:function(t,n,r){var e=r(0),o=r(2),i=r(48),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},68:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},69:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},70:function(t,n,r){var e=r(48),o=r(0);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},72:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},74:function(t,n,r){var e=r(31),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},75:function(t,n,r){var e=r(8),o=r(43),i=r(2)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},76:function(t,n){n.f=Object.getOwnPropertySymbols},8:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},82:function(t,n,r){"use strict";r(144),Object.defineProperty(n,"__esModule",{value:!0}),n.loadState=function(t,n,r){var e=document.querySelector("#initial-state-".concat(t,"-").concat(n));if(null===e){if(void 0!==r)return r;throw new Error("Could not find initial state ".concat(n," of ").concat(t))}try{return JSON.parse(atob(e.value))}catch(r){throw new Error("Could not parse initial state ".concat(n," of ").concat(t))}}},85:function(t,n,r){var e=r(62),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},9:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},93:function(t,n,r){var e=r(1),o=r(8),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},94:function(t,n,r){var e=r(17),o=r(16),i=r(74),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},99:function(t,n,r){var e=r(0),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i}});
//# sourceMappingURL=vue-settings-nextcloud-pdf.js.map?v=9115641ef3d131f96fb4
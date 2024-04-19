"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[3865],{58410:(t,n,e)=>{e.d(n,{A:()=>s});var o=e(71354),a=e.n(o),r=e(76314),i=e.n(r)()(a());i.push([t.id,"h3[data-v-ee726cc0]{font-size:24px;font-weight:600;margin-block:0 1em}.app-discover-carousel__wrapper[data-v-ee726cc0]{display:flex}.app-discover-carousel__button[data-v-ee726cc0]{color:var(--color-text-maxcontrast);position:absolute;top:calc(50% - 22px)}.app-discover-carousel__button-wrapper[data-v-ee726cc0]{position:relative}.app-discover-carousel__button--next[data-v-ee726cc0]{right:-54px}.app-discover-carousel__button--previous[data-v-ee726cc0]{left:-54px}.app-discover-carousel__tabs[data-v-ee726cc0]{display:flex;flex-direction:row;justify-content:center}.app-discover-carousel__tabs>*[data-v-ee726cc0]{color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/CarouselType.vue"],names:[],mappings:"AACA,oBACC,cAAA,CACA,eAAA,CACA,kBAAA,CAIA,iDACC,YAAA,CAGD,gDACC,mCAAA,CACA,iBAAA,CACA,oBAAA,CAEA,wDACC,iBAAA,CAID,sDACC,WAAA,CAED,0DACC,UAAA,CAIF,8CACC,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,gDACC,mCAAA",sourcesContent:["\nh3 {\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tmargin-block: 0 1em;\n}\n\n.app-discover-carousel {\n\t&__wrapper {\n\t\tdisplay: flex;\n\t}\n\n\t&__button {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tposition: absolute;\n\t\ttop: calc(50% - 22px); // 50% minus half of button height\n\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t// See padding of discover section\n\t\t&--next {\n\t\t\tright: -54px;\n\t\t}\n\t\t&--previous {\n\t\t\tleft: -54px;\n\t\t}\n\t}\n\n\t&__tabs {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\n\t\t> * {\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=i},54135:(t,n,e)=>{e.d(n,{A:()=>s});var o=e(71354),a=e.n(o),r=e(76314),i=e.n(r)()(a());i.push([t.id,"\n.slide-in-enter-active,\n.slide-in-leave-active,\n.slide-out-enter-active,\n.slide-out-leave-active {\n  transition: all .4s ease-out;\n}\n.slide-in-leave-to,\n.slide-out-enter {\n  opacity: 0;\n  transform: translateX(50%);\n}\n.slide-in-enter,\n.slide-out-leave-to {\n  opacity: 0;\n  transform: translateX(-50%);\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/AppStoreDiscover/CarouselType.vue"],names:[],mappings:";AAuLA;;;;EAIA,4BAAA;AACA;AAEA;;EAEA,UAAA;EACA,0BAAA;AACA;AAEA;;EAEA,UAAA;EACA,2BAAA;AACA",sourcesContent:['<template>\n\t<section :aria-roledescription="t(\'settings\', \'Carousel\')" :aria-labelledby="headingId ? `${headingId}` : undefined">\n\t\t<h3 v-if="headline" :id="headingId">\n\t\t\t{{ translatedHeadline }}\n\t\t</h3>\n\t\t<div class="app-discover-carousel__wrapper">\n\t\t\t<div class="app-discover-carousel__button-wrapper">\n\t\t\t\t<NcButton class="app-discover-carousel__button app-discover-carousel__button--previous"\n\t\t\t\t\ttype="tertiary-no-background"\n\t\t\t\t\t:aria-label="t(\'settings\', \'Previous slide\')"\n\t\t\t\t\t:disabled="!hasPrevious"\n\t\t\t\t\t@click="currentIndex -= 1">\n\t\t\t\t\t<template #icon>\n\t\t\t\t\t\t<NcIconSvgWrapper :path="mdiChevronLeft" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t</div>\n\n\t\t\t<Transition :name="transitionName" mode="out-in">\n\t\t\t\t<PostType v-bind="shownElement"\n\t\t\t\t\t:key="shownElement.id ?? currentIndex"\n\t\t\t\t\t:aria-labelledby="`${internalId}-tab-${currentIndex}`"\n\t\t\t\t\t:dom-id="`${internalId}-tabpanel-${currentIndex}`"\n\t\t\t\t\tinline\n\t\t\t\t\trole="tabpanel" />\n\t\t\t</Transition>\n\n\t\t\t<div class="app-discover-carousel__button-wrapper">\n\t\t\t\t<NcButton class="app-discover-carousel__button app-discover-carousel__button--next"\n\t\t\t\t\ttype="tertiary-no-background"\n\t\t\t\t\t:aria-label="t(\'settings\', \'Next slide\')"\n\t\t\t\t\t:disabled="!hasNext"\n\t\t\t\t\t@click="currentIndex += 1">\n\t\t\t\t\t<template #icon>\n\t\t\t\t\t\t<NcIconSvgWrapper :path="mdiChevronRight" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="app-discover-carousel__tabs" role="tablist" :aria-label="t(\'settings\', \'Choose slide to display\')">\n\t\t\t<NcButton v-for="index of content.length"\n\t\t\t\t:id="`${internalId}-tab-${index}`"\n\t\t\t\t:key="index"\n\t\t\t\t:aria-label="t(\'settings\', \'{index} of {total}\', { index, total: content.length })"\n\t\t\t\t:aria-controls="`${internalId}-tabpanel-${index}`"\n\t\t\t\t:aria-selected="`${currentIndex === (index - 1)}`"\n\t\t\t\trole="tab"\n\t\t\t\ttype="tertiary-no-background"\n\t\t\t\t@click="currentIndex = index - 1">\n\t\t\t\t<template #icon>\n\t\t\t\t\t<NcIconSvgWrapper :path="currentIndex === (index - 1) ? mdiCircleSlice8 : mdiCircleOutline" />\n\t\t\t\t</template>\n\t\t\t</NcButton>\n\t\t</div>\n\t</section>\n</template>\n\n<script lang="ts">\nimport type { PropType } from \'vue\'\nimport type { IAppDiscoverCarousel } from \'../../constants/AppDiscoverTypes.ts\'\n\nimport { mdiChevronLeft, mdiChevronRight, mdiCircleOutline, mdiCircleSlice8 } from \'@mdi/js\'\nimport { translate as t } from \'@nextcloud/l10n\'\nimport { computed, defineComponent, nextTick, ref, watch } from \'vue\'\nimport { commonAppDiscoverProps } from \'./common.ts\'\nimport { useLocalizedValue } from \'../../composables/useGetLocalizedValue.ts\'\n\nimport NcButton from \'@nextcloud/vue/dist/Components/NcButton.js\'\nimport NcIconSvgWrapper from \'@nextcloud/vue/dist/Components/NcIconSvgWrapper.js\'\nimport PostType from \'./PostType.vue\'\n\nexport default defineComponent({\n\tname: \'CarouselType\',\n\n\tcomponents: {\n\t\tNcButton,\n\t\tNcIconSvgWrapper,\n\t\tPostType,\n\t},\n\n\tprops: {\n\t\t...commonAppDiscoverProps,\n\n\t\t/**\n\t\t * The content of the carousel\n\t\t */\n\t\tcontent: {\n\t\t\ttype: Array as PropType<IAppDiscoverCarousel[\'content\']>,\n\t\t\trequired: true,\n\t\t},\n\t},\n\n\tsetup(props) {\n\t\tconst translatedHeadline = useLocalizedValue(computed(() => props.headline))\n\n\t\tconst currentIndex = ref(Math.min(1, props.content.length - 1))\n\t\tconst shownElement = ref(props.content[currentIndex.value])\n\t\tconst hasNext = computed(() => currentIndex.value < (props.content.length - 1))\n\t\tconst hasPrevious = computed(() => currentIndex.value > 0)\n\n\t\tconst internalId = computed(() => props.id ?? (Math.random() + 1).toString(36).substring(7))\n\t\tconst headingId = computed(() => `${internalId.value}-h`)\n\n\t\tconst transitionName = ref(\'slide-in\')\n\t\twatch(() => currentIndex.value, (o, n) => {\n\t\t\tif (o < n) {\n\t\t\t\ttransitionName.value = \'slide-in\'\n\t\t\t} else {\n\t\t\t\ttransitionName.value = \'slide-out\'\n\t\t\t}\n\n\t\t\t// Wait next tick\n\t\t\tnextTick(() => {\n\t\t\t\tshownElement.value = props.content[currentIndex.value]\n\t\t\t})\n\t\t})\n\n\t\treturn {\n\t\t\tt,\n\t\t\tinternalId,\n\t\t\theadingId,\n\n\t\t\thasNext,\n\t\t\thasPrevious,\n\t\t\tcurrentIndex,\n\t\t\tshownElement,\n\n\t\t\ttransitionName,\n\n\t\t\ttranslatedHeadline,\n\n\t\t\tmdiChevronLeft,\n\t\t\tmdiChevronRight,\n\t\t\tmdiCircleOutline,\n\t\t\tmdiCircleSlice8,\n\t\t}\n\t},\n})\n<\/script>\n\n<style scoped lang="scss">\nh3 {\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tmargin-block: 0 1em;\n}\n\n.app-discover-carousel {\n\t&__wrapper {\n\t\tdisplay: flex;\n\t}\n\n\t&__button {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tposition: absolute;\n\t\ttop: calc(50% - 22px); // 50% minus half of button height\n\n\t\t&-wrapper {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t// See padding of discover section\n\t\t&--next {\n\t\t\tright: -54px;\n\t\t}\n\t\t&--previous {\n\t\t\tleft: -54px;\n\t\t}\n\t}\n\n\t&__tabs {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\n\t\t> * {\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\t}\n}\n</style>\n\n<style>\n.slide-in-enter-active,\n.slide-in-leave-active,\n.slide-out-enter-active,\n.slide-out-leave-active {\n  transition: all .4s ease-out;\n}\n\n.slide-in-leave-to,\n.slide-out-enter {\n  opacity: 0;\n  transform: translateX(50%);\n}\n\n.slide-in-enter,\n.slide-out-leave-to {\n  opacity: 0;\n  transform: translateX(-50%);\n}\n</style>\n'],sourceRoot:""}]);const s=i},73865:(t,n,e)=>{e.r(n),e.d(n,{default:()=>E});var o=e(9165),a=e(53334),r=e(85471),i=e(77796),s=e(74640),c=e(9518),l=e(6695),d=e(21544);const p=(0,r.pM)({name:"CarouselType",components:{NcButton:c.A,NcIconSvgWrapper:l.A,PostType:d.default},props:{...i.K,content:{type:Array,required:!0}},setup(t){const n=(0,s.O)((0,r.EW)((()=>t.headline))),e=(0,r.KR)(Math.min(1,t.content.length-1)),i=(0,r.KR)(t.content[e.value]),c=(0,r.EW)((()=>e.value<t.content.length-1)),l=(0,r.EW)((()=>e.value>0)),d=(0,r.EW)((()=>{var n;return null!==(n=t.id)&&void 0!==n?n:(Math.random()+1).toString(36).substring(7)})),p=(0,r.EW)((()=>"".concat(d.value,"-h"))),u=(0,r.KR)("slide-in");return(0,r.wB)((()=>e.value),((n,o)=>{u.value=n<o?"slide-in":"slide-out",(0,r.dY)((()=>{i.value=t.content[e.value]}))})),{t:a.Tl,internalId:d,headingId:p,hasNext:c,hasPrevious:l,currentIndex:e,shownElement:i,transitionName:u,translatedHeadline:n,mdiChevronLeft:o.LyG,mdiChevronRight:o.mI8,mdiCircleOutline:o.h$D,mdiCircleSlice8:o.xSL}}});var u=e(85072),v=e.n(u),A=e(97825),m=e.n(A),h=e(77659),x=e.n(h),C=e(55056),b=e.n(C),f=e(10540),g=e.n(f),_=e(41113),y=e.n(_),I=e(58410),N={};N.styleTagTransform=y(),N.setAttributes=b(),N.insert=x().bind(null,"head"),N.domAPI=m(),N.insertStyleElement=g(),v()(I.A,N),I.A&&I.A.locals&&I.A.locals;var w=e(54135),k={};k.styleTagTransform=y(),k.setAttributes=b(),k.insert=x().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=g(),v()(w.A,k),w.A&&w.A.locals&&w.A.locals;const E=(0,e(14486).A)(p,(function(){var t,n=this,e=n._self._c;return n._self._setupProxy,e("section",{attrs:{"aria-roledescription":n.t("settings","Carousel"),"aria-labelledby":n.headingId?"".concat(n.headingId):void 0}},[n.headline?e("h3",{attrs:{id:n.headingId}},[n._v("\n\t\t"+n._s(n.translatedHeadline)+"\n\t")]):n._e(),n._v(" "),e("div",{staticClass:"app-discover-carousel__wrapper"},[e("div",{staticClass:"app-discover-carousel__button-wrapper"},[e("NcButton",{staticClass:"app-discover-carousel__button app-discover-carousel__button--previous",attrs:{type:"tertiary-no-background","aria-label":n.t("settings","Previous slide"),disabled:!n.hasPrevious},on:{click:function(t){n.currentIndex-=1}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:n.mdiChevronLeft}})]},proxy:!0}])})],1),n._v(" "),e("Transition",{attrs:{name:n.transitionName,mode:"out-in"}},[e("PostType",n._b({key:null!==(t=n.shownElement.id)&&void 0!==t?t:n.currentIndex,attrs:{"aria-labelledby":"".concat(n.internalId,"-tab-").concat(n.currentIndex),"dom-id":"".concat(n.internalId,"-tabpanel-").concat(n.currentIndex),inline:"",role:"tabpanel"}},"PostType",n.shownElement,!1))],1),n._v(" "),e("div",{staticClass:"app-discover-carousel__button-wrapper"},[e("NcButton",{staticClass:"app-discover-carousel__button app-discover-carousel__button--next",attrs:{type:"tertiary-no-background","aria-label":n.t("settings","Next slide"),disabled:!n.hasNext},on:{click:function(t){n.currentIndex+=1}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:n.mdiChevronRight}})]},proxy:!0}])})],1)],1),n._v(" "),e("div",{staticClass:"app-discover-carousel__tabs",attrs:{role:"tablist","aria-label":n.t("settings","Choose slide to display")}},n._l(n.content.length,(function(t){return e("NcButton",{key:t,attrs:{id:"".concat(n.internalId,"-tab-").concat(t),"aria-label":n.t("settings","{index} of {total}",{index:t,total:n.content.length}),"aria-controls":"".concat(n.internalId,"-tabpanel-").concat(t),"aria-selected":"".concat(n.currentIndex===t-1),role:"tab",type:"tertiary-no-background"},on:{click:function(e){n.currentIndex=t-1}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:n.currentIndex===t-1?n.mdiCircleSlice8:n.mdiCircleOutline}})]},proxy:!0}],null,!0)})})),1)])}),[],!1,null,"ee726cc0",null).exports}}]);
//# sourceMappingURL=3865-3865.js.map?v=1b3dd2786e4df4dcbf8d
"use strict";(self.webpackChunksan_router=self.webpackChunksan_router||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"navigation-guards",sidebar_label:"\u5bfc\u822a\u5b88\u536b",slug:"/guide/navigation-guards",title:"\u5bfc\u822a\u5b88\u536b"},u=void 0,s={unversionedId:"guide/navigation-guards",id:"guide/navigation-guards",title:"\u5bfc\u822a\u5b88\u536b",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/website/docs/guide/navigation-guards.md",sourceDirName:"guide",slug:"/guide/navigation-guards",permalink:"/san-router/docs/guide/navigation-guards",draft:!1,editUrl:"https://github.com/BUPTlhuanyu/san-router/tree/master/website/docs/guide/navigation-guards.md",tags:[],version:"current",frontMatter:{id:"navigation-guards",sidebar_label:"\u5bfc\u822a\u5b88\u536b",slug:"/guide/navigation-guards",title:"\u5bfc\u822a\u5b88\u536b"},sidebar:"guide",previous:{title:"\u7f16\u7a0b\u5f0f\u8def\u7531",permalink:"/san-router/docs/guide/programmatic-navigation"},next:{title:"API",permalink:"/san-router/docs/api"}},c={},p=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8def\u7531\u91cd\u5b9a\u5411",id:"\u8def\u7531\u91cd\u5b9a\u5411",level:3},{value:"\u4e2d\u65ad/\u5524\u9192\u8def\u7531\u8fc7\u7a0b",id:"\u4e2d\u65ad\u5524\u9192\u8def\u7531\u8fc7\u7a0b",level:3}],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"route.listen")," \u6dfb\u52a0\u8def\u7531\u76d1\u542c\u5668\uff0c\u7528\u4e8e\u5168\u5c40\u524d\u7f6e\u5b88\u536b\uff1b\u5f53\u53d1\u751f\u8def\u7531\u884c\u4e3a\u65f6\uff0c\u76d1\u542c\u5668\u51fd\u6570\u88ab\u89e6\u53d1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {router} from 'san-router';\nrouter.listen(function (/* listener \u4e8b\u4ef6\u5bf9\u8c61 */listenerEvent) {\n    // \u53d6\u6d88\u5bfc\u822a\u8df3\u8f6c\n    listenerEvent.stop();\n});\n")),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5b88\u536b\u65b9\u6cd5\u90fd\u4f1a\u63a5\u6536\u4e00\u4e2a\u4e8b\u4ef6\u5bf9\u8c61\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listenerEvent\uff1a\u8def\u7531\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"/san-router/docs/data-structure#listenerevent"},"listenerEvent"))),(0,i.kt)("h3",{id:"\u8def\u7531\u91cd\u5b9a\u5411"},"\u8def\u7531\u91cd\u5b9a\u5411"),(0,i.kt)("p",null,"\u8def\u7531\u76d1\u542c\u5668\u4f5c\u4e3a\u6240\u6709\u8def\u7531\u7684\u5207\u9762\u51fd\u6570\uff0c\u901a\u5e38\u627f\u62c5\u6743\u9650\u5224\u65ad\u4e4b\u7c7b\u57fa\u7840\u7684\u4efb\u52a1\u3002\u6240\u4ee5\u8def\u7531\u76d1\u542c\u5668\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," \u65b9\u6cd5\u963b\u65ad\u5f53\u524d\u8def\u7531\u8fc7\u7a0b\uff0c\u5e76\u8fdb\u884c URL \u8df3\u8f6c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"router.listen(function (e) {\n    if (!checkPermission()) {\n        e.stop();\n        this.locator.redirect('/forbidden');\n    }\n});\n")),(0,i.kt)("h3",{id:"\u4e2d\u65ad\u5524\u9192\u8def\u7531\u8fc7\u7a0b"},"\u4e2d\u65ad/\u5524\u9192\u8def\u7531\u8fc7\u7a0b"),(0,i.kt)("p",null,"\u8def\u7531\u76d1\u542c\u5668\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," \u65b9\u6cd5\u4e2d\u65ad\u548c\u5524\u9192\u8def\u7531\u8fc7\u7a0b\uff0c\u5b9e\u73b0\u5f02\u6b65\u3002\u4e0d\u8fc7\u5f02\u6b65\u8fc7\u7a0b\u4f1a\u5bfc\u81f4\u8def\u7531\u5bf9\u5e94\u7684\u89c6\u56fe\u6e32\u67d3\u5ef6\u8fdf\uff0c\u8bf7\u614e\u7528\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"router.listen(function (e) {\n    e.suspend();\n    checkPermission().then(invalid => {\n        if (invalid) {\n            e.stop();\n            this.locator.redirect('/forbidden');\n            return;\n        }\n\n        e.resume();\n    });\n});\n")))}g.isMDXComponent=!0}}]);
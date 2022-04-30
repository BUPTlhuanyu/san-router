"use strict";(self.webpackChunksan_router=self.webpackChunksan_router||[]).push([[18],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],u={id:"nested-routes",sidebar_label:"\u5d4c\u5957\u8def\u7531",slug:"/guid/nested-routes",title:"\u5d4c\u5957\u8def\u7531"},i=void 0,c={unversionedId:"guid/nested-routes",id:"guid/nested-routes",title:"\u5d4c\u5957\u8def\u7531",description:"\u6ce8\u610f\uff1a\u4f7f\u7528 s-is \u6307\u4ee4\uff0c\u8981\u6c42 San \u7684\u7248\u672c\u53f7 >= 3.10.0",source:"@site/website/docs/guid/nested-routes.md",sourceDirName:"guid",slug:"/guid/nested-routes",permalink:"/san-router/docs/guid/nested-routes",editUrl:"https://github.com/BUPTlhuanyu/san-router/tree/master/website/docs/guid/nested-routes.md",tags:[],version:"current",frontMatter:{id:"nested-routes",sidebar_label:"\u5d4c\u5957\u8def\u7531",slug:"/guid/nested-routes",title:"\u5d4c\u5957\u8def\u7531"},sidebar:"guide",previous:{title:"\u52a8\u6001\u8def\u7531\u5339\u914d",permalink:"/san-router/docs/guid/dynamic-route-matching"},next:{title:"\u8def\u7531\u61d2\u52a0\u8f7d",permalink:"/san-router/docs/guid/lazy-loading-routes"}},l={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f7f\u7528 s-is \u6307\u4ee4\uff0c\u8981\u6c42 San \u7684\u7248\u672c\u53f7 >= 3.10.0")),(0,a.kt)("p",null,"\u4e00\u4e9b\u9875\u9762\u7684 UI \u7531\u591a\u5c42\u5d4c\u5957\u7684\u7ec4\u4ef6\u7ec4\u6210\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cURL \u7684\u7247\u6bb5\u901a\u5e38\u5bf9\u5e94\u4e8e\u7279\u5b9a\u7684\u5d4c\u5957\u7ec4\u4ef6\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/user/home                     /user/about\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |  +------------\x3e  | +-------------+ |\n| | home         | |                  | | about       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5229\u7528 san-router \u63d0\u4f9b\u7684 withRoute \u6765\u5b9e\u73b0\u4e0a\u8ff0\u7684\u529f\u80fd\uff0cwithRoute \u4f1a\u5728\u4efb\u610f\u7684 san \u7ec4\u4ef6\u5b9e\u4f8b $router \u5c5e\u6027\u4e0a\u6302\u5728\u8def\u7531\u5b9e\u4f8b\u5bf9\u8c61 $router\uff0c\u5e76\u5728\u8be5\u7ec4\u4ef6 data \u7684 route \u4e0a\u6dfb\u52a0\u8def\u7531\u4fe1\u606f\uff1b\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8be5\u8def\u7531\u4fe1\u606f\u83b7\u53d6\u5230\u5f53\u524d url \u5bf9\u5e94\u7684 query \u6570\u636e\uff0c\u6bd4\u5982\u8fd9\u91cc\u7684\u52a8\u6001\u8def\u7531\u53c2\u6570 query.name\u3002\u83b7\u53d6\u5230 name \u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528 san \u6307\u4ee4 s-is \u52a8\u6001\u5730\u6e32\u67d3 name \u5bf9\u5e94\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u83b7\u53d6\u8def\u7531\u5b9e\u4f8b\nimport {withRoute, router, Link} from 'san-router';\n\n// \u521b\u5efa content\nconst Home = san.defineComponent({\n    template: '<div class=\"content\">home</div>'\n});\nconst About = san.defineComponent({\n    template: '<div class=\"content\">about</div>'\n});\nconst Content = withRoute(san.defineComponent({\n    template: `\n        <div class=\"abc\" style=\"width:100px;height:100px;background-color:green\">\n            <div s-is=\"route.query.name\"></div>\n        </div>\n    `,\n    inited: function () {\n        myApp = this;\n        console.log(this.data.get('route'));\n    },\n    attached:  function () {\n        console.log(this.data.get('route'));\n        this.watch('route', (val) => {\n            console.log(val);\n        })\n    },\n    components: {\n        'home': Home,\n        'about': About\n    }\n}));\n\n// \u521b\u5efauser\u7ec4\u4ef6\nconst User = san.defineComponent({\n    template: `\n        <div>\n            <s-content></s-content>\n        </div>\n    `,\n    components: {\n        's-content': Content\n    }\n});\n\n// \u521b\u5efa App\nconst App = san.defineComponent({\n    template: `\n        <div>\n            <router-link to=\"/user/home\">click to home</router-link>\n            <router-link to=\"/user/about\">click to about</router-link>\n        </div>\n    `,\n    components: {\n        'router-link': Link\n    }\n});\n\n// \u6dfb\u52a0\u8def\u7531\nrouter.add([\n    {\n        rule: '/app',\n        Component: App\n    },\n    {\n        rule: '/user/:name',\n        Component: User\n    }\n]);\n")))}m.isMDXComponent=!0}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4081)}])},1100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(8754),i=r(1757)._(r(7294)),o=n._(r(3935)),a=n._(r(4764)),s=r(8484),l=r(2666),c=r(4845);r(9982);let d=r(4167),u=n._(r(4148)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,n,i,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){let[t,r]=i.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:s,decoding:l,className:c,style:d,fetchPriority:u,placeholder:f,loading:g,unoptimized:h,fill:_,onLoadRef:x,onLoadingCompleteRef:v,setBlurComplete:j,setShowAltText:b,onLoad:w,onError:y,...S}=e;return i.default.createElement("img",{...S,...m(u),loading:g,width:s,height:a,decoding:l,"data-nimg":_?"fill":"1",className:c,style:d,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&p(e,f,x,v,j,h))},[r,f,x,v,j,y,h,t]),onLoad:e=>{p(e.currentTarget,f,x,v,j,h)},onError:e=>{b(!0),"empty"!==f&&j(!0),y&&y(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,n),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let _=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=f||n||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:p}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let _=(0,i.useRef)(p);(0,i.useEffect)(()=>{_.current=p},[p]);let[x,v]=(0,i.useState)(!1),[j,b]=(0,i.useState)(!1),{props:w,meta:y}=(0,s.getImgProps)(e,{defaultLoader:u.default,imgConf:o,blurComplete:x,showAltText:j});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...w,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:m,onLoadingCompleteRef:_,setBlurComplete:v,setShowAltText:b,ref:t}),y.priority?i.default.createElement(h,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(9982);let n=r(2528),i=r(2666);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:_,height:x,fill:v=!1,style:j,onLoad:b,onLoadingComplete:w,placeholder:y="empty",blurDataURL:S,fetchPriority:N,layout:E,objectFit:C,objectPosition:P,lazyBoundary:z,lazyRoot:I,...k}=e,{imgConf:O,showAltText:R,blurComplete:L,defaultLoader:M}=t,A=O||i.imageConfigDefault;if("allSizes"in A)s=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);s={...A,allSizes:e,deviceSizes:t}}let D=k.loader||M;delete k.loader,delete k.srcSet;let H="__next_img_default"in D;if(H){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!u&&(u=t)}let F="",V=a(_),B=a(x);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,F=e.src,!v){if(V||B){if(V&&!B){let t=V/e.width;B=Math.round(e.height*t)}else if(!V&&B){let t=B/e.height;V=Math.round(e.width*t)}}else V=e.width,B=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),s.unoptimized&&(f=!0),H&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),p&&(N="high");let T=a(h),U=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},R?{}:{color:"transparent"},j),W=L||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:V,heightInt:B,blurWidth:l,blurHeight:c,blurDataURL:S||"",objectFit:U.objectFit})+'")':'url("'+y+'")',X=W?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:s,src:d,unoptimized:f,width:V,quality:T,sizes:u,loader:D});return{props:{...k,loading:G?"lazy":m,fetchPriority:N,width:V,height:B,decoding:"async",className:g,style:{...U,...X},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:f,priority:p,placeholder:y,fill:v}}}},2528:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n?40*n:t,l=i?40*i:r,c=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let n=r(8754),i=r(8484),o=r(9982),a=r(1100),s=n._(r(4148)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},4148:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4081:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),i=r(5087),o=r.n(i),a=r(9008),s=r.n(a),l=r(5675),c=r.n(l),d=r(9647),u=r.n(d);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"".concat(u().main," ").concat(o().className),children:[(0,n.jsxs)("div",{className:u().description,children:[(0,n.jsxs)("p",{children:["Get started by editing\xa0",(0,n.jsx)("code",{className:u().code,children:"pages/index.js"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,n.jsx)("div",{className:u().center,children:(0,n.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,n.jsxs)("div",{className:u().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Docs ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Learn ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Templates ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{children:["Deploy ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},5087:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},9647:function(e){e.exports={main:"Home_main__VkIEL",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",center:"Home_center__O_TIN",logo:"Home_logo__IOQAX",content:"Home_content__tkQPU",vercelLogo:"Home_vercelLogo___BVuc",rotate:"Home_rotate__c5eru"}},9008:function(e,t,r){e.exports=r(4764)},5675:function(e,t,r){e.exports=r(256)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
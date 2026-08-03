import{n as e,r as t,t as n}from"./index-Cvr4rz2b.js";var r=t(e(),1),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=[`attr`,`size`,`title`];function s(e,t){if(e==null)return{};var n,r,i=c(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?u(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=m(e,`string`);return typeof t==`symbol`?t:t+``}function m(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function h(e){return e&&e.map((e,t)=>r.createElement(e.tag,d({key:t},e.attr),h(e.child)))}function g(e){return t=>r.createElement(_,l({attr:d({},e.attr)},t),h(e.child))}function _(e){var t=t=>{var n=e.attr,i=e.size,a=e.title,c=s(e,o),u=i||t.size||`1em`,f;return t.className&&(f=t.className),e.className&&(f=(f?f+` `:``)+e.className),r.createElement(`svg`,l({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,c,{className:f,style:d(d({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:`http://www.w3.org/2000/svg`}),a&&r.createElement(`title`,null,a),e.children)};return a===void 0?t(i):r.createElement(a.Consumer,null,e=>t(e))}function v(e){return g({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)}function y(e){return g({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function b(e){return g({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`},child:[]},{tag:`polyline`,attr:{points:`22,6 12,13 2,6`},child:[]}]})(e)}var x=n();function S(){let[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(([n])=>{n.isIntersecting&&(t(!0),e.disconnect())},{rootMargin:`200px`});return n.current&&e.observe(n.current),()=>{e.disconnect()}},[]),(0,r.useEffect)(()=>{if(!e)return;let t=document.createElement(`script`);return t.src=`https://link.kdlead.com/js/form_embed.js`,t.async=!0,document.body.appendChild(t),()=>{document.body.removeChild(t)}},[e]),(0,x.jsx)(`section`,{ref:n,id:`contact`,className:`\r
pt-12\r
pb-24\r
bg-[#F5EFE6]\r
`,children:(0,x.jsx)(`div`,{className:`\r
max-w-7xl\r
mx-auto\r
px-6\r
`,children:(0,x.jsxs)(`div`,{className:`\r
grid\r
lg:grid-cols-2\r
gap-12\r
items-center\r
`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`span`,{className:`\r
inline-block\r
-mt-6\r
bg-[#6B3F1F]/10\r
text-[#6B3F1F]\r
px-5\r
py-2\r
rounded-full\r
text-sm\r
font-semibold\r
`,children:`Contact Us`}),(0,x.jsxs)(`h2`,{className:`\r
mt-6\r
text-4xl\r
md:text-5xl\r
font-bold\r
text-[#2A2118]\r
leading-tight\r
`,children:[`Let's Take Care`,(0,x.jsx)(`br`,{}),`Of Your Trees`]}),(0,x.jsx)(`p`,{className:`\r
mt-5\r
text-[#3D2B1F]\r
text-lg\r
leading-relaxed\r
`,children:`Get professional tree care solutions from Apex Tree Service. Contact our team today for a free estimate and reliable service.`}),(0,x.jsxs)(`div`,{className:`\r
mt-8\r
space-y-5\r
`,children:[(0,x.jsxs)(`div`,{className:`\r
flex\r
items-center\r
gap-4\r
`,children:[(0,x.jsx)(`div`,{className:`\r
w-12\r
h-12\r
rounded-full\r
bg-[#6B3F1F]\r
text-white\r
flex\r
items-center\r
justify-center\r
`,children:(0,x.jsx)(v,{size:20})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-sm text-[#5B4636]`,children:`Phone`}),(0,x.jsx)(`p`,{className:`font-semibold text-[#2A2118]`,children:`716-638-3737`})]})]}),(0,x.jsxs)(`div`,{className:`\r
flex\r
items-center\r
gap-4\r
`,children:[(0,x.jsx)(`div`,{className:`\r
w-12\r
h-12\r
rounded-full\r
bg-[#6B3F1F]\r
text-white\r
flex\r
items-center\r
justify-center\r
`,children:(0,x.jsx)(b,{size:20})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-sm text-[#5B4636]`,children:`Email`}),(0,x.jsx)(`p`,{className:`font-semibold text-[#2A2118]`,children:`sales@kdnursery.com`})]})]}),(0,x.jsxs)(`div`,{className:`\r
flex\r
items-center\r
gap-4\r
`,children:[(0,x.jsx)(`div`,{className:`\r
w-12\r
h-12\r
rounded-full\r
bg-[#6B3F1F]\r
text-white\r
flex\r
items-center\r
justify-center\r
`,children:(0,x.jsx)(y,{size:20})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`text-sm text-[#5B4636]`,children:`Location`}),(0,x.jsx)(`p`,{className:`font-semibold text-[#2A2118]`,children:`40 Stevens Ave, Buffalo`})]})]})]}),(0,x.jsxs)(`div`,{className:`\r
mt-10\r
bg-[#2A2118]\r
rounded-3xl\r
p-6\r
text-white\r
max-w-md\r
`,children:[(0,x.jsx)(`h3`,{className:`\r
text-xl\r
font-bold\r
`,children:`Need Tree Service?`}),(0,x.jsx)(`p`,{className:`\r
mt-2\r
text-white/90\r
`,children:`Request your free estimate today and our team will get back to you soon.`})]})]}),(0,x.jsx)(`div`,{className:`\r
bg-white\r
rounded-3xl\r
shadow-xl\r
p-4\r
h-[900px]\r
overflow-hidden\r
`,children:e?(0,x.jsx)(`iframe`,{src:`https://link.kdlead.com/widget/form/GgppPqKwcgVCRtwYVFFz`,loading:`lazy`,style:{width:`100%`,height:`100%`,border:`none`,borderRadius:`8px`},id:`inline-GgppPqKwcgVCRtwYVFFz`,"data-layout":`{"id":"INLINE"}`,"data-trigger-type":`alwaysShow`,"data-activation-type":`alwaysActivated`,"data-deactivation-type":`neverDeactivate`,"data-form-name":`Apex tree service`,"data-height":`871`,"data-layout-iframe-id":`inline-GgppPqKwcgVCRtwYVFFz`,"data-form-id":`GgppPqKwcgVCRtwYVFFz`,title:`Apex tree service`}):(0,x.jsx)(`div`,{className:`\r
h-full\r
flex\r
items-center\r
justify-center\r
text-[#5B4636]\r
font-medium\r
`,children:`Loading form...`})})]})})})}export{S as default};
import{n as e,r as t,t as n}from"./index-CUsSKEFU.js";import{t as r}from"./about-BTaSlNHS.js";var i=t(e(),1),a=n();function o(e){(0,i.useEffect)(()=>{let t=e.current?.querySelectorAll(`.sr,.sr-l,.sr-r`),n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`on`)})},{threshold:.12});return t?.forEach(e=>n.observe(e)),()=>{t?.forEach(e=>n.unobserve(e))}},[e])}function s(){let e=(0,i.useRef)(null);return o(e),(0,a.jsxs)(`section`,{id:`about`,ref:e,className:`
relative
py-28
overflow-hidden
bg-[#f8faf8]
`,children:[(0,a.jsx)(`div`,{className:`
absolute
top-0
right-0
w-[500px]
h-[500px]
rounded-full
pointer-events-none
`,style:{background:`radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%)`,transform:`translate(30%,-30%)`}}),(0,a.jsxs)(`div`,{className:`
max-w-7xl
mx-auto
px-6
lg:px-16
grid
lg:grid-cols-2
gap-20
items-center
`,children:[(0,a.jsxs)(`div`,{className:`
relative
sr-l
max-w-[450px]
`,children:[(0,a.jsx)(`div`,{className:`
absolute
bottom-[-24px]
right-[-24px]
w-full
h-full
rounded-[32px]
border-2
border-[#d4a843]/30
`}),(0,a.jsxs)(`div`,{className:`
relative
rounded-[28px]
overflow-hidden
shadow-2xl
`,children:[(0,a.jsx)(`img`,{src:r,alt:`About Apex Tree Service`,width:`450`,height:`450`,loading:`lazy`,decoding:`async`,sizes:`(max-width:768px) 100vw,450px`,className:`
w-full
max-w-[450px]
h-[380px]
lg:h-[450px]
object-cover
block
rounded-[28px]
`}),(0,a.jsx)(`div`,{className:`
absolute
bottom-0
left-0
right-0
h-24
`,style:{background:`linear-gradient(to top,rgba(26,60,46,0.55),transparent)`}})]}),(0,a.jsxs)(`div`,{className:`
absolute
top-[-24px]
left-[-24px]
z-10
bg-gradient-to-br
from-[#1a3c2e]
to-[#2d6e4e]
rounded-2xl
px-7
py-5
shadow-xl
`,children:[(0,a.jsxs)(`p`,{className:`
text-4xl
font-black
text-white
`,children:[`25`,(0,a.jsx)(`span`,{className:`text-[#d4a843]`,children:`+`})]}),(0,a.jsx)(`p`,{className:`
text-[10px]
uppercase
tracking-[3px]
text-white/70
mt-1
`,children:`Years Trusted`})]})]}),(0,a.jsxs)(`div`,{className:`
sr-r
`,children:[(0,a.jsxs)(`div`,{className:`
flex
items-center
gap-3
mb-5
`,children:[(0,a.jsx)(`div`,{className:`
h-[2px]
w-8
bg-[#d4a843]
`}),(0,a.jsx)(`span`,{className:`
text-xs
font-bold
uppercase
tracking-[4px]
text-[#d4a843]
`,children:`Who We Are`})]}),(0,a.jsxs)(`h2`,{className:`
text-4xl
lg:text-5xl
font-black
leading-tight
text-[#1a3c2e]
`,children:[`Caring For Trees.`,(0,a.jsx)(`br`,{}),`Creating Healthy`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`span`,{className:`text-[#d4a843]`,children:`Landscapes.`})]}),(0,a.jsx)(`p`,{className:`
mt-6
max-w-lg
text-[#5a6e63]
leading-relaxed
`,children:`Apex Tree Service provides professional tree care with safety, quality, and customer satisfaction as our priority. Our experienced team handles tree removal, trimming, pruning and emergency services.`}),(0,a.jsx)(`div`,{className:`
grid
sm:grid-cols-2
gap-4
mt-8
`,children:[{icon:`🌿`,title:`Expert Arborists`,text:`Experienced professionals for safe tree care.`},{icon:`🛡️`,title:`Safety First`,text:`Professional standards on every project.`},{icon:`⚡`,title:`24/7 Emergency`,text:`Fast response for urgent situations.`},{icon:`✅`,title:`Clean Results`,text:`Quality work with clean finishing.`}].map(e=>(0,a.jsxs)(`div`,{className:`
bg-white
rounded-2xl
p-5
border
border-[#1a3c2e]/10
shadow-sm
hover:-translate-y-2
transition
`,children:[(0,a.jsx)(`div`,{className:`text-2xl`,children:e.icon}),(0,a.jsx)(`h3`,{className:`
mt-3
font-bold
text-[#1a3c2e]
`,children:e.title}),(0,a.jsx)(`p`,{className:`
text-sm
text-[#7a8e83]
mt-1
`,children:e.text})]},e.title))}),(0,a.jsx)(`a`,{href:`#services`,className:`
inline-flex
mt-10
items-center
gap-3
bg-[#1a3c2e]
text-white
px-8
py-4
rounded-full
text-sm
font-semibold
hover:bg-[#d4a843]
transition
`,children:`Explore Services →`})]})]}),(0,a.jsx)(`style`,{children:`

.sr,
.sr-l,
.sr-r{

opacity:0;
transition:1s ease;

}



.sr.on{

opacity:1;
transform:none;

}




.sr-l{

transform:translateX(-60px);

}





.sr-r{

transform:translateX(60px);

}





.sr-l.on,
.sr-r.on{

opacity:1;
transform:translateX(0);

}



`})]})}export{s as default};
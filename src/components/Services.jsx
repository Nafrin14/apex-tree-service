import React from "react";


const services = [
  {
    title:"Tree Removal",
    description:"Safe and professional removal for damaged or hazardous trees.",
    icon:"🌳"
  },
  {
    title:"Tree Trimming",
    description:"Improve tree health and appearance with expert trimming.",
    icon:"✂️"
  },
  {
    title:"Tree Pruning",
    description:"Maintain healthy growth with precise pruning techniques.",
    icon:"🍃"
  },
  {
    title:"Emergency Service",
    description:"Fast response for storm damage and dangerous trees.",
    icon:"⚡"
  },
  {
    title:"Stump Removal",
    description:"Complete stump removal to restore your outdoor space.",
    icon:"🪵"
  },
  {
    title:"Land Clearing",
    description:"Professional clearing solutions for properties.",
    icon:"🌿"
  }
];



function Services(){

return(

<section
id="services"
className="
relative
min-h-screen
bg-white
overflow-hidden
py-32
"
>


{/* Background Number */}

<div
className="
absolute
right-0
top-20
text-[260px]
font-extrabold
text-[#8B5E34]/5
select-none
"
>
SERVICES
</div>




{/* Shapes */}

<div
className="
absolute
top-0
left-0
w-[350px]
h-[350px]
bg-[#C89B3C]/20
rounded-full
blur-3xl
"
/>



<div
className="
absolute
bottom-0
right-0
w-[300px]
h-[300px]
bg-[#8B5E34]/10
rounded-full
blur-3xl
"
/>






<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
lg:px-16
grid
lg:grid-cols-12
gap-12
"
>






{/* LEFT */}

<div
className="
lg:col-span-5
opacity-0
animate-[serviceLeft_1s_ease_forwards]
"
>


<p
className="
text-xs
tracking-[5px]
uppercase
font-bold
text-[#8B5E34]
"
>
Our Services
</p>



<h2
className="
mt-6
text-4xl
lg:text-6xl
font-extrabold
leading-tight
text-[#2A2118]
"
>

Complete Tree Care

<br/>

<span
className="
text-[#8B5E34]
"
>
Solutions
</span>

</h2>




<p
className="
mt-6
text-lg
leading-relaxed
text-[#5B4636]
"
>

From routine maintenance to emergency
situations, Apex Tree Service provides
professional solutions to keep your property
safe and beautiful.

</p>





<a
href="#contact"
className="
inline-flex
mt-8
bg-[#2A2118]
text-white
px-9
py-4
rounded-full
font-semibold
hover:bg-[#8B5E34]
transition
"
>
Get Service
</a>



</div>









{/* RIGHT CARDS */}


<div
className="
lg:col-span-7
grid
sm:grid-cols-2
gap-6
"
>


{
services.map((service,index)=>(


<div
key={service.title}
className={`
group
bg-[#F5EFE6]
rounded-[35px]
p-7
shadow-sm
hover:shadow-xl
transition
duration-500
hover:-translate-y-3
opacity-0
animate-[cardUp_0.8s_ease_forwards]
`}
style={{
animationDelay:`${index*0.1}s`
}}
>


<div
className="
w-14
h-14
rounded-2xl
bg-[#2A2118]
flex
items-center
justify-center
text-2xl
group-hover:bg-[#8B5E34]
transition
"
>
{service.icon}
</div>




<h3
className="
mt-6
text-2xl
font-bold
text-[#2A2118]
"
>
{service.title}
</h3>




<p
className="
mt-3
text-sm
leading-relaxed
text-[#6B5848]
"
>
{service.description}
</p>




<div
className="
mt-5
text-[#8B5E34]
font-semibold
text-sm
"
>
Learn More →
</div>



</div>


))
}


</div>




</div>









{/* Bottom Transition */}


<div
className="
absolute
bottom-0
left-0
w-full
"
>

<svg
viewBox="0 0 1440 100"
className="
w-full
h-[90px]
"
preserveAspectRatio="none"
>

<path

d="
M0 70
C350 20 700 100 1440 30
V100
H0
Z
"

fill="#F5EFE6"

/>


</svg>


</div>






<style>

{`

@keyframes serviceLeft{

from{
opacity:0;
transform:translateX(-50px);
}

to{
opacity:1;
transform:translateX(0);
}

}


@keyframes cardUp{

from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}

}

`}

</style>



</section>


)

}


export default Services;
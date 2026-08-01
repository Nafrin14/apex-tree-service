import React from "react";


const features = [
  {
    title:"Experienced Team",
    description:"Skilled professionals providing safe and reliable tree care.",
    icon:"👷"
  },
  {
    title:"Safety First",
    description:"Professional standards to protect your property.",
    icon:"🛡️"
  },
  {
    title:"24/7 Emergency",
    description:"Fast response for urgent tree situations.",
    icon:"⚡"
  },
  {
    title:"Quality Service",
    description:"Reliable workmanship with attention to detail.",
    icon:"⭐"
  }
];



function WhyChooseUs(){

return(

<section
id="why-choose-us"
className="
relative
min-h-screen
bg-[#2A2118]
overflow-hidden
py-32
"
>



{/* Background Shapes */}

<div
className="
absolute
top-0
right-0
w-[450px]
h-[450px]
bg-[#8B5E34]
opacity-30
rounded-full
blur-3xl
"
/>



<div
className="
absolute
bottom-0
left-0
w-[350px]
h-[350px]
bg-[#C89B3C]
opacity-20
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
lg:grid-cols-2
gap-16
items-center
"
>







{/* LEFT CONTENT */}


<div
className="
text-white
opacity-0
animate-[chooseLeft_1s_ease_forwards]
"
>


<p
className="
text-xs
uppercase
tracking-[5px]
font-bold
text-[#C89B3C]
"
>
Why Choose Us
</p>





<h2
className="
mt-6
text-4xl
lg:text-6xl
font-extrabold
leading-tight
"
>

Trusted Tree Care

<br/>

<span
className="
text-[#C89B3C]
"
>
Experts
</span>

</h2>






<p
className="
mt-6
text-white/70
text-lg
leading-relaxed
max-w-lg
"
>

We combine experience, safety and modern
techniques to deliver professional tree care
solutions you can trust.

</p>






<div
className="
mt-10
relative
"
>


<img

src="/images/about.jpg"

alt="Tree Service"

className="
w-full
max-w-md
h-[320px]
object-cover
rounded-[40px]
shadow-2xl
"

/>



<div
className="
absolute
bottom-5
right-5
bg-white
text-[#2A2118]
rounded-3xl
px-6
py-4
shadow-xl
"
>


<p className="text-3xl font-bold">
25+
</p>

<p className="text-xs uppercase tracking-wider">
Years Experience
</p>


</div>



</div>



</div>









{/* RIGHT FEATURES */}


<div
className="
space-y-5
"
>


{
features.map((feature,index)=>(


<div

key={feature.title}

className="
group
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-[30px]
p-6
flex
gap-5
items-center
hover:bg-white
transition-all
duration-500
opacity-0
animate-[featureUp_.8s_ease_forwards]
"

style={{
animationDelay:`${index*0.15}s`
}}

>


<div
className="
w-16
h-16
rounded-2xl
bg-[#C89B3C]
flex
items-center
justify-center
text-3xl
group-hover:scale-110
transition
"
>
{feature.icon}
</div>





<div>

<h3
className="
text-xl
font-bold
text-white
group-hover:text-[#2A2118]
transition
"
>
{feature.title}
</h3>


<p
className="
mt-2
text-sm
text-white/60
group-hover:text-[#6B5848]
transition
"
>
{feature.description}
</p>


</div>




</div>


))
}



</div>







</div>









{/* Bottom Shape */}

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
className="w-full h-[90px]"
preserveAspectRatio="none"
>

<path

d="
M0 50
C400 100 900 0 1440 60
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

@keyframes chooseLeft{

from{
opacity:0;
transform:translateX(-60px);
}

to{
opacity:1;
transform:translateX(0);
}

}


@keyframes featureUp{

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


export default WhyChooseUs;
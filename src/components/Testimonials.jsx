import React from "react";


const reviews = [
{
name:"Michael Johnson",
location:"Syracuse, NY",
review:"Excellent tree service! The team was professional, safe and completed the work perfectly."
},
{
name:"Sarah Williams",
location:"Rochester, NY",
review:"Very reliable service. They removed a dangerous tree quickly and cleaned everything."
},
{
name:"David Brown",
location:"New York",
review:"Great experience from start to finish. Highly recommend their tree care services."
}
];



function Testimonials(){


return(

<section
id="reviews"
className="
relative
min-h-screen
bg-[#F5EFE6]
overflow-hidden
py-32
"
>





{/* Background */}

<div
className="
absolute
right-0
top-0
w-[500px]
h-[500px]
bg-[#C89B3C]/20
rounded-full
blur-3xl
"
/>




<div
className="
absolute
left-0
bottom-0
w-[350px]
h-[350px]
bg-[#8B5E34]/20
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
gap-14
items-center
"
>






{/* LEFT */}

<div
className="
lg:col-span-5
opacity-0
animate-[reviewLeft_1s_ease_forwards]
"
>


<p
className="
text-xs
uppercase
tracking-[5px]
font-bold
text-[#8B5E34]
"
>
Customer Reviews
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

Trusted By

<br/>

<span className="text-[#8B5E34]">
Happy Customers
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

Our customers trust Apex Tree Service
for safe, professional and reliable tree
care solutions.

</p>






<div
className="
mt-10
bg-[#2A2118]
rounded-[30px]
p-7
text-white
max-w-sm
"
>


<div className="text-[#C89B3C] text-3xl">
★★★★★
</div>



<p className="mt-3 text-4xl font-bold">
5.0
</p>


<p className="text-white/60 text-sm">
Average Customer Rating
</p>



</div>




</div>









{/* RIGHT CARDS */}


<div
className="
lg:col-span-7
space-y-6
"
>


{
reviews.map((item,index)=>(


<div
key={item.name}

className="
relative
bg-white
rounded-[35px]
p-7
shadow-lg
hover:-translate-y-2
transition
duration-500
opacity-0
animate-[reviewUp_.8s_ease_forwards]
"

style={{
animationDelay:`${index*0.15}s`
}}

>



<div
className="
absolute
top-5
right-7
text-7xl
font-serif
text-[#8B5E34]/20
"
>
"
</div>




<div
className="
text-[#C89B3C]
text-xl
"
>
★★★★★
</div>




<p
className="
mt-5
text-[#5B4636]
leading-relaxed
max-w-xl
"
>
"{item.review}"
</p>






<div
className="
mt-6
flex
items-center
gap-4
"
>


<div
className="
w-12
h-12
rounded-full
bg-[#2A2118]
flex
items-center
justify-center
text-white
font-bold
"
>
{item.name[0]}
</div>




<div>

<h3
className="
font-bold
text-[#2A2118]
"
>
{item.name}
</h3>


<p
className="
text-sm
text-[#8B5E34]
"
>
{item.location}
</p>


</div>


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
C400 0 900 100 1440 40
V100
H0
Z
"

fill="#2A2118"

/>

</svg>


</div>








<style>

{`

@keyframes reviewLeft{

from{
opacity:0;
transform:translateX(-60px);
}

to{
opacity:1;
transform:translateX(0);
}

}



@keyframes reviewUp{

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


export default Testimonials;
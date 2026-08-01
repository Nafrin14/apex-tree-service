import React from "react";


function About(){

return(

<section
id="about"
className="
relative
min-h-screen
bg-[#F5EFE6]
overflow-hidden
py-28
"
>


{/* Background Shapes */}

<div
className="
absolute
top-0
right-0
w-[420px]
h-[420px]
bg-[#8B5E34]/10
rounded-full
blur-3xl
animate-pulse
"
/>


<div
className="
absolute
bottom-20
left-0
w-[260px]
h-[260px]
bg-[#C89B3C]/20
rotate-45
"
/>





<div
className="
max-w-7xl
mx-auto
px-6
lg:px-16
relative
z-10
"
>




{/* Heading */}


<div
className="
max-w-4xl
mb-16
opacity-0
animate-[fadeUp_1s_ease_forwards]
"
>


<p
className="
text-[#8B5E34]
uppercase
tracking-[5px]
font-bold
text-xs
"
>
About Apex Tree
</p>




<h2
className="
mt-5
text-4xl
sm:text-5xl
lg:text-6xl
font-extrabold
leading-tight
text-[#2A2118]
"
>

Professional Tree Care

<br/>

With

<span
className="
text-[#8B5E34]
"
>
 Experience
</span>

</h2>



</div>







{/* Content */}


<div
className="
grid
lg:grid-cols-12
gap-12
items-center
"
>





{/* IMAGE */}


<div
className="
lg:col-span-7
relative
opacity-0
animate-[slideLeft_1s_ease_.2s_forwards]
"
>


<div
className="
absolute
-top-8
-left-8
w-36
h-36
rounded-full
border
border-[#8B5E34]/30
"
/>





<div
className="
rounded-[45px]
overflow-hidden
shadow-2xl
"
>

<img

src="/images/about.jpg"

alt="Apex Tree"

className="
w-full
h-[520px]
object-cover
animate-[floatImage_5s_ease-in-out_infinite]
"

/>


</div>







{/* Floating Experience */}


<div
className="
absolute
bottom-7
right-7
bg-white
rounded-3xl
shadow-xl
px-7
py-5
animate-[floatCard_4s_ease-in-out_infinite]
"
>


<h3
className="
text-4xl
font-extrabold
text-[#2A2118]
"
>
25+
</h3>


<p
className="
text-sm
text-[#8B5E34]
"
>
Years Experience
</p>


</div>



</div>










{/* TEXT */}


<div
className="
lg:col-span-5
opacity-0
animate-[slideRight_1s_ease_.3s_forwards]
"
>



<p
className="
text-base
lg:text-lg
leading-relaxed
text-[#5B4636]
"
>

Apex Tree Service provides professional tree
solutions with safety, quality and trusted
workmanship. Our experienced team handles
removal, trimming, pruning and emergency
services.

</p>







<div
className="
mt-8
space-y-4
"
>



<div
className="
bg-white
rounded-3xl
p-6
shadow-lg
transition
hover:-translate-y-2
duration-300
"
>


<h3
className="
text-2xl
font-bold
text-[#2A2118]
"
>
Expert Team
</h3>


<p
className="
mt-2
text-sm
text-[#6B5848]
"
>
Skilled professionals delivering safe tree care.
</p>


</div>







<div
className="
bg-[#2A2118]
text-white
rounded-3xl
p-6
transition
hover:-translate-y-2
duration-300
"
>


<h3
className="
text-2xl
font-bold
"
>
Trusted Service
</h3>


<p
className="
mt-2
text-sm
text-white/70
"
>
Reliable solutions for every property.
</p>


</div>



</div>







<a
href="#services"
className="
inline-flex
mt-8
bg-[#8B5E34]
text-white
px-9
py-3.5
rounded-full
font-semibold
transition
hover:bg-[#2A2118]
hover:-translate-y-1
"
>
Learn More
</a>




</div>



</div>









{/* Stats */}


<div
className="
mt-20
grid
grid-cols-2
lg:grid-cols-4
gap-8
border-t
border-[#2A2118]/10
pt-10
opacity-0
animate-[fadeUp_1s_ease_.5s_forwards]
"
>


{
[
["25+","Experience"],
["1000+","Projects"],
["250+","Clients"],
["24/7","Support"]
]
.map(([n,t])=>(


<div key={t}>

<h3
className="
text-3xl
font-extrabold
text-[#2A2118]
"
>
{n}
</h3>


<p
className="
text-xs
uppercase
tracking-[3px]
text-[#8B5E34]
"
>
{t}
</p>


</div>


))
}


</div>






</div>








{/* Bottom Curve */}


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
M0 60
C300 100 500 0 800 50
C1100 100 1300 20 1440 40
V100
H0
Z
"

fill="#FFFFFF"

/>


</svg>


</div>









{/* Animation */}

<style>

{`

@keyframes fadeUp{

from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}

}


@keyframes slideLeft{

from{
opacity:0;
transform:translateX(-60px);
}

to{
opacity:1;
transform:translateX(0);
}

}



@keyframes slideRight{

from{
opacity:0;
transform:translateX(60px);
}

to{
opacity:1;
transform:translateX(0);
}

}



@keyframes floatImage{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-12px);
}

}



@keyframes floatCard{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-10px);
}

}

`}

</style>



</section>

)

}


export default About;
import React from "react";


function Hero() {

return (

<section
id="home"
className="
relative
min-h-screen
bg-[#F5EFE6]
overflow-hidden
flex
items-center
pt-32
pb-32
"
>



{/* TOP LEFT SHAPE */}

<div
className="
absolute
top-0
left-0
w-[330px]
h-[330px]
bg-[#C89B3C]/30
"
style={{
clipPath:"polygon(0 0,100% 0,0 100%)"
}}
/>





{/* RIGHT ANGLE SHAPE */}

<div
className="
absolute
top-0
right-0
w-[50%]
h-full
bg-[#8B5E34]/15
"
style={{
clipPath:
"polygon(35% 0,100% 0,100% 100%,0 100%)"
}}
/>






<div
className="
relative
z-10
max-w-7xl
w-full
mx-auto
px-6
lg:px-16
grid
lg:grid-cols-2
gap-12
items-center
"
>






{/* LEFT CONTENT */}


<div
className="
opacity-0
animate-[heroLeft_1s_ease_forwards]
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
Professional Tree Care
</p>





<h1
className="
mt-6
text-4xl
sm:text-5xl
lg:text-6xl
font-extrabold
leading-[1.05]
text-[#2A2118]
"
>

Protecting Trees.

<br/>

Creating

<span
className="
text-[#8B5E34]
"
>
 Beautiful
</span>

<br/>

Landscapes.

</h1>





<p
className="
mt-6
max-w-lg
text-base
lg:text-lg
leading-relaxed
text-[#5B4636]
"
>

Apex Tree Service provides professional tree
removal, trimming, pruning and emergency
tree solutions with safe and reliable
workmanship.

</p>







<div
className="
mt-8
flex
flex-wrap
gap-4
"
>


<a
href="#contact"
className="
bg-[#2A2118]
text-white
px-8
py-3.5
rounded-full
font-semibold
transition
hover:bg-[#8B5E34]
hover:-translate-y-1
"
>
Get Free Estimate
</a>




<a
href="#services"
className="
border-2
border-[#2A2118]
text-[#2A2118]
px-8
py-3.5
rounded-full
font-semibold
transition
hover:bg-[#2A2118]
hover:text-white
hover:-translate-y-1
"
>
Our Services
</a>



</div>







<div
className="
mt-10
flex
gap-10
"
>


{
[
["25+","Years"],
["1000+","Projects"],
["24/7","Emergency"]
]
.map(([num,text])=>(


<div key={text}>

<h3
className="
text-3xl
font-bold
text-[#2A2118]
"
>
{num}
</h3>


<p
className="
text-xs
uppercase
tracking-wider
text-[#8B5E34]
"
>
{text}
</p>


</div>


))

}



</div>



</div>









{/* IMAGE SIDE */}


<div
className="
relative
flex
justify-center
opacity-0
animate-[heroRight_1.2s_ease_forwards]
"
>



<div
className="
absolute
w-[90%]
h-[90%]
bg-[#8B5E34]
rounded-[45px]
rotate-6
animate-pulse
"
/>





<img

src="/images/hero.jpg"

alt="Apex Tree Service"

className="
relative
z-10
w-full
max-w-[450px]
h-[520px]
object-cover
rounded-[45px]
shadow-2xl
"

/>







<div
className="
absolute
z-20
bottom-8
left-0
bg-white
rounded-3xl
px-7
py-5
shadow-xl
animate-[floatCard_4s_infinite]
"
>


<h3
className="
text-3xl
font-bold
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
Years Trusted Service
</p>


</div>



</div>





</div>










{/* XTRA STYLE BOTTOM DESIGN */}


<div
className="
absolute
bottom-0
left-0
w-full
overflow-hidden
leading-none
"
>


<svg
viewBox="0 0 1440 130"
className="
w-full
h-[130px]
"
preserveAspectRatio="none"
>


<path

d="
M0 20
L1440 95
V130
H0
Z
"

fill="#FFFFFF"

/>



<path

d="
M0 60
L1440 120
V130
H0
Z
"

fill="#C89B3C"
opacity="0.25"

/>



<path

d="
M0 90
L1440 130
V130
H0
Z
"

fill="#8B5E34"
opacity="0.15"

/>



</svg>


</div>










<style>

{`

@keyframes heroLeft{

from{
opacity:0;
transform:translateX(-60px);
}

to{
opacity:1;
transform:translateX(0);
}

}



@keyframes heroRight{

from{
opacity:0;
transform:translateX(60px);
}

to{
opacity:1;
transform:translateX(0);
}

}



@keyframes floatCard{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-12px);
}

}


`}

</style>





</section>

)

}


export default Hero;
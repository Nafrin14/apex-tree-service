import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const MenuIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);


const CloseIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);



function Navbar(){

const [open,setOpen] = useState(false);
const [active,setActive] = useState("home");


const location = useLocation();
const navigate = useNavigate();



const links = [
"Home",
"About",
"Services",
"Why Choose Us",
"Reviews",
"Contact"
];





const goToSection = (id)=>{

setOpen(false);

setActive(id);


if(location.pathname !== "/"){

navigate(`/#${id}`);

}
else{

document
.getElementById(id)
?.scrollIntoView({

behavior:"smooth",
block:"start"

});

}


};







useEffect(()=>{


if(location.pathname !== "/"){

setActive("");

return;

}



const sections =
document.querySelectorAll("section[id]");



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

setActive(entry.target.id);

}


});


},

{

rootMargin:"-25% 0px -65% 0px",
threshold:0

}

);





sections.forEach(section=>{

observer.observe(section);

});





return()=>{


sections.forEach(section=>{

observer.unobserve(section);

});


};



},[location.pathname]);









return(


<header
className="
fixed
top-6
left-0
w-full
z-50
flex
justify-center
"
>


<nav
className="
w-[92%]
max-w-7xl
bg-[#CBB89D]/95
backdrop-blur-xl
rounded-full
border
border-[#2A2118]/15
shadow-xl
px-8
py-4
"
>



<div
className="
flex
items-center
justify-between
"
>





{/* LOGO */}


<button

onClick={()=>goToSection("home")}

className="
flex
items-center
gap-3
text-[#2A2118]
text-lg
sm:text-xl
font-bold
whitespace-nowrap
"

>


<div
className="
w-11
h-11
rounded-full
overflow-hidden
bg-white
flex
items-center
justify-center
"
>

<img

src="/images/logo1.webp"

alt="Apex Tree Service Logo"

className="
w-full
h-full
object-contain
"

/>

</div>




<span>

Apex Tree

<span className="text-[#8B5E34] ml-1">
Service
</span>


</span>


</button>









{/* DESKTOP MENU */}


<div
className="
hidden
lg:flex
items-center
gap-3
"
>


{

links.map((link)=>{


const id =
link
.toLowerCase()
.replaceAll(" ","-");



return(


<button

key={link}

onClick={()=>goToSection(id)}

className={`

px-4
py-2
rounded-full
text-sm
font-medium
transition-all
duration-300


${
active === id

?

"bg-[#8B5E34] text-white shadow-md"

:

"text-[#4B3828] hover:bg-[#8B5E34]/10"

}


`}

>

{link}


</button>


)


})


}







<button

onClick={()=>goToSection("contact")}

className="
bg-[#2A2118]
text-[#F3EBDD]
px-7
py-3
rounded-full
text-sm
font-semibold
hover:bg-[#8B5E34]
transition
ml-3
"

>

Get Quote

</button>





</div>









{/* MOBILE BUTTON */}


<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
text-[#2A2118]
"

>

{

open

?

<CloseIcon/>

:

<MenuIcon/>

}


</button>






</div>



</nav>









{/* MOBILE MENU */}



{

open && (

<div

className="
absolute
top-20
w-[92%]
bg-[#CBB89D]
rounded-3xl
p-6
shadow-xl
border
border-[#2A2118]/15
"

>


<div
className="
flex
flex-col
gap-5
"
>


{

links.map((link)=>{


const id =
link
.toLowerCase()
.replaceAll(" ","-");



return(


<button

key={link}

onClick={()=>goToSection(id)}

className={`

text-left
px-4
py-3
rounded-full
transition


${
active === id

?

"bg-[#8B5E34] text-white shadow-md"

:

"text-[#2A2118]"

}


`}

>

{link}


</button>


)


})


}





<button

onClick={()=>goToSection("contact")}

className="
bg-[#2A2118]
text-white
py-3
rounded-full
font-semibold
"

>

Get Quote

</button>



</div>


</div>


)

}



</header>


);


}


export default Navbar;
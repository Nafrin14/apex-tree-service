import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Footer() {


  const location = useLocation();
  const navigate = useNavigate();



  const goToSection = (id) => {


    if(location.pathname !== "/"){

      navigate(`/#${id}`);

    }
    else{

      document
      .getElementById(id)
      ?.scrollIntoView({
        behavior:"smooth"
      });

    }

  };



  return (

    <footer
      className="
        relative
        bg-[#2A2118]
        text-white
        py-16
        overflow-hidden
      "
    >


      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
          rounded-full
          bg-[#8B5E34]/20
          blur-3xl
        "
      />


      <div
        className="
          absolute
          bottom-0
          left-0
          w-72
          h-72
          rounded-full
          bg-[#D8C3A5]/10
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
          lg:px-12
        "
      >


        <div
          className="
            grid
            md:grid-cols-4
            gap-10
          "
        >



          {/* Logo */}

          <div>


            <div
              className="
                flex
                items-center
                gap-3
                text-2xl
                font-bold
              "
            >


              <div
                className="
                  w-12
                  h-12
                  rounded-xl
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
                <span className="text-[#D8C3A5]">
                  Service
                </span>
              </span>


            </div>



            <p
              className="
                mt-5
                text-sm
                text-gray-300
                leading-relaxed
              "
            >

              Professional tree care services
              providing safe, reliable, and quality
              solutions for your property.

            </p>


          </div>





          {/* Quick Links */}


          <div>


            <h3
              className="
                text-lg
                font-bold
                mb-5
              "
            >
              Quick Links
            </h3>



            <ul
              className="
                space-y-3
                text-gray-300
                text-sm
              "
            >

              <li>
                <button
                  onClick={()=>goToSection("home")}
                  className="hover:text-[#D8C3A5] transition"
                >
                  Home
                </button>
              </li>


              <li>
                <button
                  onClick={()=>goToSection("about")}
                  className="hover:text-[#D8C3A5] transition"
                >
                  About
                </button>
              </li>


              <li>
                <button
                  onClick={()=>goToSection("services")}
                  className="hover:text-[#D8C3A5] transition"
                >
                  Services
                </button>
              </li>


              <li>
                <button
                  onClick={()=>goToSection("why-choose-us")}
                  className="hover:text-[#D8C3A5] transition"
                >
                  Why Choose Us
                </button>
              </li>


              <li>
                <button
                  onClick={()=>goToSection("reviews")}
                  className="hover:text-[#D8C3A5] transition"
                >
                  Reviews
                </button>
              </li>


              <li>
                <button
                  onClick={()=>goToSection("contact")}
                  className="hover:text-[#D8C3A5] transition"
                >
                  Contact
                </button>
              </li>

            </ul>


          </div>
                    {/* Services */}


          <div>


            <h3
              className="
                text-lg
                font-bold
                mb-5
              "
            >
              Services
            </h3>


            <ul
              className="
                space-y-3
                text-gray-300
                text-sm
              "
            >

              <li>Tree Removal</li>

              <li>Tree Trimming</li>

              <li>Tree Pruning</li>

              <li>Emergency Tree Service</li>

              <li>Land Clearing</li>

            </ul>


          </div>







          {/* Contact */}


          <div>


            <h3
              className="
                text-lg
                font-bold
                mb-5
              "
            >
              Contact
            </h3>


            <ul
              className="
                space-y-3
                text-gray-300
                text-sm
              "
            >

              <li>
                📞 716-638-3737
              </li>


              <li>
                ✉ sales@kdnursery.com
              </li>


              <li>
                📍 40 Stevens Ave, Buffalo
              </li>


            </ul>


          </div>



        </div>









        {/* Bottom */}


        <div
          className="
            mt-12
            pt-6
            border-t
            border-white/20
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            text-sm
            text-gray-400
          "
        >


          <p>
            © {new Date().getFullYear()} Apex Tree Service.
            All Rights Reserved.
          </p>





          <div
            className="
              flex
              gap-6
            "
          >


            <a
              href="/privacy"
              className="
                hover:text-[#D8C3A5]
                transition
              "
            >
              Privacy Policy
            </a>



            <a
              href="/terms"
              className="
                hover:text-[#D8C3A5]
                transition
              "
            >
              Terms & Conditions
            </a>



          </div>


        </div>



      </div>


    </footer>

  );

}


export default Footer;
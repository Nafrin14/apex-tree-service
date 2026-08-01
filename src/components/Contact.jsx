import { useEffect } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


function Contact() {


  useEffect(() => {

    const script = document.createElement("script");

    script.src = "https://link.kdlead.com/js/form_embed.js";
    script.async = true;

    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };

  }, []);



  return (

    <section
      id="contact"
      className="
        pt-12
        pb-24
        bg-[#F5EFE6]
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >



          {/* Left Content */}

          <div>


            <span
              className="
                inline-block
                -mt-6
                bg-[#8B5E34]/10
                text-[#8B5E34]
                px-5
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              Contact Us
            </span>



            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-bold
                text-[#2A2118]
                leading-tight
              "
            >
              Let's Take Care
              <br />
              Of Your Trees
            </h2>



            <p
              className="
                mt-5
                text-[#4B3828]
                text-lg
                leading-relaxed
              "
            >
              Get professional tree care solutions from Apex Tree Service.
              Contact our team today for a free estimate and reliable service.
            </p>





            <div
              className="
                mt-8
                space-y-5
              "
            >



              {/* Phone */}

              <div
                className="
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
                    bg-[#8B5E34]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FiPhone size={20}/>
                </div>


                <div>

                  <p className="text-sm text-gray-600">
                    Phone
                  </p>

                  <p className="font-semibold text-[#2A2118]">
                    716-638-3737
                  </p>

                </div>

              </div>






              {/* Email */}

              <div
                className="
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
                    bg-[#8B5E34]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FiMail size={20}/>
                </div>


                <div>

                  <p className="text-sm text-gray-600">
                    Email
                  </p>

                  <p className="font-semibold text-[#2A2118]">
                    sales@kdnursery.com
                  </p>

                </div>

              </div>







              {/* Location */}

              <div
                className="
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
                    bg-[#8B5E34]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FiMapPin size={20}/>
                </div>


                <div>

                  <p className="text-sm text-gray-600">
                    Location
                  </p>

                  <p className="font-semibold text-[#2A2118]">
                    40 Stevens Ave, Buffalo
                  </p>

                </div>

              </div>


            </div>







            {/* CTA Box */}

            <div
              className="
                mt-10
                bg-[#2A2118]
                rounded-3xl
                p-6
                text-white
                max-w-md
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Need Tree Service?
              </h3>


              <p
                className="
                  mt-2
                  text-[#F5EFE6]
                "
              >
                Request your free estimate today and our team will get
                back to you soon.
              </p>


            </div>


          </div>







          {/* Right Form */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-4
              h-[900px]
              overflow-hidden
            "
          >

            <iframe
              src="https://link.kdlead.com/widget/form/GgppPqKwcgVCRtwYVFFz"
              style={{
                width:"100%",
                height:"100%",
                border:"none",
                borderRadius:"8px"
              }}
              id="inline-GgppPqKwcgVCRtwYVFFz"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Apex tree service"
              data-height="871"
              data-layout-iframe-id="inline-GgppPqKwcgVCRtwYVFFz"
              data-form-id="GgppPqKwcgVCRtwYVFFz"
              title="Apex tree service"
            />

          </div>



        </div>


      </div>


    </section>

  );

}


export default Contact;
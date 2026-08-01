import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";



function Home() {

  return (

    <main>

      <Hero />

      <About />

      <Services />

      <WhyChooseUs />

      <Testimonials />

      <Contact />

    </main>

  );

}





function App() {

  return (

    <BrowserRouter>

      <div className="w-full">


        <Navbar />


        <Routes>


          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/privacy"
            element={<Privacy />}
          />


          <Route
            path="/terms"
            element={<Terms />}
          />


        </Routes>



        <Footer />


      </div>


    </BrowserRouter>

  );

}


export default App;
import React from "react";
import '../css/bootstrap.css'
import '../css/style.css'
import Logo from '../images/hero-bg.jpg'
import Header from "../components/Header";
import Slider from "../components/Slider";
const Home = () => {
    return(
        <>
         <div className="hero_area">
   <Header />
   <Slider />
   
   
   
  </div>
        </>
    )
}
export default Home;
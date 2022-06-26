import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hometorta1.jpg";
import "../styles/Home.css";



function Home() {
 

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
          <h1> Slatko carstvo </h1>
          <p> Dobrodošli u naš svet poslastica!</p>
         

        <Link to="/menu">
          <button> Naši proizvodi </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;

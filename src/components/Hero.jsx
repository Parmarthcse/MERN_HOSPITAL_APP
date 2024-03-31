import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to ZeeCare Medical Institute, where your health is our priority. 
          Schedule your appointment today and experience personalized care from our expert team of healthcare professionals. Whether it's a routine check-up or a specialized consultation, we're here to provide comprehensive medical services tailored to your needs.
           Take the first step towards a healthier tomorrow with ZeeCare.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
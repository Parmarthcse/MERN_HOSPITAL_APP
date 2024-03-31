import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          ZeeCare Medical Institute is a premier healthcare provider committed to excellence i
          n patient care. With a team of dedicated professionals, we offer a comprehensive range of medical services tailored to your needs. Our state-of-the-art facilities ensure the highest standards of treatment and comfort for our patients. From routine check-ups to specialized treatments, we prioritize your well-being every step of the way. At ZeeCare, we believe in personalized care and building lasting relationships with our patients based on trust and compassion. With a focus on preventive medicine and holistic wellness, we empower our patients to lead healthier lives. Experience the difference at ZeeCare Medical Institute,
           where your health is our passion and priority.
          </p>
          
          
        </div>
      </div>
    </>
  );
};

export default Biography;
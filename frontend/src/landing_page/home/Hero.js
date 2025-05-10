import React from 'react'

const Hero = () => {
  return (
   <>
   <div className="container p-5 mb-5">
    <div className="row">
      <img src="media/images/homeHero.png" alt="hero image" className="mb-5"/>
      <div className="container d-flex flex-column  align-items-center"><h1>Invest in everything</h1>
      <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button style={{width:"15%", }} className="btn btn-primary p-2  fs-5">Sign up for free</button></div>
    </div>


   </div>
    
   </>
  );
}

export default Hero;

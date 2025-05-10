import React from "react";

const LeftSection = ({
  imageurl,
  productname,
  productdes,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) => {
  return (
    <>
      <div className="container">
        <div className="row mb-5" style={{lineHeight:"1.8rem",fontSize:"1rem"}}>
          <div className="col-6 px-5">
            <img src={imageurl} alt="" />
          </div>
          <div className="col-4  mt-5 mx-5">
            <h1>{productname}</h1>
            <p className="mt-5">{productdes}</p>
            <div className="row">
                <div className="col-4"><a href="" style={{textDecoration:"none"}}>{trydemo} <i class="fa-solid fa-arrow-right-long"></i></a></div>
              
              <div className="col-8"><a href="" style={{textDecoration:"none"}}>{learnmore} <i class="fa-solid fa-arrow-right-long"></i></a></div>
            </div>
            <div className="row mt-3">
                <div className="col-5">    <img src={googleplay} alt="" /></div>
          
              <div className="col-7"><img src={appstore} alt="" /></div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;

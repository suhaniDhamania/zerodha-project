import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 p-5 ">
      <div className="row">
        <div className="col-lg-4  col-sm-12">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-lg-6   mb-5">
          <div className="row">
            <div className="col-6 text-center border p-2">
              <h1 className="mb-5">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-lg-6  col-sm-12 text-center border p-2">
              <h1 className="mb-5">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

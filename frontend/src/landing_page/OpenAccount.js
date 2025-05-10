import React from "react";

const OpenAccount = () => {
  return (
    <>
      <div className="container p-5 mb-5" style={{fontSize: "1rem",
    lineHeight: "1.8"}}>
        
          <div className="container d-flex flex-column  align-items-center">
            <h1 >Open a Zerodha account</h1>
            <p className="mt-3 text-muted" style={{color: "#666"}}>
              
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
            <button
              style={{ width: "15%" }}
              className="btn btn-primary p-2  fs-5"
            >
              Sign up for free
            </button>
          </div>
        </div>
      
    </>
  );
};

export default OpenAccount;

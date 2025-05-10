import React from "react";

const Universe = () => {
  return (
    <>
      <div className="container">
        <div
          className="row text-center mt-5 "
          style={{ fontSize: "1.25rem", fontWeight: "400" }}
        >
          <p>
            Want to know more about our technology stack? Check out the{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>{" "}
            blog.
          </p>
        </div>
        <div className="row text-center mt-5">
          <h1>The Zerodha Universe</h1>
          <p className="mt-3" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row text-center mt-5" style={{ color: "#424242" }}>
          <div className="col-4">
            <img src="media/images/zerodhaFundhouse.png" alt="" width="50%" />
            <p className="mt-2">Thematic investment platform</p>
          </div>
          <div className="col-4">
            <img src="media/images/sensibullLogo.svg" alt="" width="50%" />
            <p className="mt-4">Thematic investment platform</p>
          </div>
          <div className="col-4">
            <img src="media/images/tijori.svg" alt="" width="50%" />
            <p className="mt-2">Thematic investment platform</p>
          </div>
        </div>
        <div className="row text-center mt-5" style={{ color: "#424242" }}>
          <div className="col-4">
            <img src="media/images/streakLogo.png" alt="" width="50%" />
            <p className="mt-2">Thematic investment platform</p>
          </div>
          <div className="col-4">
            <img src="media/images/smallcaseLogo.png" alt="" width="50%" />
            <p className="mt-4">Thematic investment platform</p>
          </div>
          <div className="col-4">
            <img src="media/images/dittoLogo.png" alt="" width="50%" />
            <p className="mt-2">Thematic investment platform</p>
          </div>
        </div>
        <div className=" mt-5  mb-5 row d-flex justify-content-center align-items-center">
          {" "}
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

export default Universe;

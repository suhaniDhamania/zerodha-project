import React from "react";

const Hero = () => {
  return (
    <>
      <div style={{ backgroundColor: "#387ed1", color: "#fff" }}>
        <div className="container ">
          <div className="row " style={{padding: "50px 0 85px 100px"}}>
            <div className="col-lg-7 col-sm-12">
              <h5>Support Portal</h5>
              <p className="mt-5 " style={{fontSize:"1.7rem"}}>
                Search for an answer or browse help topics to create a ticket
              </p>
              <input
                style={{
                  height: "3.5rem",
                  borderRadius: "0px",
                  width: "42rem",
                  marginTop: "2rem",
                }}
                type="text"
                class="form-control"
                placeholder="Eg: how do i activate F&0, why is my order getting rejected ..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div className="row d-grid mt-3 " style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px" }}>
                {" "}
                <a href="" style={{ color: "#fff", fontSize: "1rem" }}>
                  Track account opening
                </a>
                <a href="" style={{ color: "#fff", fontSize: "1rem" }}>
                  Track segment activation
                </a>
                <a href="" style={{ color: "#fff", fontSize: "1rem" }}>
                  Intraday margins
                </a>{" "}
                <a href="" style={{ color: "#fff", fontSize: "1rem" }}>
                  Kite user manual
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="row text-end">
                <a
                  href=""
                  style={{ color: "#fff", fontWeight: "400", fontSize: "1rem" }}
                >
                  Track tickets
                </a>
              </div>
              <h4 className="mt-5">Featured</h4>
              <ol style={{ fontSize: "1rem", lineHeight: "3rem" }}>
                <li>
                  <a href="" style={{ color: "#fff" }}>
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
                <li>
                  <a href="" style={{ color: "#fff" }}>
                    Surveillance measure on scrips - March 2025
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

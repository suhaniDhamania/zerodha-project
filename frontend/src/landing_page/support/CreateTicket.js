import React from "react";

const CreateTicket = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ padding: "50px 0 85px 100px" }}>
          <p className="fs-4 text-muted">
            To create a ticket, select a relevant topic
          </p>
          <div className="row" style={{ lineHeight: "2rem" }}>
            <div className="col-4">
             <div className="row">
             <h5>
                {" "}
                <i class="fa-solid fa-circle-plus"></i>Account Opening
              </h5>
             </div>

              <div className="row p-3"><a href="" style={{ textDecoration: "none" }}>
                Resident individual
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Minor
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Non Resident Indian (NRI)
              </a>
              <br />

              <a href="" style={{ textDecoration: "none" }}>
                Company, Partnership, HUF and LLP
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Glossary
              </a></div>
            </div>
            <div className="col-4">
              <div className="row">
                <h5><i class="fa-solid fa-user"></i>Your Zerodha Account</h5>
              </div>
             <div className="row p-3"> <a href="" style={{ textDecoration: "none" }}>
                Your Profile
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Account modification
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
              <br />

              <a href="" style={{ textDecoration: "none" }}>
                Nomination
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Transfer and conversion of securities
              </a></div>
            </div>
            <div className="col-4">
              <div className="row">
                <h5><i class="fa-solid fa-lines-leaning"></i>Kite</h5>
              </div>
             <div className="row p-3"> <a href="" style={{ textDecoration: "none" }}>
                IPO
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Trading FAQs
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Charts and orders
              </a>
              <br />

              <a href="" style={{ textDecoration: "none" }}>
                Alerts and Nudges
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                General
              </a></div>
            </div>
          </div>
          <div className="row mt-4" style={{ lineHeight: "2rem" }}>
            <div className="col-4">
             <div className="row">
             <h5>
                {" "}
                <i class="fa-solid fa-box-archive"></i> Funds
              </h5>
             </div>

              <div className="row p-3"><a href="" style={{ textDecoration: "none" }}>
                Add money
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Withdraw money
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Add bank accounts
              </a>
              <br />

              <a href="" style={{ textDecoration: "none" }}>
                eMandates
              </a>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <h5><i class="fa-solid fa-circle-check"></i>Console</h5>
              </div>
             <div className="row p-3"> <a href="" style={{ textDecoration: "none" }}>
                portfolio
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
               Coporate actions
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
               Funds statement
              </a>
              <br />

              <a href="" style={{ textDecoration: "none" }}>
                Reports
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Profile
              </a>
              <a href="" style={{ textDecoration: "none" }}>
               Segments
              </a>
              
              
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <h5><i class="fa-solid fa-coins"></i>Coin</h5>
              </div>
             <div className="row p-3">
              <br />
              <a href="" style={{ textDecoration: "none" }}>
              Understanding mutual funds and Coin
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
               Coin app
              </a>
              <br />

              <a href="" style={{ textDecoration: "none" }}>
             Coin web
              </a>
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                Transactions and reports
              </a>
              <a href="" style={{ textDecoration: "none" }}>
                National Pension Scheme (NPS)
              </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;

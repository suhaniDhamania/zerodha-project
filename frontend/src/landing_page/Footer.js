import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-3">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="icons fs-5 text-muted">
              <i
                style={{ marginRight: "20px" }}
                className="fa-brands fa-x-twitter "
              ></i>
              <i
                style={{ marginRight: "20px" }}
                className="fa-brands fa-square-facebook"
              ></i>
              <i
                style={{ marginRight: "20px" }}
                className="fa-brands fa-instagram "
              ></i>
              <i className="fa-brands fa-linkedin-in fs-4"></i>
            </div>
            <div className="icons-2 mt-3 fs-5 text-muted">
              <i
                style={{ marginRight: "20px" }}
                className="fa-brands fa-youtube "
              ></i>
              <i
                style={{ marginRight: "20px" }}
                className="fa-brands fa-whatsapp "
              ></i>
              <i className="fa-brands fa-telegram "></i>
            </div>
          </div>
          <div className="col-lg-3">
            <h1 style={{ fontSize: "1.125rem" }}>Company</h1>
            <p className="text-muted lh-lg">
              About
              <br />
              products
              <br />
              Pricing
              <br />
              Referral programme
              <br />
              Careers
              <br />
              Zerodha.tech
              <br />
              Open source
              <br />
              Press & media
              <br />
              Zerodha Cares (CSR)
            </p>
          </div>
          <div className="col-lg-3">
            <h1 style={{ fontSize: "1.125rem" }}>Support</h1>
            <p className="text-muted lh-lg">
              Contact us
              <br />
              Support portal
              <br />
              Z-Connect blog
              <br />
              List of charges
              <br />
              Downloads & resources
              <br />
              Videos
              <br />
              Market overview
              <br />
              How to file a complaint?
              <br />
              Status of your complaints
            </p>
          </div>
          <div className="col-lg-3">
            <h1 style={{ fontSize: "1.125rem" }}>Account</h1>
            <p className="text-muted lh-lg">
              Open an account
              <br />
              Fund transfer
            </p>
          </div>
        </div>
        <div
          className="row mt-4 "
          style={{ fontSize: ".65rem", color: "#9b9b9b" }}
        >
          <div className="row ">
            <p className="lh-lg">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              <a href="" style={{ textDecoration: "none" }}>
                complaints@zerodha.com
              </a>
              , for DP related to{" "}
              <a href="" style={{ textDecoration: "none" }}>
                dp@zerodha.com
              </a>
              . Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
          </div>
          <div className="row ">
            <p className="lh-lg">
              Procedure to file a complaint on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                SEBI SCORES
              </a>
              : Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances
              <br />
              <br />
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}
              </a>
              <br />
              <br />
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
          </div>
          <div className="row">
            <p className="lh-lg">
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
          </div>
          <div className="row">
            <p className="lh-lg">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services,
              <a href="" style={{ textDecoration: "none" }}>
                please create a ticket here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from 'react'

const Brojkerage = () => {
  return (
   <>
   
   <div className="container">
    <div className="row mb-4">
        <div className="col-7">
         <a href="" style={{textDecoration:"none"}}><h3 className="fs-5 text-center">Brokerage calculator</h3></a>
            <ul className="mt-4" style={{textAlign: "left", lineHeight: "2.5", fontSize: "12px"}}>
                <li > Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
            </ul>
        </div>
        <div className="col-5 text-center">
           <a href="" style={{textDecoration:"none"}}> <h3  className="fs-5">List of charges</h3></a>
        </div>
        
        </div>
   </div>
   </>
  )
}

export default Brojkerage

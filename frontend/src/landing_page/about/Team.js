import React from 'react'
import {Link} from "react-router-dom";

const Team = () => {
  return (
  <>
  <div className="container">
    <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-4 text-center">
            <img  style={{borderRadius:"50%",height:"295px",marginTop:"9rem"}} src="media/images/nithinKamath.jpg" alt="" />
            <h1 className="mt-4" style={{fontSize:"16px"}}>Nithin Kamath</h1>
            <p className="text-muted mt-3">Founder,CEO</p>
        </div>
        <div className="col-4" style={{lineHeight:"1.8"}}>
            <h1>People</h1>
            <p style={{marginTop:"5rem"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        
        <p>Playing basketball is his zen.</p>
        Connect on <Link to="/" style={{textDecoration:"none"}}>Homepage</Link> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /<a href="" style={{textDecoration:"none"}}> Twitter</a>
        
        
        </div>
        <div className="col-2"> </div>
    </div>

    <div className="row">

<div className="col-4 text-center">
    <img style={{borderRadius:"50%",height:"250px",marginTop:"9rem"}} src="media/images/Nikhil.jpg" alt="" />
    <h1 className="mt-4" style={{fontSize:"16px"}}>Nikhil Kamath</h1>
    <p className="text-muted mt-3">co-Founder & CEO</p>
    <details>
        <summary>Bio</summary>
        <p>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
    </details>

</div>
<div className="col-4 text-center">
<img style={{borderRadius:"50%",height:"250px",marginTop:"9rem"}} src="media/images/Kailash.jpg" alt="" />
    <h1 className="mt-4" style={{fontSize:"16px"}}>Dr. Kailash Nadh</h1>
    <p className="text-muted mt-3">CTO</p>
    <details >
        <summary>Bio</summary>
        <p>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.</p>
    </details>
</div>
<div className="col-4 mb-5 text-center"> <img style={{borderRadius:"50%",height:"250px",marginTop:"9rem"}} src="media/images/Venu.jpg" alt="" />
    <h1 className="mt-4" style={{fontSize:"16px"}}>Venu Madhav</h1>
    <p className="text-muted mt-3">COO</p>
    <details>
        <summary>Bio</summary>
        <p>Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.</p>
    </details></div>


    </div>
  </div>
  </>
  );
}

export default Team;

import React from 'react'

const RightSection = ({imgurl,productname,productdes,learnmore}) => {
  return (
    <div className="container">
    <div className="row " style={{lineHeight:"1.8rem",fontSize:"1rem",}}>
      
      <div className="col-4  mx-5" style={{ marginTop:"10rem"}}>
        <h1>{productname}</h1>
        <p className="mt-5">{productdes}</p>   
          <div className="col-8"><a href="" style={{textDecoration:"none"}}> {learnmore} <i class="fa-solid fa-arrow-right-long"></i></a></div> 
      </div>

      <div className="col-6 px-5 ">
        <img src={imgurl} alt="" />
      </div>
      <div className="col-2"></div>
    </div>
  </div>
  )
}

export default RightSection;

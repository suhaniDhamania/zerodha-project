import React,{useState} from 'react';
import axios from "axios";


const BuyComponent = ({value, handleCancelClick }) => {
  const [stockQuantity,setstockQuantity]=useState(1);
  const [stockprice,setstockPrice]=useState(0.0);

  const handleBuyClick=()=>{
    axios.post("http://localhost:8080/newOrder",{
    name:value,
      qty:stockQuantity,
      price:stockprice,
     mode:"BUY",
    });
   handleCancelClick();
  };


    return (
      <div
        style={{ width: "30rem" }}
        className="container text-center"
        id="buy-window"
      >
        <div className="regular-order ">
          <div className="inputs d-flex">
            <fieldset>
              <legend>Qty.</legend>
              <input
                style={{ height: "50px" }}
                type="number"
                name="qty"
                id="qty"
                onChange={(e)=>setstockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                style={{ height: "50px" }}
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e)=>setstockPrice(e.target.value)}
                value={stockprice}
              />
            </fieldset>
          </div>
        </div>
  
        <div className="buttons text-center mt-2 d-flex align-items-center">
          <span>Margin required ₹140.65</span>
          <div className="d-flex">
            <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };


  
  export default BuyComponent;
  
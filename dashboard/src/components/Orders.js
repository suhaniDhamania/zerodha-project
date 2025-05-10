import React,{useState,useEffect} from "react";
import axios from "axios";


const Orders = () => {
  const [allOrders,setAllOrders]=useState([]);
 useEffect(()=>{
  axios.get("http://localhost:8080/addOrders").then((res)=>{
    setAllOrders(res.data);
    //console.log(res.data);
  }).catch((err)=>console.error("error fetching order:",err));
 },[]);

  return (
    <div className="orders">
    <div className="no-orders">
      <AllOrders allOrders={allOrders}/>
    </div>
  </div>
  );
};

export default Orders;
const AllOrders = ({ allOrders }) => {
  return (
    <div className="container ">
    <div className="row"><div className="col-12">
      
    <div   className="all-orders   ">
      <table style={{width:"100%"}} className="order-table  ">
        <thead>
          <tr>
            <th>#</th>
            <th className="text-start">Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="text-start">{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td style={{ color: order.mode.toLowerCase() === "buy" ? "blue" : "red" }}>
  {order.mode}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

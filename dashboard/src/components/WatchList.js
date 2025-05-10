import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/Data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BuyComponent from "./BuyComponent";
import SellComponent from "./SellComponent";
import { DoughnutChart } from "./DoughnutChart";
const WatchList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedstock,setSelectedstock]=useState("");
  const [sellvisible,setSellVisible]=useState(false);

  const handleOpenClick = (stock) => {
    setIsVisible(true);
  // console.log(stock.name);
    setSelectedstock(stock.name);
  };

  const handleCancelClick = () => {
    setIsVisible(false);
   setSelectedstock("");
   setSellVisible(false);
  };

  const handleSellClick=(stock)=>{
    setSellVisible(true);
    setSelectedstock(stock.name);
  }

  const labels=watchlist.map((list)=>list.name);

  const  data={
    labels,
    datasets: [
      {
        label: "price",
        data: watchlist.map((list)=>list.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],


  }
  
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search eg:infy,bse nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts">{watchlist.length}/50</span>
        </div>
        <ul className="list">
          {watchlist.map((stock, index) => {
            return (
              <WatchListItem
              handleSellClick={handleSellClick}
                handleOpenClick={handleOpenClick}
                stock={stock}
                key={index}
              />
            );
          })}
        </ul>
        <DoughnutChart data={data}/>
      </div>
      {isVisible && <BuyComponent value={selectedstock} handleCancelClick={handleCancelClick}  />}
      {sellvisible && <SellComponent   value={selectedstock} handleCancelClick={handleCancelClick}/>}
    </>
  ); 
};

export default WatchList;

const WatchListItem = ({ stock, handleOpenClick ,handleSellClick }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
<li
 onMouseEnter={() => setShowWatchlistActions(true)}
 onMouseLeave={() => setShowWatchlistActions(false)}
>
 <div className="item">
   <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

   <div className="itemInfo">
     <span className="percent">{stock.percent}</span>
     {stock.isDown ? (
       <KeyboardArrowDownIcon className="down" />
     ) : (
       <KeyboardArrowUpIcon className="up" />
     )}
     <span className="percent">{stock.price}</span>
   </div>
 </div>

 {showWatchlistActions && (
   <WatchListActions handleOpenClick={handleOpenClick}    stock={stock}  handleSellClick={handleSellClick}/>
 )}
</li>
  );
};

const WatchListActions = ({ stock, handleOpenClick,handleSellClick }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button onClick={()=>handleOpenClick(stock)}  className="buy">
            BUY
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={()=>handleSellClick(stock)}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartIcon />
          </button>
        </Tooltip>
        <Tooltip
          title="More (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHorizIcon />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};


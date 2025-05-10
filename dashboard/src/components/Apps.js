import React,{useEffect} from 'react'
import axios from "axios";

const Apps = () => {
  

useEffect(() => {
  axios
    .get("http://localhost:8080/getcookie", { withCredentials: true }) 
    .then((response) => console.log("Cookies:", response.data.cookies))
    .catch((error) => console.error("Error fetching cookie:", error));
}, []);
  return (
    <div>
      <h1>apps</h1>
    </div>
  )
}

export default Apps

import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

  const [formdata, setFormdata] = useState({
    username: "",
    email:"",
    password:"",
    phone:"",
   
  });

  const handleSignup = () => {
    console.log("Formdata being sent:", formdata);
    axios.post("http://localhost:8080/Signup", {
      username: formdata.username,
      email: formdata.email,
      password: formdata.password,
      phone: formdata.phone,
    })
    .then((res) => {
     alert("Signup sucessfuly!");
      console.log(res.data,"Redirecting to homepage");
      window.location.href = "http://localhost:3000";  
    })
    .catch((err) => {
      console.log(err);
     alert("Signup failed!");
    });
    setFormdata({
      username: "",
      email:"",
      password:"",
      phone:"",
     
    });
  };


  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
 
 
  //const [currUser,setCurrUser]=useState("");

 

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <h1>Open a free demat & trading account online</h1>
          <p className="mt-2">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <img src="media/images/signup.png" alt="" />
          </div>
          <div className="col-6 text-start mt-5">
            <div>

              
            
                <div><h5>Signup now </h5>
           
                <p>Or track your existing application</p>
  
                <form  
                
                  style={{ width: "20rem" }}
                  className="d-flex flex-column "
                >
                  <label htmlFor="username">Name:</label>
                  <input
                    value={formdata.username}
                    name="username"
                     type="username"
                    placeholder="Enter Name"
                    onChange={handleChange}
                   
                  />
  
                  <label htmlFor="email">Email:</label>
                  <input
                    value={formdata.email}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
  
                  <label htmlFor="password">Password:</label>
                  <input
                    value={formdata.password}
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
  
                  <label htmlFor="phone">Phone:</label>
                  <input
                    value={formdata.phone}
                    name="phone"
                   type="phone"
                    placeholder="Enter phoneNo"
                    onChange={handleChange}
                  />
  
                  <button type="button" className="btn btn-primary mt-2" onClick={handleSignup} >Signup</button>
                </form>
                <p>if you allready signup plz <a href="http://localhost:8080/login" style={{textDecoration:"none"}}>Login</a></p>
               </div>
              <a href="http://localhost:8080/logout" style={{ textDecoration: "none" }}>
                Logout
              </a>
             


        
              <p className="mt-5">
                By proceeding, you agree to the{" "}
                <a style={{ textDecoration: "none" }} href="#">
                  Zerodha terms
                </a>{" "}
                &{" "}
                <a style={{ textDecoration: "none" }} href="#">
                  privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;


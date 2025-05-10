/*const express=require("express");
const UserModel=require("../schemas/UserSchema");
const router = express.Router();


router.get("/Signup",async(req,res)=>{
    let TempUser=new UserModel({
        email:"student@gmail.com",
        username:"student",
    });
    let registeredUser=await UserModel.register(TempUser,"1234") ;
    res.send(registeredUser);
    console.log(registeredUser);
});
*/


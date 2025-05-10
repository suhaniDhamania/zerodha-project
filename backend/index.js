require("dotenv").config();
//console.log("MONGO_URL:", process.env.MONGO_URL);
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;
const passport = require("passport");
const localStrategy = require("passport-local");
const HoldingsModel = require("./schemas/HoldingSchema");
const PositionModel = require("./schemas/PositionSchema");
const OrderModel = require("./schemas/OrderSchema");
const UserModel = require("./schemas/UserSchema");
//const {isLoggedin}=require("./middlewares/middleware");

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
const Path = require("path");
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "views"));
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");


app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "mysupersecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { 
      maxAge: 7*24*60*60*1000,
      expires:Date.now()+7*24*60*60*1000,
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(UserModel.authenticate()));
//passport.serializeUser(UserModel.serializeUser());
//passport.deserializeUser(UserModel.deserializeUser());
passport.serializeUser((user, done) => {
  console.log("Serializing user =>", user);
  done(null, user._id); // सिर्फ _id store करें
});

passport.deserializeUser((id, done) => {
  console.log("Deserialize Call => User ID:", id);
  UserModel.findById(id)
    .then(user => {
      console.log("Found User:", user.username); // यहाँ username मिल जाएगा
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});





const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(url);
}






app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.send(allHoldings);
  //console.log(allHoldings);
});

app.get("/allPosition", async (req, res) => {
  let allPosition = await PositionModel.find({});
  res.send(allPosition);
  //console.log(allPosition);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  console.log(newOrder);
});

app.get("/addOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.send(allOrders);
  //console.log(allOrders);
});

app.post("/Signup", async (req, res) => {
  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
    });
    const registeredUser = await UserModel.register(newUser, req.body.password);
    console.log(registeredUser);
  
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: "Signup successful",  });
     
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
});

app.get("/login",(req, res) => {
  res.render("Login.ejs");
});

app.get("/flashmsg", (req, res) => {
  res.render("Flash.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
   try{
    
    res.redirect("/flashmsg");
   }catch(err){
    console.log(err.message);
  
   res.redirect("/login");
  }
}
);

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3001/"); 
  });
});

app.get("/Dashboard",(req,res)=>{
  console.log("user is ",req.user);
  if(!req.isAuthenticated()){
 return res.redirect("/login");
  }else{
    res.redirect("http://localhost:3000");
  }

});

app.get("/currentUser", (req, res) => {
  if (req.isAuthenticated()) {
   res.send("exists");
  } else {
    res.send("not exists");
  }
});

app.get("/setcookie", (req, res) => {
  res.cookie("token", "mysecrettoken", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  });
  res.send("Cookie Set");
  console.log("Cookie Set Successfully!");
});

app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  res.json({ cookies: req.cookies });
});



app.listen(PORT, () => {
  console.log("APP started");
});
//addPosition
/*
app.get("/addPosition",async(req,res)=>{
  let tempPosition=[ {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },];

try{
  await PositionModel.insertMany(tempPosition);
res.send("position saved");
}catch(err){
  res.send(err);
}
});
*/

//addHoldings
/*
app.get("/addHoldings",async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
try{
  await HoldingsModel.insertMany(tempHoldings);
res.send("Holdings saved");
}catch(err){
  console.log(err);
}
});
*/

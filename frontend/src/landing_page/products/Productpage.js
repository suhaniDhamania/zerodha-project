import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
const Productpage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageurl="media/images/kite.png"
        productname="Kite"
        productdes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="trydemo"
        learnmore="Learnmore"
        googleplay="media/images/googlePlayBadge.svg"
        appstore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imgurl="media/images/console.png"
        productname="Console"
        productdes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore="learnmore"
      />
      <LeftSection
        imageurl="media/images/coin.png"
        productname="Coin"
        productdes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devicesBuy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
        trydemo="trydemo"
        learnmore="Coin"
        googleplay="media/images/googlePlayBadge.svg"
        appstore="media/images/appstoreBadge.svg"
      />
        <RightSection
        imgurl="media/images/kiteconnect.png"
        productname="KITE CONNECT API"
        productdes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore="Kite Connect"
      />
      <LeftSection
        imageurl="media/images/varsity.png"
        productname="Varsity mobile"
        productdes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo="trydemo"
        learnmore="Learnmore"
        googleplay="media/images/googlePlayBadge.svg"
        appstore="media/images/appstoreBadge.svg"
      />
      
      <Universe />
    </>
  );
};

export default Productpage;

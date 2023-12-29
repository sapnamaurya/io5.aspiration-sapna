import React from "react";
import Header from "../../Component/Header";
import Carousal from "../../Component/Carousal";
import Footer from "../../Component/Footer";
import phone from "../../assets/Images/phone.webp";
import ac from "../../assets/Images/ac.jfif";
import laptop from "../../assets/Images/laptop.jpg";
import cook from "../../assets/Images/cook.jpg";
import flight from "../../assets/Images/air-india.webp";
import moto from "../../assets/Images/moto.jfif";
import motoLogo from "../../assets/Images/Motorola_new_logo.svg.png";
import OfferPage from "../../Component/OfferPage/index.jsx";
function Home() {
  const offer1 = [
    {
      logoImg: motoLogo,
      title: "iPhone 14..",
      subTitle: "Upgrade to Never,better iPhone ",
      off: "From Rs.56,999*",
      saleImage: phone,
      incAllOfers: "*incl. All Offer",
      spcOffer: "",
    },
    {
      logoImg: [],
      title: "Best Deal on ACs",
      subTitle: "upto Rs.7000 off on Exchnage",
      off: "From Rs.24,999*",
      saleImage: ac,
      incAllOfers: "",
      spcOffer: "",
    },
    {
      logoImg: [],
      title: "iPhone 15..",
      subTitle: "ASUS,HP ,Lenovo & more No Cost EMI Up to 12 Months",
      off: "From Rs.8,999*",
      saleImage: laptop,
      incAllOfers: "",
      spcOffer: "",
    },
  ];
  const offer2 = [
    {
      logoImg: motoLogo,
      title: "Mototola edge 40",
      subTitle: "Slimmest IP68*| Curved Screen",
      off: "Just Rs.25,499*",
      saleImage: moto,
      incAllOfers: "*incl. All Offers",
      spcOffer: "*incl. Add.Rs. 1000 off On Exch",
    },
    {
      logoImg: [],
      title: "Kitchen Bazaar",
      subTitle: "Cookers , Pan , Flash...",
      off: "Min 30% Off",
      saleImage: cook,
      incAllOfers: "",
      spcOffer: "",
    },
    {
      logoImg: [],
      title: "Sky High Discounts!",
      subTitle: "Book IndiGo Flights",
      off: "From Rs.1,199",
      saleImage: flight,
      incAllOfers: "",
      spcOffer: "USE CODE:FLUBSD",
    },
  ];
  return (
    <React.Fragment>
      <Header />
      <Carousal />
      <OfferPage offer1={offer1} />
      <Carousal />
      <OfferPage offer1={offer2} />
      <Footer />
    </React.Fragment>
  );
}
export default Home;

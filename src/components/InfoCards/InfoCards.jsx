import React from "react";
import clock from "../../assets/icon/clock.svg";
import marker from "../../assets/icon/marker.svg";
import phone from "../../assets/icon/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-success",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Uttara Dhaka-1230",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "+8801234567890",
      icon: phone,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-container">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
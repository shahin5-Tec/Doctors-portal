import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 1,
      name: "Cavity Filling",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 1,
      name: "Teeth Whitening",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
    <div className="text-center">
      <h3 className="text-xl font-bold text-accent uppercase">
        Our Services
      </h3>
      <h2 className="text-3xl">Services We Provide</h2>
    </div>
    <div className=" my-container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {serviceData.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  </div>
  );
};

export default Services;

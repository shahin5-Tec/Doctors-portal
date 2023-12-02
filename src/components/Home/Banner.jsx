import React from "react";
import bg from "../../assets//bg.png";
import chair from "../../assets/chair.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
    className="bg-gray-200 my-container"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className=" flex flex-col lg:flex-row-reverse sm:my-40 my-7">
      <img  src={chair} className="sm:w-1/2 pe-8 rounded-lg shadow-2xl" alt="" />
      <div className="pl-8">
        <h1 className=" text-3xl sm:text-5xl font-bold">
          Your New Smile Starts Here
        </h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
          a id nisi.
        </p>
        <Link
          to="/appointment"
          className="btn btn-accent text-white px-6 uppercase "
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Banner;

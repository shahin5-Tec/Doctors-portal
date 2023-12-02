import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="text-center mt-28 my-container"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="py-16 ">
        <div>
          <h3 className="text-4xl text-accent">Contact Us</h3>
          <h1 className="text-4xl text-white mt-2">Stay connected with us</h1>
        </div>
        <div className="w-1/3 mx-auto mt-5">
          <input
            type="email"
            placeholder="Type here you Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here Subject"
            className="input input-bordered w-full mt-4"
          />
          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Type here your Message"
          ></textarea>
          <div className="mt-10 btn btn-accent text-white w-1/3 uppercase">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
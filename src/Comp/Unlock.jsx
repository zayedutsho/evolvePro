import React from "react";
import phone from "../assets/phone1.svg";

const Unlock = () => {
  return (
    <div className="pt-16 pb-14 bg-[url('./assets/Background.svg')] flex justify-center items-center text-center font-Poppins gap-32 text-white">
      <div className="max-w-3xl ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Unlock the Full Power of Your Website with EvolvePro.AI
        </h1>

        <p className="text-base md:text-lg lg:text-xl mb-6   ml-16 w-full text-left ">
          Discover the Future of Business Interaction with EvolvePro.AI: A{" "}
          <br />
          Revolutionary Tool Designed to Skyrocket Your Leads, <br />{" "}
          Personalise Customer Engagement, and Streamline Your <br />{" "}
          Operations. Experience the Unparalleled Efficiency of AI- <br />
          Powered Communication, Tailored to Elevate Your Business in <br />{" "}
          Today's Digital Landscape.
        </p>

        <p className="text-lg md:text-xl font-bold mb-2  ml-16 w-full text-left  ">
          YES! EvolvePro.AI Integrates Perfectly With:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <ul className="text-sm md:text-base lg:text-lg grid grid-cols-2 gap-2">
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
            <li className="mb-2">lorddsadsdds</li>
          </ul>
        </div>
      </div>
      <div>
        <img
          src={phone}
          alt="Phone"
          className="max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
        />
      </div>
    </div>
  );
};

export default Unlock;

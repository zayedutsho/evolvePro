import Marque from "react-fast-marquee";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-800 text-white py-16">
      <div className="container mx-auto text-center ">
        <h1 className="text-4xl md:text-6xl font-bold text-black  ">
          Transform Your Website Into <br />a 24/7 Sales Powerhouse with <br />
          EvolvePro.AI
        </h1>
        <p className="text-lg mt-4  pb-10">
          Leverage Cutting-Edge AI to Engage Visitors, Qualify Leads, and
          Skyrocket <br /> Your Online Conversions{" "}
        </p>
        <button className="bg-sky-300	 text-white font-bold py-2 px-4 rounded">
          Start Your Free Trial Today
        </button>
        <p className="text-sm mt-3 text-gray-300">
          Get Started In Less Than 60 Seconds • Cancel Anytime
        </p>
      </div>
      <Marque>
        <div className="  mt-10 flex">
          <div className="text-2xl rounded-md text-gray-300 flex space-x-5 p-4">
            Start Your Free Trial Today
          </div>
          <div className="text-2xl rounded-md text-gray-300 flex  space-x-5 p-4">
            Start Your Free Trial Today
          </div>
          <div className="text-2xl rounded-md text-gray-300 flex  space-x-5 p-4">
            Start Your Free Trial Today
          </div>
          <div className="text-2xl rounded-md text-gray-300 flex  space-x-5 p-4">
            Start Your Free Trial Today
          </div>
          <div className="text-2xl rounded-md text-gray-300 flex  space-x-5 p-4">
            Start Your Free Trial Today
          </div>
          <div className="text-2xl rounded-md text-gray-300 flex  space-x-5 p-4">
            Start Your Free Trial Today
          </div>
        </div>
      </Marque>
    </div>
  );
};

export default Hero;

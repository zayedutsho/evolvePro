import Marque from "react-fast-marquee";
import hero from "../assets/Hero.svg";

const Hero = () => {
  return (
    <div
      className=" bg-[url('../assets/Hero.svg')]
    "
    >
      <img
        className="object-cover w-full  h-1021px md:h-1021px"
        src={hero}
        alt="Background Image"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between">
        <div>
          <div className=" text-white py-16 md:pb-16 ">
            <div className="container mx-auto text-center relative z-10 mt-20">
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                Transform Your Website Into <br />a 24/7 Sales Powerhouse with{" "}
                <br />
                EvolvePro.AI
              </h1>
              <p className="text-lg mt-4 pb-10">
                Leverage Cutting-Edge AI to Engage Visitors, Qualify Leads, and
                Skyrocket <br /> Your Online Conversions{" "}
              </p>
              <button className="bg-custom-gradient shadow-md text-white font-bold py-2 px-4 rounded">
                Start Your Free Trial Today
              </button>
              <p className="text-sm mt-3 text-gray-300">
                Get Started In Less Than 60 Seconds • Cancel Anytime
              </p>
            </div>
            <div className="text-center mt-20">
              <Marque>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
                <div className="space-x-5 mr-4 inline-flex text-customColor rounded">
                  Start Your Free Trial Today
                </div>
              </Marque>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

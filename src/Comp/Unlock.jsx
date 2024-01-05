/* eslint-disable react/no-unescaped-entities */
import gif from "../assets/gif.gif";
import recImage from "../assets/recImage.svg";
import boxImage from "../assets/boxIcon.svg";

const Unlock = () => {
  return (
    <div className="bg-[url('./assets/bgG.svg')] pt-[60px] pb-[125px] lg:flex justify-center lg:gap-[70px] bg-cover">
      <div className="lg:ml-[140px]">
        <div className="lg:mt-[70px] text-[50px] font-['Sharp-Grotesk-medium'] leading-[58px] text-[#fff]">
          <h1>Unlock the Full Power</h1>
          <h1>of Your Website with</h1>
          <h1>EvolvePro.AI</h1>
        </div>
        <div className="lg:text-[18px] font-['Poppins'] lg:mt-[24px] font-normal text-[#999FAE]">
          <h1>
            Discover the Future of Business Interaction with EvolvePro.AI: A
          </h1>
          <h1>Revolutionary Tool Designed to Skyrocket Your Leads,</h1>
          <h1> Personalise Customer Engagement, and Streamline Your</h1>
          <h1>Operations. Experience the Unparalleled Efficiency of AI-</h1>
          <h1>Powered Communication, Tailored to Elevate Your Business in</h1>
          <h1>Today's Digital Landscape.</h1>
        </div>
        <div className="lg:mt-[48px] font-medium lg:flex lg:gap-[18px]">
          <img src={recImage} alt="recImage" />
          <h1 className="lg:text-[16px] font-['Poppins'] text-[#fff]">
            YES! EvolvePro.AI Integrates Perfectly With:
          </h1>
        </div>
        <div className="lg:mt-[32px] lg:ml-[53px]">
          <div className="lg:grid grid-cols-2 lg:gap-[92px]">
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>E-Commerce Stores</h1>
            </div>
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>Info Products</h1>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 lg:gap-[92px] lg:mt-[24px]">
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>Coaching Services</h1>
            </div>
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>Sales Funnels</h1>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 lg:gap-[92px] lg:mt-[24px]">
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>Brick & Mortar Business Websites</h1>
            </div>
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>And More...!!</h1>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 lg:gap-[92px] lg:mt-[24px]">
            <div className="lg:flex lg:gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
              <img src={boxImage} alt="boxImage" />
              <h1>Consulting Businesses</h1>
            </div>
          </div>
        </div>
      </div>
      <img src={gif} alt="gif" />
    </div>
  );
};

export default Unlock;

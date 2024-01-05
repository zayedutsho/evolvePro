import connectedImage from "../assets/connectedImage.svg";
import leftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

const Connected = () => {
  return (
    <div className="pt-[100px] pb-[120px] relative">
      <div className="text-center lg:text-[20px] font-normal text-[#9A9AB5] font-['Sharp-Grotesk-Medium']">
        <h1>
          In today’s fast-paced digital world, the difference between thriving
          and merely
        </h1>
        <h1>surviving in business often comes down to one critical element:</h1>
      </div>
      <div className="lg:mt-[20px] text-center lg:text-[50px] font-medium leading-[58px] font-['Sharp-Grotesk-Medium']">
        <h1> Staying connected with your</h1>
        <h1>prospects around the clock.</h1>
      </div>
      <div className="lg:flex items-center justify-center lg:mt-[80px]">
        <img src={connectedImage} alt="connectedImage" />
      </div>
      <div className="absolute top-[38%] left-[19%] font-['Poppins']">
        <div>
          <h1 className="text-[#292930] text-[40px] font-medium">
            Why EvolvePro.AI?
          </h1>
        </div>
        <div className="lg:mt-[32px]  text-[16px] text-[#999FAE] font-normal">
          <h1>Imagine a world where every website</h1>
          <h1>visitor is greeted with the same</h1>
          <h1>enthusiasm and expertise as a face-to-</h1>
          <h1>face meeting.</h1>
          <br />
          <h1>Where every query is met with insightful,</h1>
          <h1>personalised responses, and no sales</h1>
          <h1>opportunity slips through the cracks.</h1>
          <br />
          <h1>This is the world EvolvePro.AI creates for </h1>
          <h1>your business.</h1>
        </div>
        <div className="flex gap-[17px] lg:mt-[114px] ml-[8px]">
          <img src={leftArrow} alt="leftArrow" />
          <img src={RightArrow} alt="RightArrow" />
        </div>
      </div>
    </div>
  );
};

export default Connected;

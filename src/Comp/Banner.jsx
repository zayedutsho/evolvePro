/* eslint-disable no-irregular-whitespace */
// import bannerImage from "../assets/bannerImage.png";
import video from "../assets/vdo.mp4";
const Banner = () => {
  return (
    <div className="py-[150px] px-[250px] bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)] ">
      <div className="flex items-center justify-center">
        {/* <img src={bannerImage} alt="bannerImage" /> */}
        <video
          src={video}
          width="1200"
          height="1200"
          controls
          className="border rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-center lg:text-[32px] font-['Poppins'] font-bold text-[#fff]  mt-[100px]">
          <span className="py-[29px] px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
            Start Your Free Trial Today 》
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;

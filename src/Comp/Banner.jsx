/* eslint-disable no-irregular-whitespace */
// import bannerImage from "../assets/bannerImage.png";
import video from "../assets/vdo.mp4";

// ... (previous code)

const Banner = () => {
  const handlePlayButtonClick = () => {
    const video = document.querySelector("video");
    video.play();
    const playButton = document.getElementById("playButton");
    if (playButton) {
      playButton.style.display = "none";
    }
  };

  return (
    <div className="py-[64px] lg:py-[150px] px-[26px] lg:px-[250px] bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)] ">
      <div className="flex items-center justify-center relative">
        <video
          src={video}
          width="100%"
          height="auto"
          controls
          className="border-10 border-solid border-[#fff] rounded-lg"
        />
        {/* Centering the play button */}
        <div
          id="playButton"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ color: "#fff", fontSize: "48px" }}
          onClick={handlePlayButtonClick}
        >
          ▶️
        </div>
      </div>
      <div>
        <h1 className="text-center lg:text-[32px] font-['Poppins'] font-bold text-[#fff]  mt-[64px] lg:mt-[100px]">
          <span className="py-[20px] px-[32px] lg:py-[29px] lg:px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
            Start Your Free Trial Today 》
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;

/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import imageOne from "../assets/meet/imageOne.svg";
import imageTwo from "../assets/meet/imageTwo.svg";
import imageThree from "../assets/meet/imageThree.svg";

const Meet = () => {
  return (
    <div className="pt-[100px] pb-[40px]">
      <div className="text-center lg:text-[20px] font-normal text-[#9A9AB5] font-['Sharp-Grotesk-Medium']">
        <h1>
          In a world where every customer interaction can make or break your
          business, one
        </h1>
        <h1>AI-powered tool is changing the game...</h1>
      </div>
      <div className="lg:mt-[20px] text-center lg:text-[50px] font-medium leading-[58px] font-['Sharp-Grotesk-Medium']">
        <h1>Meet EvolvePro.AI - The Revolutionary</h1>
        <h1>Chatbot Transforming How Businesses</h1>
        <h1>Connect, Communicate, and Convert Online</h1>
      </div>
      <div className="lg:flex justify-center lg:mt-[50px] lg:gap-[80px]">
        <img src={imageOne} alt="imageOne" />
        <div>
          <div className="lg:mt-[60px] lg:text-[30px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Maximise Your Lead</h1>
            <h1>Generation Effortlessly</h1>
          </div>
          <div className="lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] lg:text-[16px]">
            <h1>With EvolvePro.AI, say goodbye to missed opportunities. Our</h1>
            <h1>
              intelligent AI doesn't just wait for customers to reach out – it
            </h1>
            <h1>proactively engages them, understanding their needs and</h1>
            <h1>
              guiding them through your sales funnel. Imagine waking up to
            </h1>
            <h1>
              a list of warm leads every morning, all thanks to a chatbot that
            </h1>
            <h1>never sleeps.</h1>
          </div>
          <div>
            <h1 className="lg:text-[16px] lg:mt-[90px] font-['Poppins'] font-normal text-[#fff]">
              <span className="py-[22px] px-[35px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
                Start Your Free Trial Today 》
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center lg:mt-[50px] lg:gap-[80px]">
        <div className="lg:ml-[140px]">
          <div className="lg:mt-[60px] lg:text-[30px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>What If Every Customer</h1>
            <h1>Felt Like Your Only</h1>
            <h1>Customer?</h1>
          </div>
          <div className="lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] lg:text-[16px]">
            <h1>
              EvolvePro.AI brings a personal touch to every conversation. It
            </h1>
            <h1>learns from each interaction, ensuring that your customers</h1>
            <h1>
              feel heard and understood. This isn't just a chatbot; it's a
            </h1>
            <h1>
              relationship builder, tailored to make every customer feel like
            </h1>
            <h1>your only customer.</h1>
          </div>
          <div>
            <h1 className="lg:text-[16px] lg:mt-[90px] font-['Poppins'] font-normal text-[#fff]">
              <span className="py-[22px] px-[35px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
                Start Your Free Trial Today 》
              </span>
            </h1>
          </div>
        </div>
        <img src={imageTwo} alt="imageTwo" />
      </div>
      <div className="lg:flex justify-center lg:mt-[50px] lg:gap-[80px]">
        <img src={imageThree} alt="imageThree" />
        <div>
          <div className="lg:mt-[60px] lg:text-[30px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Looking for the Secret</h1>
            <h1>to Turning Browsers</h1>
            <h1>into Buyers?</h1>
          </div>
          <div className="lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] lg:text-[16px]">
            <h1>
              Sales aren’t just about having the right product; it’s about
            </h1>
            <h1>timing and understanding. EvolvePro.AI is your 24/7 sales</h1>
            <h1>
              expert, identifying and acting on buying signals, providing the
            </h1>
            <h1>right information at the right time to seal the deal.</h1>
          </div>
          <div>
            <h1 className="lg:text-[16px] lg:mt-[90px] font-['Poppins'] font-normal text-[#fff]">
              <span className="py-[22px] px-[35px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
                Start Your Free Trial Today 》
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;

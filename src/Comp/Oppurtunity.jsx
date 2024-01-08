import blueLine from "../assets/blueLine.svg";
import purpleLine from "../assets/purpleLine.svg";
import op1 from "../assets/op1.svg";
import op2 from "../assets/op2.svg";

const Oppurtunity = () => {
  return (
    <div className="py-[64px] lg:py-[150px]">
      <div className="px-[16px] lg:px-[0px] flex justify-center">
        <div>
          <h1 className="lg:text-[20px] text-[#3662FE] font-['Poppins'] font-semibold text-center lg:text-start">
            Here are a few stories of business owners...
          </h1>
          <div className="block lg:hidden mt-[16px] font-['Sharp-Grotesk-medium'] text-[28px] text-center">
            <h1>That had the opportunity to implement EvolvePro.AI during its early stages and used it to revolutionise their business:</h1>
          </div>
          <div className="hidden lg:block lg:mt-[24px] font-['Sharp-Grotesk-medium'] lg:text-[48px] leading-[62.4px]">
            <h1>That had the opportunity to implement</h1>
            <h1>EvolvePro.AI during its early stages</h1>
            <h1>and used it to revolutionise their</h1>
            <h1>business:</h1>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center lg:gap-[270px] lg:mt-[55px]">
        <div className="block lg:hidden text-[20px] font-['Poppins'] mt-[50px] mb-[16px] px-[16px] lg:px-[0px]">
          <h1>What others are saying...</h1>
        </div>
        <div className="hidden lg:block lg:text-[40px] font-['Poppins'] font-medium leading-[40px]">
          <h1>What others</h1>
          <h1>are saying...</h1>
        </div>
        <div className="">
          <div className="hidden lg:block lg:grid grid-cols-2 gap-[24px] lg:gap-[24px]">
            <img src={blueLine} alt="blueLine"/>
            <img src={purpleLine} alt="purpleLine"/>
          </div>
          <div className="flex overflow-y-auto no-scrollbar lg:grid grid-cols-2 gap-[24px] lg:mt-[64px] font-['Poppins'] px-[16px] lg:px-[0px]">
            <div className="min-w-[275px] lg:min-w-[0px]">
              <img src={blueLine} alt="blueLine" className="lg:hidden"/>
              <h1 className="text-[20px] text-[#C75C6F] font-semibold mt-[42px] lg:mt-[0px]">UI8</h1>
              <div className="block lg:hidden lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>I have been studying copywriting for 3 years and felt I had a good command of the subject. However, after the first hour, I started to learn</h1>
              </div>
              <div className="hidden lg:block lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>I have been studying</h1>
                <h1>copywriting for 3 years and felt I</h1>
                <h1>had a good command of the</h1>
                <h1>subject. However, after the first</h1>
                <h1>hour, I started to learn</h1>
              </div>
              <div className="lg:flex gap-[15px] mt-[32px] lg:mt-[40px]">
                <div>
                  <img src={op1} alt="op1" />
                </div>
                <div>
                  <h1 className="font-semibold">Dash</h1>
                  <h1 className="text-[#999FAE] text-[14px]">Founder @UI8</h1>
                </div>
              </div>
            </div>
            <div className="min-w-[275px] lg:min-w-[0px]">
              <img src={purpleLine} alt="purpleLine" className="lg:hidden"/>
              <h1 className="text-[20px] text-[#5956E9] font-semibold mt-[42px] lg:mt-[0px]">
                Bento
              </h1>
              <div className="block lg:hidden lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>Dan Kennedy’s copywriting program is a life-changing, business-altering moment. After listening to Dan I immediately implemented his suggestions.</h1>
              </div>
              <div className="hidden lg:block lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>Dan Kennedy’s copywriting</h1>
                <h1>program is a life-changing,</h1>
                <h1>business-altering moment. After</h1>
                <h1>listening to Dan I immediately</h1>
                <h1>implemented his suggestions.</h1>
              </div>
              <div className="lg:flex gap-[15px] mt-[32px] lg:mt-[40px]">
                <div>
                  <img src={op2} alt="op2" />
                </div>
                <div>
                  <h1 className="font-semibold">Emily</h1>
                  <h1 className="text-[#999FAE] text-[14px]">Founder @Bento</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:grid grid-cols-2 gap-[24px] lg:mt-[100px]">
            <img src={purpleLine} alt="purpleLine" />
            <img src={blueLine} alt="blueLine" />
          </div>
          <div className="hidden lg:block lg:grid grid-cols-2 gap-[24px] lg:mt-[64px] font-['Poppins']">
            <div>
              <h1 className="text-[20px] text-[#C75C6F] font-semibold">
                Tam M.
              </h1>
              <div className="lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>Dan Kennedy’s copywriting</h1>
                <h1>program is a life-changing,</h1>
                <h1>business-altering moment. After</h1>
                <h1>listening to Dan I immediately</h1>
                <h1>implemented his suggestions.</h1>
              </div>
              <div className="lg:flex gap-[15px] lg:mt-[40px]">
                <div>
                  <img src={op2} alt="op2" />
                </div>
                <div>
                  <h1 className="font-semibold">Tran Mau Tri Tam</h1>
                  <h1 className="text-[#999FAE] text-[14px]">
                    Lead Visual Desinger @UI8
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[20px] text-[#90D0B1] font-semibold">Erik</h1>
              <div className="lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>I have been studying</h1>
                <h1>copywriting for 3 years and felt I</h1>
                <h1>had a good command of the</h1>
                <h1>subject. However, after the first</h1>
                <h1>hour, I started to learn</h1>
              </div>
              <div className="lg:flex gap-[15px] lg:mt-[40px]">
                <div>
                  <img src={op2} alt="op2" />
                </div>
                <div>
                  <h1 className="font-semibold">Erikk</h1>
                  <h1 className="text-[#999FAE] text-[14px]">Founder @UI8</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oppurtunity;

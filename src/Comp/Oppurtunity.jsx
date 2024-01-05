import blueLine from "../assets/blueLine.svg";
import purpleLine from "../assets/purpleLine.svg";
import op1 from "../assets/op1.svg";
import op2 from "../assets/op2.svg";

const Oppurtunity = () => {
  return (
    <div className="py-[150px]">
      <div className="flex justify-center">
        <div>
          <h1 className="text-[20px] text-[#3662FE] font-['Poppins'] font-semibold">
            Here are a few stories of business owners...
          </h1>
          <div className="lg:mt-[24px] font-['Sharp-Grotesk-medium'] lg:text-[48px] leading-[62.4px]">
            <h1>That had the opportunity to implement</h1>
            <h1>EvolvePro.AI during its early stages</h1>
            <h1>and used it to revolutionise their</h1>
            <h1>business:</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:gap-[270px] lg:mt-[55px]">
        <div className="lg:text-[40px] font-['Poppins'] font-medium leading-[40px]">
          <h1>What others</h1>
          <h1>are saying...</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-[24px]">
            <img src={blueLine} alt="blueLine" />
            <img src={purpleLine} alt="purpleLine" />
          </div>
          <div className="grid grid-cols-2 gap-[24px] lg:mt-[64px] font-['Poppins']">
            <div>
              <h1 className="text-[20px] text-[#C75C6F] font-semibold">UI8</h1>
              <div className="lg:mt-[32px] text-[21px] text-[#292930]">
                <h1>I have been studying</h1>
                <h1>copywriting for 3 years and felt I</h1>
                <h1>had a good command of the</h1>
                <h1>subject. However, after the first</h1>
                <h1>hour, I started to learn</h1>
              </div>
              <div className="lg:flex gap-[15px] lg:mt-[40px]">
                <div>
                  <img src={op1} alt="op1" />
                </div>
                <div>
                  <h1 className="font-semibold">Dash</h1>
                  <h1 className="text-[#999FAE] text-[14px]">Founder @UI8</h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[20px] text-[#5956E9] font-semibold">
                Bento
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
                  <h1 className="font-semibold">Emily</h1>
                  <h1 className="text-[#999FAE] text-[14px]">Founder @Bento</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[24px] lg:mt-[100px]">
            <img src={purpleLine} alt="purpleLine" />
            <img src={blueLine} alt="blueLine" />
          </div>
          <div className="grid grid-cols-2 gap-[24px] lg:mt-[64px] font-['Poppins']">
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

import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";
import eight from "../assets/eight.svg";
import nine from "../assets/nine.svg";
import ten from "../assets/ten.svg";
import eleven from "../assets/eleven.svg";
import twolve from "../assets/twolve.svg";
import thirteen from "../assets/thirteen.svg";
import fourteen from "../assets/fourteen.svg";
import fifteen from "../assets/fifteen.svg";

const FreeTrial = () => {
  const data = [
    {
      id: 1,
      logo: one,
      heading: "AI-Powered Engagement",
      description:
        "Engages visitors with AI for enhanced customer interaction.",
    },
    {
      id: 2,
      logo: two,
      heading: "Lead Qualification  ",
      description:
        "Automatically qualifies leads for better conversion rates.      ",
    },
    {
      id: 3,
      logo: three,
      heading: "Appointment Scheduling",
      description:
        "Schedules appointments efficiently, improving customer service experience.             ",
    },
    {
      id: 4,
      logo: four,
      heading: "24/7 Availability ",
      description:
        "Offers round-the-clock service, never missing opportunities.",
    },
    {
      id: 5,
      logo: five,
      heading: "Personalized Interactions",
      description:
        "Tailors conversations for personal touch in customer service.",
    },
    {
      id: 6,
      logo: six,
      heading: "Analytics and Reporting",
      description: "Provides insightful data for informed business decisions.",
    },
    {
      id: 7,
      logo: seven,
      heading: "Easy Integration",
      description:
        "Seamlessly integrates with existing websites and platforms.                 ",
    },
    {
      id: 8,
      logo: eight,
      heading: "Scalability",
      description: "Easily scales to match business growth and demand.        ",
    },
    {
      id: 9,
      logo: nine,
      heading: "Multilingual Support",
      description: "Communicates in multiple languages for broader reach.",
    },

    {
      id: 10,
      logo: ten,
      heading: "Natural Language Processing",
      description:
        "Understands and responds in natural, conversational language.              ",
    },
    {
      id: 11,
      logo: eleven,
      heading: "Customizable AI Responses",
      description: "Allows customization of AI responses for brand alignment.",
    },
    {
      id: 12,
      logo: twolve,
      heading: "Real-Time Customer Support",
      description:
        "Provides instant support, enhancing customer satisfaction. ",
    },
  ];
  const dataTwo = [
    {
      id: 1,
      logo: thirteen,
      heading: "User-Friendly Interface",
      description:
        "Easy-to-use interface for efficient management and control.",
    },
    {
      id: 2,
      logo: fourteen,
      heading: "Expert Sales Training",
      description:
        "Expertly trained in cutting-edge sales strategies from the greatest sales books ever for superior performance. ",
    },
    {
      id: 3,
      logo: fifteen,
      heading: "CRM",
      description:
        "Integrates with CRM for streamlined customer relationship management",
    },
  ];
  return (
    <div className="bg-black  flex flex-col items-center justify-center py-[150px] px-[250px]">
      <div className="mb-8 text-white text-center">
        <p>Join The Revolution</p>
        <h1 className="text-4xl font-bold">Start your FREE Trial.</h1>
        <p>Get Started In Less Than 60 Seconds • Cancel Anytime</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-[#2F2F38] p-4 rounded-[30px]  px-[126px] py-[129px]"
          >
            <img
              src={card.logo}
              alt={`Logo ${card.id}`}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-[20px ] mt-[25px]  text-white font-bold text-center mb-2">
              {card.heading}
            </h2>
            <p className="text-sm text-[#999FAE] text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-5">
        {dataTwo.map((c) => (
          <div
            key={c.id}
            className="bg-[#2F2F38] p-4 rounded-[30px]  px-[126px] py-[129px]"
          >
            <img
              src={c.logo}
              alt={`Logo ${c.id}`}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-lg text-white font-bold text-center mb-2">
              {c.heading}
            </h2>
            <p className="text-sm text-[#999FAE] text-center">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTrial;

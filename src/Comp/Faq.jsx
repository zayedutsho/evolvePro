import { useState } from "react";

const Faq = () => {
  const faqItems = [
    {
      question: "Can Magnetic Story Selling work for MY business?",
      answer:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS.",
    },
    {
      question: "Why is ‘Magnetic Story Selling’ priced at $1,997?",
      answer:
        "Yes, Flowbite is first conceptualized and designed using the Figma software.",
    },
    {
      question: "What if ‘Magnetic Story Selling’ doesn’t help me?",
      answer:
        "Check out the documentation on the official website for a guide on getting started.",
    },
    {
      question: "When will my copy of ‘Magnetic Story Selling’ get to me?",
      answer:
        "Check out the documentation on the official website for a guide on getting started.",
    },
    {
      question: "Where can I order ‘Magnetic Story Selling’?",
      answer:
        "Check out the documentation on the official website for a guide on getting started.",
    },
  ];

  const AccordionItem = ({ num, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="mb-4 border-b">
        <div
          className={`flex justify-between items-center cursor-pointer ${
            isOpen ? "w-full" : "max-w-[1241px]"
          }`}
          onClick={toggleAccordion}
        >
          <div className="flex items-center space-x-5">
            <span className="text-gray-500">{num}.</span>
            <h2 className="text-lg font-semibold text-center text-nowrap ">
              {question}
            </h2>
          </div>
          <span className="w-8 h-8 text-gray-500 inline-block rounded-full border border-purple-500 items-center justify-center flex ">
            {isOpen ? "-" : "+"}
          </span>
        </div>
        {isOpen && <p className="mt-2  text-nowrap text-start ">{answer}</p>}
      </div>
    );
  };

  return (
    <div className="py-[150px] px-[250px] bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)]">
      <div className="max-w-[1241px] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-7xl text-black mb-[92px]">
          FAQ
        </h1>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            num={index + 1}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;

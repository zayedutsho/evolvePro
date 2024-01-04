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
        <div className="flex flex-col md:flex-row justify-between items-center cursor-pointer">
          <div className="flex items-center mb-3 md:mb-0 md:space-x-5">
            <span className="text-gray-500">{num}.</span>
            <h2 className="text-lg font-semibold text-center md:text-left text-nowrap">
              {question}
            </h2>
          </div>
          <div className="flex items-center">
            <span
              onClick={toggleAccordion}
              className="w-8 h-8 text-gray-500 inline-block rounded-full border border-purple-500 items-center justify-center flex cursor-pointer"
            >
              {isOpen ? "-" : "+"}
            </span>
          </div>
        </div>
        {isOpen && (
          <p className="mt-2 text-nowrap text-center md:text-left">{answer}</p>
        )}
      </div>
    );
  };

  return (
    <div className="py-8 px-4 md:px-8 bg-gradient-to-b from-transparent via-gray-200 to-gray-300">
      <div className="max-w-full md:max-w-[1241px] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-7xl text-black mb-[92px]">
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

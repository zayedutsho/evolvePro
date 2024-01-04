import { useState } from "react";

const Faq = () => {
  const faqItems = [
    {
      question: "What is Flowbite?",
      answer:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS.",
    },
    {
      question: "Is there a Figma file available?",
      answer:
        "Yes, Flowbite is first conceptualized and designed using the Figma software.",
    },
    {
      question: "How can I get started?",
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
      <div className="mb-4 border-b p-8">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">{num}.</span>
            <h2 className="text-lg font-semibold text-lg font-">{question}</h2>
          </div>
          <span className="w-8 h-8 text-gray-500 inline-block rounded-full border border-purple-500   items-center justify-center flex">
            {isOpen ? "-" : "+"}
          </span>
        </div>
        {isOpen && <p className="mt-2">{answer}</p>}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center  text-7xl">FAQ</h1>
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Faq;

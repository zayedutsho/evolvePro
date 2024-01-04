const FreeTrial = () => {
  const data = [
    {
      id: 1,
      logo: "Logo 1",
      heading: "Heading 1",
      description: "Description 1",
    },
    {
      id: 2,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 3,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 4,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 5,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 6,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 7,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 8,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 9,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 10,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 11,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
    {
      id: 12,
      logo: "Logo 2",
      heading: "Heading 2",
      description: "Description 2",
    },
  ];
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="mb-8 text-white text-center">
        <p>Join The Revolution</p>
        <h1 className="text-4xl font-bold">Start your FREE Trial.</h1>
        <p>Get Started In Less Than 60 Seconds • Cancel Anytime</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((card) => (
          <div key={card.id} className="bg-white p-4 rounded-md">
            <img
              src={card.logo}
              alt={`Logo ${card.id}`}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-lg font-bold text-center mb-2">
              {card.heading}
            </h2>
            <p className="text-sm text-gray-600 text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTrial;

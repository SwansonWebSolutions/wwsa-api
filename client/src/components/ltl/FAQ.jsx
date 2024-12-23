import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does LTL mean in freight shipping?",
      answer: "LTL stands for less-than-truckload. LTL is a mode that allows shippers to move freight without paying for an entire trailer."
    },
    {
      question: "What freight typically ships LTL?",
      answer: "Less-than-truckload freight typically weighs between 150 and 20,000 pounds. This freight isn’t large enough to fill a full semi-trailer but is too large to be considered a package or parcel."
    },
    {
      question: "How does LTL shipping work?",
      answer: "Because LTL freight doesn’t require a full trailer, LTL carriers move goods across the country by combining multiple shipments into one trailer. Though methods vary, many carriers use strategically placed service centers to pick up local freight and consolidate it with other shipments headed in the same direction."
    },
    {
      question: "What transit times can I expect?",
      answer: "How long it takes to deliver your shipment depends on factors like how far the freight is traveling, what route it takes to get to its destination, and the efficiency of the carrier’s network. While unexpected delays can happen due to weather."
    },
    {
      question: "How are costs determined?",
      answer: "Rates are based on the weight and dimensions of your shipment, its origin and destination, the freight classification, and any special services or equipment. Carriers can have varying rates depending on their current capacity and may charge differently for accessorials like liftgates and inside delivery."
    },
    {
      question: "Do LTL shipments require special packaging?",
      answer: "Since LTL freight gets handled multiple times during transit and is loaded with other types of freight in the equipment, proper packaging is essential for keeping it intact and damage-free. Everything from choosing the proper box, pallet, or crate to using the right internal packaging can help keep freight safe."
    },
    {
      question: "What information do I need to book an LTL shipment?",
      answer: (
        <div>
          The more communication you have during the quoting and booking process, the smoother your experience will be. Here is some information you will need:
          <ul className="list-inside list-disc text-navy-blue mt-4">
            <li><strong>Pickup and delivery details:</strong> The origin and destination addresses and desired pickup and delivery dates.</li>
            <li><strong>The exact weight and dimensions of your freight:</strong> Providing correct measurements will help avoid unexpected charges.</li>
            <li><strong>The proper National Motor Freight Classification (NMFC):</strong> This classification helps determine the correct rate.</li>
            <li><strong>Any additional services:</strong> Special services such as liftgate pickup or freeze protection will affect your price.</li>
          </ul>
        </div>
      )
    },
    {
      question: "How do I choose the right LTL carrier?",
      answer: "Selecting an LTL carrier is an important decision. Consider the type of freight, where you’re shipping to and from, and any special services needed. The lowest price isn’t always the best if the carrier isn’t known for safe handling or on-time delivery."
    },
  ];

  return (
    <div className="bg-light-gray py-8 px-[10%]">
      <h2 className="text-2xl font-rubik text-navy-blue mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div
              className="cursor-pointer bg-light-blue p-4 text-lg font-medium text-navy-blue hover:bg-navy-blue hover:text-white transition duration-300"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="p-4 text-navy-blue">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

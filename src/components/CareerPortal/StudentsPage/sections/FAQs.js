import React, { useState } from "react";

const faqsData = [
  {
    question: "Who can apply for internships listed here?",
    answer:
      "Any undergraduate or postgraduate student currently enrolled in a recognized institution can apply, unless otherwise specified in the job description.",
  },
  {
    question: "Do I need a resume to apply?",
    answer:
      "Yes, a professional resume is generally required. We recommend uploading your resume so it can be used across applications.",
  },
  {
    question: "Are these opportunities paid?",
    answer:
      "Many of the internships and jobs listed are paid, but some educational or research internships may be unpaid. Please refer to the job details for clarity.",
  },
  {
    question: "Can I apply to multiple opportunities?",
    answer:
      "Absolutely! You can apply to as many relevant opportunities as you like. Just ensure your profile is updated before applying.",
  },
  {
    question: "Will I receive updates after applying?",
    answer:
      "Yes, you’ll be notified via email or dashboard updates when your application status changes.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 bg-white border-t">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#525599] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-[#525599] font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t text-gray-700 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

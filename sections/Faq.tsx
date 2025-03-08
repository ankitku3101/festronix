"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "I am a beginner, can I participate?", answer: "You should register for Nirman because this event is all about getting that experience!\nThe events provide a great environment to get started." },
    { question: "Can I participate in all of these events?", answer: "You can join multiple events, but check the schedule for conflicts." },
    { question: "What is a Hackathon?", answer: "A Hackathon is a competition where teams build solutions within a time limit." },
    { question: "Is Festronix an offline or online event?", answer: "Festronix is an offline event at Gift Autonomous campus." },
    { question: "Can anyone outside Gift Autonomous participate?", answer: "Yes, the event is open to all students." },
    { question: "What is the registration fee?", answer: "The registration fees for each event are mentioned in the respective rule book." },
    { question: "Where can I see Event details?", answer: "Kindly visit the Events page and check out respective events." },
    { question: "I have more queries!", answer: "Feel free to contact us via email or our support chat on the website." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-light">
          FAQs: <span className="text-light">Your Queries, Our Insights</span>
        </h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Explore the answers that empower your experience, guiding you through every aspect of our event.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 transition-all"
          >
            <button
              className={`flex justify-between items-center w-full text-left pb-2 text-xl font-semibold transition-all ${openIndex === index ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-blue-400" />
              ) : (
                <ChevronDown size={20} className="text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-6 text-gray-300 text-md transition-all duration-300 border-t border-gray-600 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
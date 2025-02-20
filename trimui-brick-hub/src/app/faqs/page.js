"use client";
import { useState, useEffect } from "react";

export default function FAQsPage() {
  const [faqs, setFaqs] = useState([]);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    fetch("/data/faqs.json")
      .then((res) => res.json())
      .then((json) => setFaqs(json.faqs))
      .catch((err) => console.error("Error loading FAQs:", err));
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl md:text-3xl font-bold text-retroPurple text-center mb-6">
        FAQs
      </h1>
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li key={faq.id} className="border-4 border-black p-4 bg-retroBlue text-white">
            <button
              className="w-full text-left text-xl font-bold flex justify-between items-center"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
              <span>{openFAQ === faq.id ? "▲" : "▼"}</span>
            </button>
            {openFAQ === faq.id && (
              <p className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

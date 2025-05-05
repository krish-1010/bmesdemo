// components/FaqSection.tsx

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  "How do I get a quote for my move?",
  "What areas do you serve?",
  "Are you licensed and insured?",
  "Do you provide packing services?",
  "Can I pack my own belongings?",
];

export default function FaqSection() {
  return (
    <section className="max-w-[95%] mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
        <div>
          <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="text-2xl  md:text-4xl font-bold text-gray-800">
            <span className="text-primary">Having Doubts?</span> <br />
            <span>We Got You Covered!</span>
          </h2>
        </div>
        <p className="text-gray-600 max-w-md">
          Here are the list of some frequently asked questions from people, to
          help you understand more about our service
        </p>
      </div>

      {/* FAQ */}
      <div className="mt-10 space-y-4">
        {faqs.map((question, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="border rounded-xl overflow-hidden">
                <DisclosureButton className="w-full flex justify-between items-center px-4 py-4 text-left text-sm md:text-base font-medium text-gray-900 cursor-pointer focus:outline-none">
                  <span>{question}</span>
                  {open ? (
                    <HiMinus className="h-5 w-5" />
                  ) : (
                    <HiPlus className="h-5 w-5" />
                  )}
                </DisclosureButton>
                <DisclosurePanel className="px-4 pb-4 text-sm text-gray-500">
                  This is the answer to “{question}”. Aprma Replace with actual
                  content.
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      {/* Bott - link */}
      <div className="mt-8 text-center text-sm text-gray-700">
        Still have more questions? Contact our{" "}
        <a href="#" className="text-green-700 underline underline-offset-4">
          help center
        </a>
        .
      </div>
    </section>
  );
}

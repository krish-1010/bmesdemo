"use client";

import { FaCouch, FaDollarSign, FaHome, FaDoorOpen, FaUserShield, FaBuilding, FaFileInvoiceDollar, FaTools } from "react-icons/fa";
import { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  text: string;
};

const features: Feature[] = [
  {
    icon: <FaCouch />,
    text: "Moving the furniture where you want it in each room",
  },
  {
    icon: <FaDollarSign />,
    text: "All man power, fuel, truck, trailer, pad and equipment costs",
  },
  {
    icon: <FaHome />,
    text: "House policy to repair or replace items damage in the move",
  },
  {
    icon: <FaDoorOpen />,
    text: "$40,000 Standard cargo insurance",
  },
  {
    icon: <FaUserShield />,
    text: "Your consumer rights with the BBB & SMA",
  },
  {
    icon: <FaBuilding />,
    text: "2 Million General liability insurance",
  },
  {
    icon: <FaFileInvoiceDollar />,
    text: "Bond worth of $50,000",
  },
  {
    icon: <FaTools />,
    text: "Free disassembly and reassembly of your house items",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="inline-block bg-green-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              Features
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold">
              What Do You Get <br />
              When You <span className="text-green-700">Choose Us?</span>
            </h2>
          </div>

          <p className="text-gray-700 text-sm md:text-right md:max-w-sm">
            For more than 100 years experience, <br />
            We move coast to coast under our own authority.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl text-center shadow-sm space-y-4"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-green-800 flex items-center justify-center text-white text-xl">
                {item.icon}
              </div>
              <p className="text-sm text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

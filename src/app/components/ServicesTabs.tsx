"use client";

import Image from "next/image";
import { useState } from "react";
import quoteImage from "../../../public/images/service-quote.png";
import estimateImage from "../../../public/images/service-estimate.png";
import suppliesImage from "../../../public/images/service-supplies.png";
import storageImage from "../../../public/images/service-storage.png";
import packingImage from "../../../public/images/service-packing.png";
import { useRef, useEffect } from "react";

const services = [
  {
    title: "Online real-time quote",
    image: quoteImage,
    content:
      "Our advanced real-time move quotation software allows you to create binding quotations just by specifying the inventory you want to move and their locations. It is that simple — in minutes you get your quotation number along with all binding documents, sent directly to your inbox.",
  },
  {
    title: "Schedule a free In-Home Estimate",
    image: estimateImage,
    content:
      "You can easily schedule a free In-Home Estimate for your upcoming move. Our moving specialists will visit your home, conduct a thorough walk-through, address any questions or concerns, assess your inventory, and calculate an on-the-spot quote before leaving.",
  },
  {
    title: "Moving Supplies",
    image: suppliesImage,
    content:
      "When you plan a move, you certainly want to keep your possessions safe and organized. Boxes, packing material, moving safety material & all the rest of moving supplies are also sold here in our online shop.",
  },
  {
    title: "Storage Services",
    image: storageImage,
    content:
      "We provide short-term and long-term storage options in climate-controlled facilities. Whether you need storage while transitioning or for long-term security, our solutions are flexible and safe.",
  },
  {
    title: "Professional Packing",
    image: packingImage,
    content:
      "Our trained professionals ensure your belongings are packed with utmost care using high-quality materials. This reduces the risk of damage during transport and makes your move easier.",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerWidth < 768 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Tab List */}
        <div className="md:col-span-1  rounded-xl divide-y">
          {services.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-full border-b-0 text-left p-4 text-sm font-medium transition-all duration-200 hover:bg-gray-50 ${
                active === idx
                  ? "border-l-4  border-green-700 bg-gray-50 text-green-700"
                  : "pl-6"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {/* <div className="md:col-span-2 space-y-6"> */}
        <div
          ref={contentRef}
          className="md:col-span-2 space-y-6 transition-opacity duration-300"
        >
          <Image
            src={services[active].image}
            alt={services[active].title}
            className="rounded-xl w-full h-auto"
            width={800}
            height={400}
          />
          <h3 className="text-xl font-semibold text-green-700">
            {services[active].title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {services[active].content}
          </p>
        </div>
      </div>
    </section>
  );
}

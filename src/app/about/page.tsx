import Image from "next/image";
import heroImage from "../../../public/images/about-hero.png";
import sandImage from "../../../public/images/footprint.png";
import LicenseSection from "../components/LicenseSection";
import TestimonialsTeaser from "../components/TestimonialsTeaser";
import FeaturesSection from "../components/FeaturesSection";
import ServicesTabs from "../components/ServicesTabs";

export default function About() {
  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
        <Image
          src={heroImage}
          alt="Warehouse background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            Wanna Know More <span className="text-yellow-400">About Us?</span>
          </h1>
        </div>
      </section>

      {/* WHAT DO WE DO SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
        {/* Top 2-column layout */}
        <div className="flex md:items-center   flex-col md:flex-row md:justify-between gap-6">
          <div>
            <span className="inline-block bg-green-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              About Us
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold">
              What Do We Do <br />
              In <span className="text-green-700">MoveCo?</span>
            </h2>
          </div>

          <p className="text-gray-700 text-sm md:text-right md:max-w-sm">
            For more than 100 years experience, <br />
            We move coast to coast under our own authority.
          </p>
        </div>

        {/* Image + Mission text */}
        <div className="grid md:grid-cols-2 gap-8  items-center">
          <Image
            src={sandImage}
            alt="Footprint in sand"
            className="rounded-xl"
            width={600}
            height={400}
          />

          <div className="space-y-4 text-center md:text-left">
            <span className="inline-block bg-green-800 text-white px-4 py-1 rounded-full text-sm font-medium">
              Our Mission
            </span>
            <p className="text-gray-700 text-sm leading-relaxed">
              We aim to impress you with our service so much that you&apos;ll
              share our business cards with your friends and colleagues, post
              your text and video testimonials on our website, and choose us for
              your next move.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <LicenseSection />

      {/*  */}
      <TestimonialsTeaser />

      {/*  */}
      <FeaturesSection />

      {/*  */}
      <ServicesTabs />
    </div>
  );
}

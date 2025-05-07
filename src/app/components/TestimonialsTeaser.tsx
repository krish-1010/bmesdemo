import Image from "next/image";
import moverImage from "../../../public/images/testimonial-movers.png"; // replace with your image path
import Link from "next/link";

export default function TestimonialsTeaser() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        {/* Left Image */}
        <Image
          src={moverImage}
          alt="Movers delivering boxes"
          className="rounded-xl"
          width={600}
          height={400}
        />

        {/* Right Text */}
        <div className="space-y-5">
          <span className="inline-block bg-green-800 text-white px-4 py-1 rounded-full text-sm font-medium">
            Testimonials
          </span>

          <p className="text-gray-800 text-sm leading-relaxed">
            Our online testimonial board goes a step further. You can post your
            moving experience for our future customers to see, you can also go
            to our website & see over 10 years of customer reviews.
            <br />
            <br />
            Our crews make the difference. We conduct background checks and
            random drug tests.
          </p>

          <Link
            href="#"
            className="hidden md:inline-block  border border-green-800 text-green-800 text-sm px-4 py-2 rounded-full hover:bg-green-800 hover:text-white transition"
          >
            View all
          </Link>
        </div>
      </div>
      <div className="md:hidden mt-6 text-center">
        <Link
          href="#"
          className="inline-block border border-green-800 text-green-800 text-sm px-4 py-2 rounded-full hover:bg-green-800 hover:text-white transition"
        >
          View all
        </Link>
      </div>
    </section>
  );
}

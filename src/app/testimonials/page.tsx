import Image from "next/image";
import videoThumb1 from "../../../public/images/testimonial/testimonial1.png";
import videoThumb2 from "../../../public/images/testimonial/testimonial2.png";
import avatar from "../../../public/images/avatar.png"; // your imported profile image

const testimonials = [
  {
    name: "Shreya Goshal",
    location: "New York",
    message:
      "We've used MOVECO.net multiple times, both our home moves & our office move. I Highly recommend them!",
  },
  {
    name: "Shreya Goshal",
    location: "New York",
    message:
      "We've used MOVECO.net multiple times, both our home moves & our office move. I Highly recommend them!",
  },
  {
    name: "Shreya Goshal",
    location: "New York",
    message:
      "We've used MOVECO.net multiple times, both our home moves & our office move. I Highly recommend them!",
  },
];

export default function Testimonials() {
  const thumbnails = [videoThumb1, videoThumb2];
  return (
    <div className="my-10 py-4 max-w-[95%]  mx-auto">
      <div className="flex mb-4 flex-col md:flex-row md:justify-between md:items-center">
        <div>
          {/*  */}
          <div className="flex mb-4 md:pb-2 justify-center md:justify-start">
            <button className="bg-primary p-2 cursor-pointer px-4 rounded-4xl text-xl md:text-xl xl:text-2xl text-white">
              Testimonials
            </button>
          </div>

          <h2 className="text-center text-4xl mb-2 md:text-2xl xl:text-4xl md:text-left font-semibold">
            What Our <span className="text-primary ">Clients </span> <br />
            Think About Us?
          </h2>
        </div>
        <p className="text-center text-light mx-auto md:mx-0 w-[60%] md:text-xl xl:text-2xl md:text-right">
          Read testimonials from satisfied clients, sharing their experiences
          and successes with our services.
        </p>
      </div>

      <div className="flex space-x-4 overflow-x-auto snap-x md:overflow-visible md:flex-row">
        {thumbnails.map((thumb, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[90%] snap-center md:w-1/2 relative aspect-video rounded-xl overflow-hidden"
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Testimonial map uh */}
      <div className="hidden mt-8 max-w-[90%] mx-auto md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white lg:max-w-[500px] xl:max-w-[300px] w-full p-4 rounded-xl shadow text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

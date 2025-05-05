import service1 from "@/../public/images/service/service1.png";
import service2 from "@/../public/images/service/service2.png";
import service3 from "@/../public/images/service/service3.png";
import ServiceCard from "../components/ServiceCard";

const serviceinfo = [
  {
    key: 1,
    img: service1,
    heading: "Professional Transport Service",
    para: "Transport your households to desired destination",
  },
  {
    key: 2,
    img: service2,
    heading: "Packing & Unpacking Services",
    para: "Pack & unpack your home items safe & professionally",
  },
  {
    key: 3,
    img: service3,
    heading: "Secured Storage Services",
    para: "Climate controlled storage with 24hrs security cameras",
  },
];

export default function Services() {
  return (
    <div className="my-10 py-4 max-w-[95%] mx-auto">
      <div className="flex mb-4 flex-col md:flex-row md:justify-between md: items-center">
        <div>
          {/*  */}
          <div className="flex mb-4 md:pb-2 justify-center md:justify-start">
            <button className="bg-primary p-2 cursor-pointer px-4 rounded-4xl text-xl md:text-xl xl:text-2xl text-white">
              Our Services
            </button>
          </div>

          <h2 className="text-center text-4xl mb-2 md:text-2xl xl:text-4xl md:text-left font-semibold">
            Things that will be <br />
            taken <span className="text-primary ">Care Of</span>
          </h2>
        </div>
        <p className="text-center text-light w-[60%] md:w-fit md:text-xl xl:text-2xl md:text-right">
          Let us take care of packing and unpacking of your household goods,{" "}
          <br />
          while keep your entire moving plan hassle free.
        </p>
      </div>

      <div className="flex  flex-col justify-center md:justify-between items-center md:flex-row gap-4">
        {serviceinfo.map((service) => {
          return (
            <ServiceCard
              key={service.key}
              img={service.img}
              heading={service.heading}
              para={service.para}
            />
          );
        })}
      </div>
    </div>
  );
}

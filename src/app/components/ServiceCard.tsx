import Image, { StaticImageData } from "next/image";

export default function ServiceCard({
  img,
  heading,
  para,
}: {
  img: StaticImageData;
  heading: string;
  para: string;
}) {
  return (
    <div className="flex flex-col w-[70%] md:w-[500px]">
      <div className="flex-1/2 ">
        <Image
          src={img}
          alt="service 1"
          className="rounded-t-2xl h-full w-full"
        />
      </div>
      <div className="bg-primary flex-1/2 rounded-b-2xl flex flex-col gap-2 text-white p-6">
        <h2 className="text-xl lg:text-2xl md:text-3xl ">{heading}</h2>
        <p className="text-sm">{para}</p>
      </div>
    </div>
  );
}

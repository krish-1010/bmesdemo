"use client";

import HeroContent from "./components/HeroContent";
import Mainform from "./components/MainForm";
import SocialProofCard from "./components/SocialProofCard";
import Image from "next/image";
import herobg from "./../../public/images/hero-bg.jpg";
import formimage from "./../../public/images/formimage.jpg";
import Services from "./services/page";
import Testimonials from "./testimonials/page";
import FaqSection from "./components/FaqSection";
import herobanner from "./../../public/images/herobanner.png";

export default function Home() {
  return (
    <div className="bg-[--color-background] ">
      <section className="relative lg:mx-4">
        <div className="lg:hidden relative inset-0 -z-10">
          <Image
            src={herobg}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* mobile */}
        <div className="lg:hidden rounded-t-3xl bg-[url('/images/hero-bg.jpg')] bg-cover bg-center pt-10 pb-20 px-4">
          <HeroContent />
          <SocialProofCard />
        </div>

        <div className="lg:hidden relative z-10 -mt-12 px-4">
          <Mainform />
        </div>

        {/* tab - desktop- hero */}
        <div className="hidden lg:flex lg:flex-col xl:flex-row">
          <div className="w-3/4 bg-[url('/images/truck.png')] bg-cover bg-center mr-4 flex justify-between lg:w-full h-[80vh] rounded-3xl">
            <div></div>
            <div className="mr-0 xl:flex  xl:flex-col justify-center lg:max-w-[400px]">
              <HeroContent />
              <SocialProofCard />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-between lg:w-full xl:block w-[360px] xl:w-[400px] lg:mt-8 xl:mt-0">
            <div className="hidden lg:flex lg:justify-center lg:items-center  xl:hidden w-full ">
              <Image
                src={formimage}
                alt="image"
                className="lg:w-[60%] rounded-3xl"
              ></Image>
            </div>
            <div className="hidden xl:flex xl:justify-center xl:items-center xl:mb-5 w-full">
              <Image
                src={herobanner}
                alt="banner"
                width={300}
                height={100}
                className="w-full h-full"
              />
            </div>
            <Mainform />
          </div>
        </div>
      </section>

      {/* <div>----</div> */}

      <div>
        <Services />
      </div>

      <div className="bg-gray-50">
        <Testimonials />
      </div>

      <div>
        <FaqSection />
      </div>
    </div>
  );
}

{
  /* <>
             🚛 Truck Image for tablet/desktop 
            

            ✍️ Content Column 
            <div className="w-full  lg:w-1/2 flex flex-col gap-6 items-center lg:items-end text-center lg:text-left">
              <HeroContent />
              <SocialProofCard />

              ✅ Show form below on mobile/tablet, side-by-side on desktop 
              <div className="block lg:hidden w-full">
                <Mainform />
              </div>
            </div>
          </> 
*/
}

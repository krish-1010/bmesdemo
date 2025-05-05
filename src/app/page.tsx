// // import Image from "next/image";
// import HeroContent from "./components/HeroContent";
// import Mainform from "./components/MainForm";
// import SocialProofCard from "./components/SocialProofCard";
// import Image from "next/image";
// import herobg from "./../../public/images/hero-bg.jpg";

// export default function Home() {
//   return (
//     <div className=" bg-[--color-background]">
//       <section
//         className="relative bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/your-truck-image.jpg')" }}
//       >
//         {/* Background Image */}
//         <Image
//           src={herobg}
//           alt="Hero background"
//           className="object-cover w-[100%] absolute z-[-10] h-[80vh]"
//           priority
//         />

//         <HeroContent />
//         <SocialProofCard />
//         <Mainform />
//       </section>
//     </div>
//   );
// }

// app/page.tsx or wherever you're using it
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
            <div className="mr-0 xl:flex xl:flex-col justify-center lg:max-w-[400px]">
              <HeroContent />
              <SocialProofCard />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-between lg:w-full xl:block w-[360px] xl:w-[400px] lg:mt-8 xl:mt-0">
            <div className="hidden lg:flex  lg:justify-center lg:items-center  xl:hidden w-full ">
              <Image
                src={formimage}
                alt="image"
                className="lg:w-[60%] rounded-3xl"
              ></Image>
            </div>
            <Mainform />
          </div>
        </div>
      </section>

      {/* <div>----</div> */}

      <div>
        <Services />
      </div>

      <div>
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

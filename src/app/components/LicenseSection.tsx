import Image from "next/image";
import dotLogo from "../../../public/images/dot.png"; 
import texasLogo from "../../../public/images/txdmv.png"; 
import bbbLogo from "../../../public/images/bbb.png"; 
import smaLogo from "../../../public/images/sma.png"; 

export default function LicenseSection() {
  return (
    <section className="bg-gray-50 px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Text Block */}
        <div className="space-y-4">
          <span className="inline-block bg-green-800 text-white px-4 py-1 rounded-full text-sm font-medium">
            Licenses
          </span>
          <p className="text-gray-800 text-sm leading-relaxed">
            What does BBB and SMA membership mean for you? It ensures MoveCo
            follows strict ethical standards and gives you access to
            arbitration or mediation if you&apos;re ever dissatisfied, protecting
            your rights as a customer.
          </p>
        </div>

        {/* Licensed With */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-4 text-center">
          <h4 className="text-green-900 font-medium underline underline-offset-4">
            Licensed With
          </h4>
          <div className="flex flex-col gap-4 items-center">
            <Image src={texasLogo} alt="Texas DMV" width={100} />
            <Image src={dotLogo} alt="US DOT" width={80} />
          </div>
        </div>

        {/* Membership With */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-4 text-center">
          <h4 className="text-green-900 font-medium underline underline-offset-4">
            Membership with
          </h4>
          <div className="flex flex-col gap-4 items-center">
            <Image src={bbbLogo} alt="BBB" width={60} />
            <Image src={smaLogo} alt="SMA" width={80} />
          </div>
        </div>
      </div>
    </section>
  );
}

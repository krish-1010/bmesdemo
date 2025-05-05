import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import logo from "../../../public/images/logoo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 w-full md:w-3/4">
          {/* Mobile lkog */}
          <div className="md:hidden">
            <Image src={logo} alt="Texas Logo" width={100} />
          </div>

          <h3 className="text-lg font-semibold">MoveCo.Net</h3>
          <p>
            21439 Crescent Ave Lewisville TX 75057 <br />
            (972) 250-1100 (817) 380-5398 Toll Free: (800) 590-0928
          </p>

          <div className="flex gap-4 mt-3">
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaYoutube />} />
            <SocialIcon icon={<FaXTwitter />} />
            <SocialIcon icon={<FaFacebookF />} />
          </div>

          <p className="text-xs mt-4">
            &copy; 2025, MoveCo. All rights reserved.
          </p>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:block">
          <Image src={logo} alt="Texas Logo" width={100} />
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center md:text-right text-sm text-white/80 space-x-3">
        <a href="#" className="hover:text-white">
          Terms of service
        </a>
        <span>|</span>
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:text-white">
          Cookies Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:text-white">
          Compliance
        </a>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
      {icon}
    </div>
  );
}

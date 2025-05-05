// import Image from "next/image";
"use client";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="m-4 bg-white rounded-4xl px-4 py-3 shadow-md lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-4 mt-4">
      {/*  */}
      <div className="flex justify-between items-center ">
        <div className="text-xl font-bold">
          <span className="text-black">Move</span>
          <span className="text-primary font-semibold">Co</span>
        </div>

        {/*  */}
        <div className="flex items-center gap-4 lg:hidden">
          <div>
            <FaCircleUser className="text-[30px] text-primary" />
          </div>
          <button
            className="text-primary text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/*  */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex gap-6 items-center mt-4 lg:mt-0`}
      >
        {menuItems.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <li key={label}>
              <Link
                href={href}
                className={`transition-all block ${
                  isActive
                    ? "text-primary font-semibold underline underline-offset-[6px]"
                    : "text-gray-500 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/contact"
          className="border border-primary text-primary px-4 py-1 rounded-full flex items-center gap-2 hover:bg-primary hover:text-white transition"
        >
          <FaPhoneAlt />
          Contact us
        </Link>
        <div>
          <FaCircleUser className="text-[30px] text-primary" />
        </div>
      </div>
    </nav>
  );
}
// className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full"
{
  /*  */
}
{
  // <nav className="mt-4 lg:flex lg:py-4 bg-white lg:items-center lg:px-6 lg:rounded-4xl lg:justify-between">
  /* <div>
        <span className="text-black">Move</span>
        <span className="text-primary font-semibold">Co</span>
      </div>
      <div>
        <ul className="flex gap-6">
          {menuItems.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`
                transition-all
                
                ${
                  isActive
                    ? "text-primary font-semibold underline underline-offset-[6px]"
                    : "text-gray-500 hover:text-primary"
                }
              `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="xl:flex xl:items-center gap-4">
        <div className="xl:flex xl:items-center">
          <div>
            <FaPhoneAlt className="text-primary" />
          </div>
          <div className="text-primary">Contact us</div>
        </div>
        <div>
          <FaCircleUser className="text-primary xl:text-[25px]" />
        </div>
      </div>
    </nav> */
}

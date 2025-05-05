import { FaStar } from "react-icons/fa";
import Image from "next/image";
import avartar1 from "../../../public/avatars/user1.png";

export default function SocialProofCard() {
  return (
    <div className="bg-[#305d52] flex lg:m-0 gap-4 text-white rounded-xl p-4 max-w-xs mx-auto mt-6">
      <div>
        <p className="text-3xl font-bold">5000+</p>
        <div className="flex -space-x-2 mt-3">
         
          <Image
            alt=""
            width={100}
            height={100}
            src={avartar1}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <Image
            alt=""
            width={100}
            height={100}
            src="/avatars/user2.png"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <Image
            alt=""
            width={100}
            height={100}
            src="/avatars/user3.png"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <Image
            alt=""
            width={100}
            height={100}
            src="/avatars/user4.png"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 my-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
        </div>
        <div className="text-left">
          <p className="text-lg font-medium">Valuable </p>
          <p className="text-lg font-medium">Customers </p>
        </div>
      </div>
    </div>
  );
}

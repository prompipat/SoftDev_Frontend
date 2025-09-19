import { useState } from "react";
import { Star, BadgeCheck, HandPlatter, Heart } from "lucide-react";
import { Badge } from "./badge";

function RestaurantCard({ onClick }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = (e) => {
    e.stopPropagation(); // Prevent card click when heart is clicked
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="flex flex-col gap-3 relative cursor-pointer hover:opacity-75 transition-opacity"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=224&h=220&fit=crop"
          alt="Thai Restaurant"
          className="rounded-md"
        />
        {/* Heart Toggle Button */}
        <button
          onClick={toggleHeart}
          className="absolute top-2 right-2 p-2 bg-white backdrop-blur-sm rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-110"
        >
          <Heart
            size={16}
            className={`transition-colors duration-200 ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-600 hover:text-red-400"
            }`}
          />
        </button>
      </div>
      <div className="flex flex-col gap-2 max-w-[224px]">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#101828] truncate overflow-hidden whitespace-nowrap">
            ข้าวมันไก่ลุงหนวด24ชม. - ถนนอ่อน
          </p>
          <div className="flex gap-5">
            <div className="flex gap-1 justify-center items-center">
              <Star size={20} className="text-yellow-400 fill-current"></Star>
              <p className="text-[#667085]">4.2</p>
            </div>
            <p className="text-[#98A2B3]">(18)</p>
          </div>

          <div className="flex gap-[6px]">
            <Badge
              variant="secondary"
              className="border py-[3px] px-2 border-[#EAECF0] bg-white text-xs font-medium flex gap-2"
            >
              <HandPlatter size={12} />
              จัดเลี้ยง
            </Badge>
            <Badge
              variant="secondary"
              className="border py-[3px] px-2 border-[#EAECF0] bg-white text-xs font-medium flex gap-2"
            >
              <HandPlatter size={12} />
              ซุ้มอาหาร
            </Badge>
          </div>
        </div>
      </div>

      {/* <div className="p-2 rounded-[100px] absolute bg-white top-3 right-3 border-2 border-[#F2F4F7]">
        <Heart size={16} className="text-[#98A2B3]"></Heart>
      </div> */}
    </div>
  );
}

export default RestaurantCard;

import { Star, BadgeCheck, HandPlatter } from "lucide-react";
import { Badge } from "./badge";

function RestaurantCard() {
  return (
    <div className="flex flex-col gap-3 relative">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=224&h=220&fit=crop"
        alt="Thai Restaurant"
        className="rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#101828]">
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
    </div>
  );
}

export default RestaurantCard;

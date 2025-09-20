import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ChevronDown } from "lucide-react";

function Cartbar() {
  return (
    <div className="flex max-w-[1184px] rounded-lg border border-[#D0D5DD] justify-between py-3 px-4 bg-[#F9FAFB] mt-8 mb-3">
      <div className="flex gap-20 max-w-[516px] w-full">
        <DropdownMenu className="max-w-[170px] w-full rounded-md border border-[#EAECF0]">
          <DropdownMenuTrigger className="flex items-center justify-between gap-2 px-3 text-sm font-semibold text-[#475467] bg-white hover:bg-gray-50 transition-colors min-w-[170px]">
            <span>ทั้งหมด</span>
            <ChevronDown className="h-4 w-4 text-[#667085]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="font-medium text-[#101828] p-[10px]">
              ทั้งหมด
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium text-[#101828] p-[10px]">
              รอร้านตอบรับ
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium text-[#101828] p-[10px]">
              ที่ต้องชำระ
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium text-[#101828] p-[10px]">
              กำลังจัดเตรียม
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium text-[#101828] p-[10px]">
              สำเร็จแล้ว
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium text-[#101828] p-[10px]">
              ยกเลิก
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-evenly w-[636px]">
        <p className="text-sm text-[#475467]">จำนวนท่าน/ที่</p>
        <p className="text-sm text-[#475467]">ยอดชำระทั้งหมด</p>
        <p className="text-sm text-[#475467]">ยอดชำระมัดจำ</p>
        <p className="text-sm text-[#475467]">แอคชั่น</p>
      </div>
    </div>
  );
}

export default Cartbar;

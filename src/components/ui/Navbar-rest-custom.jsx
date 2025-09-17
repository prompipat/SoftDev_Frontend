import Logo from "./Logo";
import { ChevronDown } from "lucide-react";

function NavbarRestCustom(){
    return (
        <div className="w-[240px] h-auto bg-[#F9FAFB] shadow-[inset_-24px_0_60px_rgba(0,0,0,0.03)]">
            {/* Logo wrap */}
            <div className="flex justify-center items-center pt-[19px] pb-[19px]">
                <Logo className="w-[32px] h-[32px]"/>
                <h1 className="logo font-[700] pl-[16px] tracking-tight">CaterLink</h1>
            </div>

            {/* Content */}
            <div className="pl-[36px] text-[14px]">
                <a href="#"><p className="pt-[13.5px] pb-[13.5px]">คำสั่งซื้อ</p></a>
                <a href="#"><p className="pt-[13.5px] pb-[13.5px]">จัดการแพคเกจ</p></a>
                <a href="#"><p className="pt-[13.5px] pb-[13.5px]">จัดการโปรโมชัน</p></a>
                <a href="#"><p className="pt-[13.5px] pb-[13.5px]">บทความ</p></a>
                <a href="#"><p className="pt-[13.5px] pb-[13.5px]">จัดการร้านค้า</p></a>
            </div>

            {/* Profile (Frame 154) */}
            <div className="flex fixed w-[212px] h-[48px] ml-[14px] mr-[14px] gap-[8px] justify-center items-center bottom-[32px] bg-white rounded-[12px] border-[#F2F4F7] border-[1px]">
                <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className="w-[32px] h-[32px] rounded-[50%]"
                />
                <p className="font-[14px]">บวรเดช เอกอักครา</p>
                <ChevronDown className="text-[#F78E1E] w-[24px] h-[24px]" />
            </div>
        </div>
    );
}

export default NavbarRestCustom;
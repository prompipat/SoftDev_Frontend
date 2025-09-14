import React from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ChevronDown } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

function NavbarCustom() {
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const navItems = [
  //     { path: "/", label: "หน้าแรก", name: "home" },
  //     { path: "/customerhomepage", label: "หน้าลูกค้า", name: "customer" },
  //     { path: "/about", label: "เกี่ยวกับเรา", name: "about" },
  //     { path: "/contact", label: "ติดต่อเรา", name: "contact" },
  //   ];

  //   const handleNavigation = (path) => {
  //     navigate(path);
  //   };

  return (
    <nav className="w-full h-fit flex flex-col py-5 gap-4 bg-white shadow-[0_2px_8px_0px_#0000001A]">
      {/* Top */}
      <div className="flex justify-between items-center px-32">
        <div className="flex items-center pr-2 gap-4">
          <img
            src="https://github.com/shadcn.png"
            alt=""
            className="w-[32px]"
          />
          <h1 className="logo">CaterLink</h1>
        </div>

        <div className="flex gap-6">
          <div className="flex rounded-md border relative">
            <input
              type="text"
              placeholder="ค้นหาร้านจัดเลี้ยง"
              className="h-auto w-[647px] px-4 py-[10px] rounded-l-md gap-[10px] font-semibold"
            />
            <button className="bg-gradient rounded-md p-[10px] gap-[10px]">
              <Search className="text-white" />
            </button>
          </div>

          <button className="p-2 border-2 rounded-md border-[#FF8A00]">
            <ShoppingCart className="text-[#FF8A00]" />
          </button>
        </div>

        <div className="flex gap-2">
          <button className="py-[10px] px-4">
            <p className="text-[#475467] font-semibold">ลงชื่อเข้าใช้</p>
          </button>
          <button className="p-3 border-none rounded-md bg-gradient">
            <p className="text-white font-semibold">เข้าสู่ระบบ</p>
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="flex px-32 gap-8 justify-center items-center">
        <button>
          <p className="text-gradient font-semibold">หน้าหลัก</p>
        </button>
        <button>
          <p className="text-[#475467] font-semibold">ร้านค้า</p>
        </button>
        <button className="flex items-center gap-1 text-[#475467]">
          <p className="text-[#475467] font-semibold">หมวดหมู่ร้านค้า</p>
          <ChevronDown />
        </button>
        <button>
          <p className="text-[#475467] font-semibold">เปรียบเทียบ</p>
        </button>
        <button>
          <p className="text-[#475467] font-semibold">วางแผนงานเลี้ยง</p>
        </button>
        <button>
          <p className="text-[#475467] font-semibold">บทความ</p>
        </button>
      </div>
    </nav>
  );
}

export default NavbarCustom;

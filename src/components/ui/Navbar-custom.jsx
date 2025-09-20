import React, { useState } from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
// import { useNavigate, useLocation } from "react-router-dom";

function NavbarCustom() {
  // Mock user login state - you can replace this with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png", // Replace with actual user avatar
  };
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
          <Logo />
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
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#E9580A]"
            >
              <path
                d="M6.50014 17H17.3294C18.2793 17 18.7543 17 19.1414 16.8284C19.4827 16.6771 19.7748 16.4333 19.9847 16.1246C20.2228 15.7744 20.3078 15.3071 20.4777 14.3724L21.8285 6.94311C21.8874 6.61918 21.9169 6.45721 21.8714 6.33074C21.8315 6.21979 21.7536 6.12651 21.6516 6.06739C21.5353 6 21.3707 6 21.0414 6H5.00014M2 2H3.3164C3.55909 2 3.68044 2 3.77858 2.04433C3.86507 2.0834 3.93867 2.14628 3.99075 2.22563C4.04984 2.31565 4.06876 2.43551 4.10662 2.67523L6.89338 20.3248C6.93124 20.5645 6.95016 20.6843 7.00925 20.7744C7.06133 20.8537 7.13493 20.9166 7.22142 20.9557C7.31956 21 7.44091 21 7.6836 21H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-2">
          {isLoggedIn ? (
            // User Avatar Profile
            <div className="flex items-center gap-2">
              <Avatar className="w-11 h-11 cursor-pointer hover:ring-2 hover:ring-[#FF8A00] hover:ring-offset-2 transition-all">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-[#FF8A00] text-white font-semibold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Test button to logout - remove in production */}
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          ) : (
            // Login Buttons
            <>
              <button
                className="py-[10px] px-4"
                onClick={() => setIsLoggedIn(true)} // Test login - replace with actual login logic
              >
                <p className="text-[#475467] font-semibold">ลงชื่อเข้าใช้</p>
              </button>
              <button className="p-3 border-none rounded-md bg-gradient">
                <p className="text-white font-semibold">เข้าสู่ระบบ</p>
              </button>
            </>
          )}
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

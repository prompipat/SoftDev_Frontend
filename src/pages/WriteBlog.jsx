import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import NavbarRestCustom from "../components/ui/Navbar-rest-custom";

function WriteBlog() {

  return (
    <>
      {/*หน้าเขียน Blog*/}
      <div className="flex flex-row">
          <NavbarRestCustom />
          {/* Container */}
          <div className="w-[1200px] h-[100vh] bg-[#F9FAFB]">
            {/* Header Navigation */}
            <div className="flex flex-col w-auto h-[63px] pl-[calc(50%-552px)] justify-center bg-green-200 mb-[32px]">
                <p className="font-[24px] font-semibold">สร้างบทความทั่วไป</p>{/*semibold=600*/}
            </div>

            {/* Content */}
            <div className="flex flex-col w-auto h-[1006px] items-center bg-green-200 mb-[32px]">
                {/* Table */}
                <div className="grid justify-center items-center border-[1px] border-[#F2F4F7] rounded-[24px] w-[1104px] h-[934px] bg-white">
                    {/* Content (Blog Infomation) */}
                    <div className="flex gap-[32px] w-[1056px] h-[404px] bg-green-200">
                        <p className="font-[14px]">ข้อมูลบทความ</p>
                        {/* Input Field */}
                        
                    </div>

                    {/* Content (Blog Category) */}
                    <div className=" pt-[24px] pb-[65px] w-[1056px] h-[166px] bg-green-200">

                    </div>

                    {/* Content (Blog Category) */}
                    <div className="pt-[24px] w-[1056px] h-[153px] bg-green-200">

                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default WriteBlog;

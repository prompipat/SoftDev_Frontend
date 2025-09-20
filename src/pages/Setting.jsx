import axios from "axios";
import { useState } from "react";

import UserAccount from "../subpages/setting/UserAccount";

import NavbarRestCustom from "../components/ui/Navbar-rest-custom";

const subpages = [
    {label: 'ข้อมูลบัญชีผู้ใช้',Content: <UserAccount />}
]

function Setting() {
    const [Tabindex,setTabindex] = useState(0);

return (
    <>
      {/*หน้าเขียน Blog*/}
      <div className="flex flex-row">
          <NavbarRestCustom />
          {/* Container */}
          <div className="w-[1200px] h-auto bg-[#F9FAFB]">
            {/* Header Navigation */}
            <div className="flex flex-col w-auto h-[63px] pl-[calc(50%-552px)] justify-center mb-[32px]">
                <p className="text-[24px] font-[600]">จัดการร้านค้า</p>
            </div>

            {/* Tab */}
            <div className="flex gap-[10px] ml-[calc(50%-520px)] mr-[calc(50%-520px)] mb-[24px] border-b">
                    {subpages.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setTabindex(index)}
                        className={`pt-[8.5px] pb-[8.5px] ${
                        Tabindex === index
                            ? 'border-b-[2px] border-black font-semibold'
                            : 'text-black'
                        } hover:cursor-pointer `}
                    >
                        {tab.label}
                    </button>
                    ))}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[24px] w-auto h-[1145px] items-center mb-[32px]">
                {subpages[Tabindex].Content}
            </div>
          </div>
      </div>
    </>
  );
}

export default Setting;

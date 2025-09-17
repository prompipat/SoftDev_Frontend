import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import Logo from "../components/ui/Logo";

function Signup() {
  const regData = useState({
    fname:"",
    lname:"",
    email:"",
    passwd:""
  })

  const handleReg = () => {
    //when click register
  }

  return (
    <>
      {/*หน้าลงทะเบียน*/}
      <div className="flex justify-center">
          {/* Container */}
          <div className="flex justify-center w-[1280px] h-[602px] mt-[96px]">
            {/* Content (outer) */}
            <div className="w-[360px] h-[602px]">

              {/* header */}
              <div className="flex flex-col items-center">
                <Logo className="w-[48px] h-[48px]" />
                <h2 className="mt-[24px]">สร้างบัญชีร้านค้า</h2>
              </div>

              {/* form */}
              <form className="grid gap-[20px] mt-[32px] mb-[24px]">
                <div className="grid h-fit gap-[6px]">
                  <label><p>ชื่อ*</p></label>
                  <input 
                    type="text"
                    id="fname"
                    value={regData.fname}
                    placeholder="เพิ่มชื่อ"
                    className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                  />
                </div>

                <div className="grid h-fit gap-[6px]">
                  <label><p>นามสกุล*</p></label>
                  <input 
                    type="text"
                    id="lname"
                    value={regData.lname}
                    placeholder="เพิ่มนามสกุล"
                    className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                  />
                </div>
                <div className="grid h-fit gap-[6px]">
                  <label><p>Email*</p></label>
                  <input 
                    type="email"
                    id="email"
                    value={regData.email}
                    placeholder="เพิ่ม Email"
                    className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                  />
                </div>

                <div className="grid h-fit gap-[6px]">
                  <label><p>Password*</p></label>
                  <input 
                    type="password"
                    id="passwd"
                    value={regData.passwd}
                    placeholder="Create a password"
                    className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                  />
                </div>
              </form>

              {/* action */}
              <Button onClick={handleReg} className="w-[100%] bg-[#FF8A00] rounded-full">สร้างบัญชี</Button>

              {/* row */}
              <div className="flex justify-center gap-[5px] mt-[32px]">
                <p>มีบัญชีแล้ว ?</p>
                <a href="./login"><p className="font-bold text-[#FF8A00]">เข้าสู่ระบบ</p></a>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Signup;

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import Logo from "../components/ui/Logo";

function Login() {
  const loginData = useState({
    email:"",
    passwd:""
  })

  const handleLogin = () => {
    //when click Login
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
                <h2 className="mt-[24px]">เข้าสู่ระบบร้านค้า</h2>
              </div>

              {/* form */}
              <form className="grid gap-[6px] mt-[32px] mb-[24px]">
                <label><p>Email*</p></label>
                <input 
                  type="email"
                  id="email"
                  value={loginData.email}
                  placeholder="เพิ่ม Email"
                  className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                />
                <label><p>Password*</p></label>
                <input 
                  type="password"
                  id="passwd"
                  value={loginData.passwd}
                  placeholder="Input password"
                  className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                />
              </form>

              {/* action */}
              <Button onClick={handleLogin} className="w-[100%] bg-[#FF8A00] rounded-full">เข้าสู่ระบบ</Button>

              {/* row */}
              <div className="flex justify-center gap-[5px] mt-[32px]">
                <p>ยังไม่มีบัญชี ?</p>
                <a href="./register"><p className="font-bold text-[#FF8A00]">สร้างบัญชีใหม่</p></a>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Login;

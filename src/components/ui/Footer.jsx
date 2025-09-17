import { Button } from "@headlessui/react";

function Footer() {
  return (
    <div className="w-full h-fit py-8 flex flex-col gap-10 border border-[#EAECF0]">
      <div className="flex flex-col px-8 gap-8 justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <img
            src="https://github.com/shadcn.png"
            alt=""
            className="max-w-8 "
          />
          <h1 className="logo">CaterLink</h1>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-[#101828]">
            เป็นพาร์ทเนอร์กับเราเพื่อโปรโมทร้านค้า
          </h1>
          <p className="text-xl text-[#667085]">
            ให้ร้านค้าสร้างรายได้จากงานอีเวนท์ต่าง ๆ ได้มากยิ่งขึ้น
          </p>
        </div>

        <Button className="bg-gradient rounded-lg py-3 px-8 text-white w-fit text-xl font-bold">
          สนใจโปรโมทร้านค้า
        </Button>
      </div>

      <div className="flex px-20 gap-8 justify-start">
        <div className="border-t w-full border-[#D0D5DD] pt-8 flex gap-8">
          <p className="text-[#475467]">
            © 2077 CaterLink. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p className="text-[#475467]">Terms</p>
            <p className="text-[#475467]">Privacy</p>
            <p className="text-[#475467]">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

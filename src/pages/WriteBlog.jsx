import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import NavbarRestCustom from "../components/ui/Navbar-rest-custom";

function WriteBlog() {

  const [Payload,setPayload] = useState({
    restaurant:"",
    timestamp:"",
    title:"",
    imgurl:"",
    category:"",
    type:"",
    detail:""
  })

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
                    <div className="flex w-[1056px] h-[404px] bg-green-200">
                        <p className="font-[14px] w-[312px]">ข้อมูลบทความ</p>
                        {/* Input Field */}
                        <form className="grid w-[356px] gap-[6px] mb-[24px]">
                            <label><p className="flex">ร้านค้า<p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <select id="restaurants" className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>

                            <label><p className="flex">วันที่เผยแพร่ <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <input 
                            type="date"
                            id="timestamp"
                            value={Payload.timestamp}
                            placeholder="เลือกข้อมูล"
                            className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                            />
                            <label><p className="flex">หัวข้อบทความ <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <input 
                            type="text"
                            id="title"
                            value={Payload.title}
                            placeholder="กรุณาระบุ"
                            className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                            />
                            <label><p className="flex">รูปปกบทความ <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <input 
                            type="file"
                            id="img"
                            value={Payload.imgurl}
                            className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                            />
                        </form>
                    </div>

                    {/* Content (Blog Category) */}
                    <div className="flex w-[1056px] h-[166px] bg-green-200">
                        <p className="font-[14px] w-[312px]">
                            หมวดหมู่ <br/>
                            เลือกได้มากกว่า 1 ข้อ
                        </p>
                        {/* Input Field */}
                        <form className="grid w-[356px] gap-[6px] mb-[24px]">
                            <label><p className="flex">หมวดหมู่หลัก<p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <select id="category" className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>

                            <label><p className="flex">ประเภทงานอีเวนต์ <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <select id="type" className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>

                        </form>
                    </div>

                    {/* Content (Blog Category) */}
                    <div className="flex w-[1056px] h-[153px] bg-green-200">
                        <p className="font-[14px] w-[312px]">เนื้อหาบทความ</p>
                        {/* Input Field */}
                        <form className="grid w-[356px]">
                            <label className="h-fit"><p className="flex">เนื้อหา <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <input 
                            type="textarea"
                            id="detail"
                            value={Payload.detail}
                            placeholder="กรุณากรอกข้อมูล"
                            className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                            />
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default WriteBlog;

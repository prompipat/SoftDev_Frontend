import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown,CloudUpload } from "lucide-react";

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
          <div className="w-[1200px] h-auto bg-[#F9FAFB]">
            {/* Header Navigation */}
            <div className="flex flex-col w-auto h-[63px] pl-[calc(50%-552px)] justify-center mb-[32px]">
                <p className="text-[24px] font-[600]">สร้างบทความทั่วไป</p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[24px] w-auto h-[1006px] items-center mb-[32px]">
                {/* Table */}
                <div className="grid justify-center items-center border-[1px] border-[#F2F4F7] rounded-[24px] w-[1104px] h-[934px] bg-white">
                    {/* Content (Blog Infomation) */}
                    <div className="flex w-[1056px] h-[404px]">
                        <p className="text-[14px] font-[600] w-[312px]">ข้อมูลบทความ</p>
                        {/* Input Field */}
                        <form className="grid w-[512px] gap-[16px]">
                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">ร้านค้า<p className="text-[#F78E1E] pl-[3px]">*</p></p></label>
                                <div className="relative">
                                    <select id="restaurants" className="appearance-none w-[512px] h-[48px] pl-[14px] pr-[42px] pt-[12px] pb-[12px] border-[1px] border-[#D0D5DD] rounded-md">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <ChevronDown className="w-[20px] h-[20px] text-[#86878A]" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">วันที่เผยแพร่ <p className="text-[#F78E1E] pl-[3px]">*</p></p></label>
                                <input 
                                type="date"
                                id="timestamp"
                                value={Payload.timestamp}
                                placeholder="เลือกข้อมูล"
                                className="appearance-none h-[48px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>


                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">หัวข้อบทความ <p className="text-[#F78E1E] pl-[3px]">*</p></p></label>
                                <input 
                                type="text"
                                id="title"
                                value={Payload.title}
                                placeholder="กรุณาระบุ"
                                className="h-[48px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>

                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">รูปปกบทความ <p className="text-[#F78E1E] pl-[3px]">*</p></p></label>
                                <div className="relative">
                                     <input 
                                        type="file"
                                        accept=".jpg,.jpeg,.png"
                                        id="img"
                                        value={Payload.imgurl}
                                        className="hidden w-[512px] h-[104px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                    />
                                    <label
                                    htmlFor="img"
                                    class="flex flex-col items-center gap-[12px] w-[512px] h-[104px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                    >
                                    <div className="flex w-[40px] h-[40px] justify-center items-center shadow-sm border-[1px] border-[#EAECF0] rounded-[8px]">
                                        <CloudUpload className="h-fit w-[20px] h-[20px]"/>
                                    </div>
                                    <div className="flex gap-[4px] text-[14px]">
                                        <p className="cursor-pointer text-[#F78E1E] font-[600]">คลิกเพื่ออัพโหลด</p>
                                        <p>หรือลากและวางไฟล์</p>
                                    </div>
                                </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    {/* Divider */}
                    <div className="w-[1056px] h-[0.5px] bg-[#EAECF0]"></div>

                    {/* Content (Blog Category) */}
                    <div className="flex w-[1056px] h-[166px]">
                        <div className="grid text-[14px] w-[312px] h-fit">
                            <p className="font-[600]">หมวดหมู่</p>
                            <p>เลือกได้มากกว่า 1 ข้อ</p>
                        </div>
                        {/* Input Field */}
                        <form className="grid w-[512px] gap-[6px]">
                            <label><p className="flex h-[21px] text-[14px]">หมวดหมู่หลัก<p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <div className="relative">
                                <select id="category" className="appearance-none w-[512px] h-[48px] pl-[14px] pr-[42px] pt-[12px] pb-[12px] border-[1px] border-[#D0D5DD] rounded-md">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <ChevronDown className="w-[20px] h-[20px] text-[#86878A]" />
                                </div>
                            </div>

                            <label><p className="flex h-[21px] text-[14px]">ประเภทงานอีเวนต์ <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                            <div className="relative">
                                <select id="type" className="appearance-none w-[512px] h-[48px] pl-[14px] pr-[42px] pt-[12px] pb-[12px] border-[1px] border-[#D0D5DD] rounded-md">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <ChevronDown className="w-[20px] h-[20px] text-[#86878A]" />
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Divider */}
                    <div className="w-[1056px] h-[1px] bg-[#EAECF0]"></div>

                    {/* Content (Blog Detail) */}
                    <div className="flex w-[1056px] h-[153px]">
                        <p className="text-[14px] w-[312px] font-[600]">เนื้อหาบทความ</p>
                        {/* Input Field */}
                        <form className="grid w-[512px]">
                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">เนื้อหา <p className="text-[#F78E1E] pl-[4px]">*</p></p></label>
                                <textarea
                                id="detail"
                                placeholder="กรุณากรอกข้อมูล"
                                className="resize-none h-[126px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Divider */}
                    <div className="w-[1056px] h-[1px] bg-[#EAECF0]"></div>
                </div>

                {/* Action */}
                <div className="flex items-center gap-[642px] w-[1104px] h-[48px]">
                    {/* Left */}
                    <Button className="w-[150px] h-[48px] bg-transparent text-[#F78E1E] text-[16px] shadow-none hover:bg-transparent"><span className="hover:bg-transparent cursor-pointer transition">ยกเลิก</span></Button>

                    {/* Right */}
                    <div className="flex gap-[12px]">
                        <Button className="w-[150px] h-[48px] rounded-[10000px] text-[#F78E1E] text-[16px] bg-transparent border-[1px] border-[#F78E1E] hover:bg-transparent cursor-pointer transition">บันทึกร่าง</Button>
                        <Button className="w-[150px] h-[48px] rounded-[10000px] text-[16px] bg-[#F78E1E] hover:cursor-pointer transition">บันทึก</Button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default WriteBlog

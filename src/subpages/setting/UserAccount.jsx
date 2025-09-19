import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";
import { ChevronDown,CloudUpload } from "lucide-react";

const mainctg = [
    {label: 'จัดเลี้ยง',icon:<CloudUpload />,value: "TEST1",detail:"Buffet, ซุ้มอาหาร, Cocktail, Coffee Break"},
    {label: 'จัดเลี้ยง',icon:<CloudUpload />,value: "TEST2",detail:"Buffet, ซุ้มอาหาร, Cocktail, Coffee Break"},
    {label: 'จัดเลี้ยง',icon:<CloudUpload />,value: "TEST3",detail:"Buffet, ซุ้มอาหาร, Cocktail, Coffee Break"}
]

function UserAccount() {
    const [Mainindex,setMainindex] = useState(null)

    const [Payload,setPayload] = useState({
        restaurant:"อร่อยดีมีชัย",
        vatid:"1000010000100010",
        address:"ซอย วิภาวดีรังสิต 3 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
        zone:"กรุงเทพ",
        category:"",
        type:"",
        detail:""
    })

    return (
        <>
            {/* Table */}
                <div className="grid justify-center items-center border-[1px] border-[#F2F4F7] rounded-[24px] w-[1104px] h-[934px] bg-white">
                    {/* Content (Restaurant Infomation) */}
                    <div className="flex w-[1056px] h-[426px]">
                        <p className="text-[14px] font-[600] w-[312px]">ข้อมูลร้านค้า</p>
                        {/* Input Field */}
                        <form className="grid w-[512px] gap-[16px]">
                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">ชื่อบริษัทหรือร้านค้า</p></label>
                                <input 
                                type="text"
                                id="restaurant"
                                value={Payload.restaurant}
                                placeholder="กรุณาระบุ"
                                className="h-[48px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>

                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">เลขประจำตัวผู้เสียภาษี</p></label>
                                <input 
                                type="text"
                                id="vatid"
                                value={Payload.vatid}
                                placeholder="กรุณาระบุ"
                                className="h-[48px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>

                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">สถานที่ตั้งบริษัทหรือร้านค้า</p></label>
                                <textarea
                                id="address"
                                value={Payload.address}
                                placeholder="กรุณากรอกข้อมูล"
                                className="resize-none h-[126px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>

                            <div className="grid h-fit gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px]">สถานที่รับจัด</p></label>
                                <input 
                                type="text"
                                id="zone"
                                value={Payload.zone}
                                placeholder="กรุณาระบุ"
                                className="h-[48px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                                />
                            </div>

                            
                        </form>
                    </div>
                    
                    {/* Divider */}
                    <div className="w-[1056px] h-[0.5px] bg-[#EAECF0]"></div>

                    {/* Content (Restaurant Type) */}
                    <div className="flex w-[1056px] h-[166px]">
                        <div className="grid text-[14px] w-[312px] h-fit">
                            <p className="font-[600]">ประเภทร้านค้า</p>
                            <p>เลือกได้มากกว่า 1 ข้อ</p>
                        </div>
                        {/* Input Field */}
                        <form className="grid w-[270px] gap-[6px]">
                            <label><p className="flex h-[21px] text-[14px]">หมวดหมู่หลัก</p></label>
                            {mainctg.map((content, index) => (
                            <div className="flex items-center gap-[10px]">
                                <div
                                key={index}
                                onClick={() => setMainindex(index)}
                                className={`flex w-fit gap-[6px] p-[8px] border-[1px] border-[#F2F4F7] rounded-[8px] ${
                                Mainindex === index
                                    ? 'border-black font-semibold'
                                    : 'text-black'
                                } hover:cursor-pointer `}
                                >
                                    {content.icon}<p>{content.label}</p>
                                </div>
                                <p>{content.detail}</p>
                            </div>
                            ))}

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
                    <div className="flex w-[1056px] h-[166px]">
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
        </>
    )
}

export default UserAccount;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye,EyeOff,HandPlatter,Inbox,UtensilsCrossed } from "lucide-react";

const mainctgs = [
    {label: 'จัดเลี้ยง',icon:<HandPlatter className="w-[12px] h-[12px] text-[#F78E1E]"/>,value: "TEST1",detail:"Buffet, ซุ้มอาหาร, Cocktail, Coffee Break"},
    {label: 'snackbox',icon:<Inbox className="w-[12px] h-[12px] text-[#F78E1E]"/>,value: "TEST2",detail:"Mealbox, Bakery SnackBox, Variety SnackBox"},
    {label: 'ซุ้มอาหาร',icon:<UtensilsCrossed className="w-[12px] h-[12px] text-[#F78E1E]"/>,value: "TEST3",detail:"ตั้งโต๊ะ, รถเข็น, ซุ้มอาหาร, Food Truck"}
]

const eventtypes = [
    {label: "งานเลี้ยงองค์กร", value:"TEST1"},
    {label: "งานประชุม/สัมมนา", value:"TEST2"},
    {label: "งานปาร์ตี้", value:"TEST3"}
]

const foodtypes = [
    {label: "อาหารคาว", value:"TEST1"},
    {label: "ขนมและของหวาน", value:"TEST2"},
    {label: "เครื่องดื่ม", value:"TEST3"},
    {label: "อาหารไทย", value:"TEST4"},
    {label: "อาหารจีน", value:"TEST5"},
    {label: "อาหารญี่ปุ่น", value:"TEST6"}
]

function UserAccount() {
    const [Mainindex,setMainindex] = useState(null)
    const [Eventindex,setEventindex] = useState(null)
    const [Foodindex,setFoodindex] = useState(null)

    const [Visible,setVisible] = useState(0)

    const [Payload,setPayload] = useState({
        restaurant:"อร่อยดีมีชัย",
        vatid:"1000010000100010",
        address:"ซอย วิภาวดีรังสิต 3 แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900",
        zone:"กรุงเทพ",
        mainctg:"",
        eventtype:"",
        foodtype:"",
        email:"Nongnuy@ahhroi.com",
        passwd:"dffdfdfdfdf"
    })

    return (
        <>
            {/* Table */}
                <div className="grid justify-center items-center border-[1px] border-[#F2F4F7] rounded-[24px] w-[1104px] h-[1073px] bg-white">
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
                    <div className="flex w-[1056px] h-[270px]">
                        <div className="grid w-[312px] h-fit">
                            <p className="font-[600] text-[14px]">ประเภทร้านค้า</p>
                            <p className="text-[14px]">เลือกได้มากกว่า 1 ข้อ</p>
                        </div>
                        {/* Input Field */}
                        <form className="grid w-[512px] gap-[24px]">
                            <div className="grid gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px] text-[Colors/Tertiary/500] font-[500]">หมวดหมู่หลัก</p></label>
                                <div className="grid gap-[8px]">
                                    {mainctgs.map((content, index) => (
                                <div className="flex items-center gap-[10px]">
                                    <div
                                        key={index}
                                        onClick={() => setMainindex(index)}
                                        className={`flex w-fit h-[25px] gap-[6px] items-center pl-[8px] pr-[8px] border-[1px] border-[#F2F4F7] rounded-[8px] ${
                                        Mainindex === index
                                            ? 'border-black border-[2px]'
                                            : 'text-black'
                                        } hover:cursor-pointer `}
                                        >
                                            {content.icon}<p className="text-[12px] font-[500]">{content.label}</p>
                                        </div>
                                        <p className="text-[12px]">{content.detail}</p>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px] text-[Colors/Tertiary/500] font-[500]">ประเภทงานอีเวนต์</p></label>
                                <div className="flex gap-[6px] text-[12px] font-[500]">
                                    {eventtypes.map((content, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setEventindex(index)}
                                        className={`h-[25px] pt-[3.3px] pl-[8px] pr-[8px] border-[1px] border-[#F2F4F7] rounded-[8px] ${
                                        Eventindex === index
                                            ? 'border-black border-[2px]'
                                            : 'text-black'
                                        } hover:cursor-pointer `}
                                    >
                                        {content.label}
                                    </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-[6px]">
                                <label><p className="flex h-[21px] text-[14px] text-[Colors/Tertiary/500] font-[500]">ประเภทอาหาร</p></label>
                                <div className="flex gap-[6px] text-[12px] font-[500]">
                                    {foodtypes.map((content, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setFoodindex(index)}
                                        className={`h-[25px] pt-[3.3px] pl-[8px] pr-[8px] border-[1px] border-[#F2F4F7] rounded-[8px] ${
                                        Foodindex === index
                                            ? 'border-black border-[2px]'
                                            : 'text-black'
                                        } hover:cursor-pointer `}
                                    >
                                        {content.label}
                                    </div>
                                    ))}
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Divider */}
                    <div className="w-[1056px] h-[1px] bg-[#EAECF0]"></div>

                    {/* Content (Blog Detail) */}
                    <div className="flex w-[1056px] h-[166px]">
                        <p className="text-[14px] w-[312px] font-[600]">ข้อมูลผู้ใช้งาน</p>
                        {/* Input Field */}
                        <form className="grid gap-[20px] w-[512px]">
                            <div className="grid h-fit gap-[6px]">
                            <label><p className="text-[14px] text-[Colors/Tertiary/500] font-[500]">Username / Email</p></label>
                            <input 
                                type="email"
                                id="email"
                                value={Payload.email}
                                placeholder="เพิ่ม Email"
                                className="pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md"
                            />
                            </div>

                            <div className="grid h-fit gap-[6px]">
                                <label><p className="text-[14px] text-[Colors/Tertiary/500] font-[500]">Password</p></label>
                                <div className="relative">
                                    <input 
                                        type={Visible ? "text" : "password"}
                                        id="passwd"
                                        value={Payload.passwd}
                                        placeholder="Input password"
                                        className="w-[512px] pl-[14px] pr-[14px] pt-[10px] pb-[10px] border-[1px] border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {Visible ? <Eye className="absolute text-[#F78E1E] w-[16px] h-[16px] right-[14px] top-1/2 -translate-y-1/2 hover:cursor-pointer" onClick={() => setVisible(!Visible)}/> : <EyeOff className="absolute text-[#F78E1E] w-[16px] h-[16px] right-[14px] top-1/2 -translate-y-1/2 hover:cursor-pointer" onClick={() => setVisible(!Visible)}/>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Action */}
                <div className="flex items-center gap-[642px] w-[1104px] h-[48px]">
                    {/* Right */}
                    <div className="flex gap-[12px] ml-[792px]">
                        <Button className="w-[150px] h-[48px] rounded-[10000px] text-[#F78E1E] text-[16px] bg-transparent border-[1px] border-[#F78E1E] hover:bg-transparent cursor-pointer transition">ยกเลิก</Button>
                        <Button className="w-[150px] h-[48px] rounded-[10000px] text-[16px] bg-[#F78E1E] hover:cursor-pointer transition">สร้างร้านค้า</Button>
                    </div>
                </div>
        </>
    )
}

export default UserAccount;

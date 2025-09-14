import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

function FilterCustom() {
  const [selectedEventType, setSelectedEventType] = useState("รูปแบบงาน");
  const [selectedCateringType, setSelectedCateringType] =
    useState("การจัดเลี้ยง");
  const [selectedCuisine, setSelectedCuisine] = useState("ประเภทอาหาร");

  return (
    <div className="flex flex-col gap-6 justify-center items-center py-8">
      <h1>ค้นหาร้านจัดเลี้ยงที่ตรงใจคุณ</h1>

      <div className="flex flex-col gap-4">
        <div className="flex rounded-md border relative">
          <input
            type="text"
            placeholder="ค้นหาร้านจัดเลี้ยงด้วยชื่อ"
            className="h-auto w-[647px] px-4 py-[10px] rounded-l-md gap-[10px] font-semibold"
          />
          <button className="bg-gradient rounded-md p-[10px] gap-[10px]">
            <Search className="text-white" />
          </button>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          {/* Event Type Filter - รูปแบบงาน */}
          <div className="relative">
            <select
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-3 pr-10 text-[#7D7B7B] font-medium hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-[150px]"
            >
              <option disabled>รูปแบบงาน</option>
              <option value="งานแต่งงาน">งานแต่งงาน</option>
              <option value="งานเลี้ยงรับรอง">งานเลี้ยงรับรอง</option>
              <option value="งานเลี้ยงสังสรรค์">งานเลี้ยงสังสรรค์</option>
              <option value="งานเลี้ยงปีใหม่">งานเลี้ยงปีใหม่</option>
              <option value="งานสัมมนา">งานสัมมนา</option>
              <option value="งานประชุม">งานประชุม</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7D7B7B] font-medium pointer-events-none" />
          </div>

          {/* Catering Type Filter - การจัดเลี้ยง */}
          <div className="relative">
            <select
              value={selectedCateringType}
              onChange={(e) => setSelectedCateringType(e.target.value)}
              className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-3 pr-10 text-[#7D7B7B] font-medium hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-[150px]"
            >
              <option disabled>การจัดเลี้ยง</option>
              <option value="จัดเลี้ยงนอกสถานที่">จัดเลี้ยงนอกสถานที่</option>
              <option value="จัดเลี้ยงในร้าน">จัดเลี้ยงในร้าน</option>
              <option value="บุฟเฟ่ต์">บุฟเฟ่ต์</option>
              <option value="เซ็ตเมนู">เซ็ตเมนู</option>
              <option value="อาหารกล่อง">อาหารกล่อง</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7D7B7B] font-medium pointer-events-none" />
          </div>

          {/* Cuisine Type Filter - ประเภทอาหาร */}
          <div className="relative">
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-3 pr-10 text-[#7D7B7B] font-medium hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-[150px]"
            >
              <option disabled>ประเภทอาหาร</option>
              <option value="อาหารไทย">อาหารไทย</option>
              <option value="อาหารจีน">อาหารจีน</option>
              <option value="อาหารญี่ปุ่น">อาหารญี่ปุ่น</option>
              <option value="อาหารเกาหลี">อาหารเกาหลี</option>
              <option value="อาหารยุโรป">อาหารยุโรป</option>
              <option value="อาหารทะเล">อาหารทะเล</option>
              <option value="อาหารเจ">อาหารเจ</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7D7B7B] font-medium pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCustom;

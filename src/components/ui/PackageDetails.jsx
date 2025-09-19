import { Star, BadgeCheck, HandPlatter, Heart } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { useState } from "react";

function PackageDetails({ onClose, onShowReservation }) {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const handleSelectPackage = () => {
    const selected = packageOptions[selectedPackage];
    onShowReservation(selected);
  };

  const packageOptions = [
    {
      guests: 100,
      price: 290,
      description:
        "รายการอาหาร 6 อย่าง ฟรีน้ำดื่ม, ข้าวหอมมะลิ, ของหวาน/ผลไม้รวม, จำนวนอาหารรวมทั้งหมด 8-10 รายการ",
    },
    {
      guests: 70,
      price: 290,
      description:
        "รายการอาหาร 6 อย่าง ฟรีน้ำดื่ม, ข้าวหอมมะลิ, ของหวาน/ผลไม้รวม, จำนวนอาหารรวมทั้งหมด 8-10 รายการ",
    },
    {
      guests: 50,
      price: 290,
      description:
        "รายการอาหาร 6 อย่าง ฟรีน้ำดื่ม, ข้าวหอมมะลิ, ของหวาน/ผลไม้รวม, จำนวนอาหารรวมทั้งหมด 8-10 รายการ",
    },
    {
      guests: 30,
      price: 290,
      description:
        "รายการอาหาร 6 อย่าง ฟรีน้ำดื่ม, ข้าวหอมมะลิ, ของหวาน/ผลไม้รวม, จำนวนอาหารรวมทั้งหมด 8-10 รายการ",
    },
  ];

  const PackageOption = ({ option, index, isSelected, onSelect }) => (
    <div
      className={`flex gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-[#FF8A00] bg-[#FF8A00]/5 shadow-lg shadow-[#FF8A00]/20"
          : "border-gray-200 bg-white hover:border-[#FF8A00]/50 hover:bg-[#FF8A00]/5"
      }`}
      onClick={() => onSelect(index)}
    >
      <div className="flex items-start pt-1">
        <input
          type="radio"
          checked={isSelected}
          onChange={() => onSelect(index)}
          className="w-5 h-5 text-[#FF8A00] border-gray-300 focus:ring-[#FF8A00] focus:ring-2"
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium text-[#344054]">
            จำนวนแขก {option.guests} ท่าน
          </p>
          <p className="font-bold text-gradient text-lg">
            {option.price} บาท/ท่าน
          </p>
        </div>
        <p className="text-[#475467] text-sm leading-relaxed">
          {option.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto bg-white rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-[#101828] leading-tight">
          บุฟฟเฟต์ไทยสแตนดาร์ต / Buffet Thai Standard
        </h2>
      </div>

      {/* Package Options */}
      <div className="flex flex-col gap-4 p-6">
        {packageOptions.map((option, index) => (
          <PackageOption
            key={index}
            option={option}
            index={index}
            isSelected={selectedPackage === index}
            onSelect={setSelectedPackage}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 p-6 border-t border-gray-100 bg-gray-50/50">
        <Button
          variant="outline"
          className="flex-1 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={onClose}
        >
          ยกเลิก
        </Button>
        <Button
          className="flex-1 py-3 bg-gradient-to-r from-[#FF8A00] to-[#FF6B00] hover:from-[#FF7A00] hover:to-[#FF5B00] text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={handleSelectPackage}
        >
          เลือกแพคเกจ
        </Button>
      </div>
    </div>
  );
}

export default PackageDetails;

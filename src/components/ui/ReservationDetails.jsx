import { Calendar, Clock, MapPin, CheckCircle, X } from "lucide-react";
import { Button } from "./button";
import { useState, useEffect, useRef } from "react";
import { Calendar as CalendarComponent } from "./calendar";
import { toast } from "sonner";

function ReservationDetails({ onClose, onBack }) {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  // Generate time options in 12-hour format
  const timeOptions = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setIsCalendarOpen(false);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle reservation success
  const handleReservationSuccess = () => {
    console.log("จองเลย button clicked!"); // Debug log

    // Mock reservation data
    const reservationData = {
      date: date ? formatDate(date) : "ไม่ได้เลือก",
      startTime: startTime || "ไม่ได้เลือก",
      endTime: endTime || "ไม่ได้เลือก",
      packageName: "บุฟฟเฟต์ไทยสแตนดาร์ด",
      guestCount: "50 ท่าน",
      totalPrice: "14,500 บาท",
    };

    console.log("Showing toast..."); // Debug log

    // Show success toast with custom JSX content
    const toastId = toast(
      <div className="relative max-w-[480px]">
        {/* Close button in top right */}
        <button
          onClick={() => toast.dismiss(toastId)}
          className="absolute -top-2 -right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="h-4 w-4 text-[#667085] hover:text-[#344054]" />
        </button>

        {/* Main content */}
        <div className="flex items-start gap-3 pr-6">
          {/* Green checkmark icon */}
          <div className="flex-shrink-0 mt-0.5">
            <CheckCircle className="h-5 w-5 text-[#10B981]" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1 w-full">
            <div className="text-[#101828] font-medium text-sm">
              ส่งการจองให้ร้านค้าแล้ว
            </div>
            <div className="text-[#667085] text-sm">
              โปรดรอร้านค้าตอบกลับภายในระยะเวลา 1-2 วัน
            </div>
            <button
              className="text-[#FF8A00] text-sm font-semibold text-left hover:text-[#E6720A] transition-colors"
              onClick={() => {
                console.log("View booking status clicked");
                // Add navigation logic here if needed
              }}
            >
              ดูสถานะการจอง
            </button>
          </div>
        </div>
      </div>,
      {
        duration: 6000,
        style: {
          background: "white",
          border: "1px solid #E4E7EC",
          boxShadow:
            "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
          borderRadius: "12px",
          padding: "16px",
          minWidth: "400px",
        },
        unstyled: true, // Completely remove all default Sonner styling
      }
    );

    console.log("Toast should be visible now"); // Debug log

    // Close the modal
    onClose();
  };

  return (
    <div className="max-w-[688px] rounded-xl bg-white flex flex-col">
      {/* header */}
      <div className="p-6">
        <h3>เพิ่มรายละเอียดการจอง</h3>
      </div>

      <div className="flex flex-col gap-5 p-6">
        <p className="font-bold text-[#344054]">สรุปคำสั่งซื้อ</p>

        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">แพคเกจที่เลือก</p>
            <div className="p-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] w-[464px] h-[116px]"></div>
          </div>

          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">จำนวนท่าน/ที่</p>
            <div className="p-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] w-[464px]"></div>
          </div>

          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">ยอดชำระมัดจำ</p>
            <div className="p-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] w-[464px]"></div>
          </div>

          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">ยอดชำระทั้งหมด</p>
            <div className="p-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] w-[464px]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-6">
        <p className="font-bold text-[#344054]">วันที่ต้องการนัด</p>

        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">
              วันที่ต้องการนัด
            </p>
            <div className="relative w-[464px]" ref={calendarRef}>
              {/* Date Input */}
              <button
                type="button"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="w-full p-3 border border-[#D0D5DD] rounded-lg bg-white text-sm focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] outline-none text-left flex items-center justify-between hover:border-[#FF8A00]/50 transition-colors"
              >
                <span className={date ? "text-[#344054]" : "text-[#98A2B3]"}>
                  {date ? formatDate(date) : "เลือกวันที่"}
                </span>
                <Calendar
                  size={16}
                  className={`text-[#667085] transition-transform ${
                    isCalendarOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Calendar Dropdown */}
              {isCalendarOpen && (
                <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-[#D0D5DD] rounded-lg shadow-lg overflow-hidden">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    className="rounded-lg border-0"
                    disabled={(date) => date < new Date()}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">ระยะเวลานัด*</p>
            <div className="flex flex-col gap-3 w-[464px]">
              <div className="flex gap-3">
                {/* Start Time */}
                <div className="flex-1">
                  <label className="block text-xs text-[#667085] mb-1">
                    เวลาเริ่ม
                  </label>
                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full p-3 border border-[#D0D5DD] rounded-lg bg-white text-sm focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] outline-none"
                  >
                    <option value="">เลือกเวลาเริ่ม</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* End Time */}
                <div className="flex-1">
                  <label className="block text-xs text-[#667085] mb-1">
                    เวลาจบ
                  </label>
                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full p-3 border border-[#D0D5DD] rounded-lg bg-white text-sm focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] outline-none"
                  >
                    <option value="">เลือกเวลาจบ</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time validation message */}
              {startTime && endTime && (
                <p className="text-xs text-[#667085]">
                  ระยะเวลา: {startTime} - {endTime}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">
              สถานที่นัดกับร้าน
            </p>
            <div className="p-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] w-[464px]"></div>
          </div>

          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-[#344054]">ข้อความถึงร้าน</p>
            <div className="p-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] w-[464px]"></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 p-6 border-t border-gray-100 bg-gray-50/50">
        <Button
          variant="outline"
          className="flex-1 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={onBack}
        >
          ยกเลิก
        </Button>
        <Button
          className="flex-1 py-3 bg-gradient-to-r from-[#FF8A00] to-[#FF6B00] hover:from-[#FF7A00] hover:to-[#FF5B00] text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={handleReservationSuccess}
        >
          จองเลย
        </Button>
      </div>
    </div>
  );
}

export default ReservationDetails;

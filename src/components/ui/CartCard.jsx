import { Badge } from "./badge";
import { Button } from "./button";

function CartCard() {
  return (
    <div className="flex flex-col gap-3 max-w-[1184px] w-full">
      <div className="flex flex-col border border-[#D0D5DD] rounded-lg gap-4 py-4">
        <div className="flex gap-3 pb-4 px-4 items-center border-b border-[#D0D5DD]">
          <p className="text-sm font-medium">โหระพา เคทเทอริ่ง</p>
          <Badge className="rounded-full border border-[#FEDF89] bg-[#FFFAEB] py-1 px-3 text-[#B54708] text-sm font-medium">
            ที่ต้องชำระ
          </Badge>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[516px] w-full pl-4">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[#101828]">
                บุฟฟเฟต์ไทยสแตนดาร์ต / Buffet Thai Stand
              </p>
              <p className="text-[#475467]">จำนวนแขก 100 ท่าน</p>
              <p className="text-[#475467]">
                รายการอาหาร 6 อย่าง ฟรีน้ำดื่ม, ข้าวหอมมะลิ, ของหวาน/ผลไม้รวม,
                จำนวนอาหารรวมทั้งหมด 8-10 รายการ
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[#475467]">
                วันที่ 6/09/2025 เวลา 05:00 PM - 10:00 PM
              </p>
              <p className="text-[#475467]">
                อาคารปฏิบัติการรวมวิศวกรรมศาสตร์ 2 (ECC) เลขที่ 1 ซอยฉลองกรุง 1
                แขวงลาดกระบัง เขตลาดกระบัง
              </p>
            </div>
          </div>

          <div className="flex justify-evenly max-w-[636px] w-full items-center ">
            <p>90</p>
            <p className="">26,100</p>
            <p className="text-gradient ">13,050</p>
            <Button className="bg-gradient py-2 px-3 rounded-md text-white font-semibold ">
              ชำระมัดจำ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

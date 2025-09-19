import NavbarCustom from "../components/ui/Navbar-custom";
import PackageCard from "../components/ui/PackageCard";
import PackageCard2 from "../components/ui/PackageCard2";
import MiniFooter from "../components/ui/miniFooter";
import PackageCardPromotion from "../components/ui/PackageCardPromotion";
import { Star, BadgeCheck, HandPlatter, Heart } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function CustomerReservation() {
  return (
    <>
      <NavbarCustom />

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 max-w-[1184px] py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/customerrestaurant"
                  className="text-sm font-semibold"
                >
                  ร้านค้า
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href=""
                  className="text-sm font-semibold text-[#D87500]"
                >
                  โหระพา เคอเทอริ่ง
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex gap-4">
            <div className="max-w-[364px] max-h-[226px] flex gap-2">
              <div className="max-w-[224px] h-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 h-full">
                <img
                  src="https://github.com/shadcn.png"
                  alt=""
                  className="w-[132px] h-[109px] rounded-lg"
                />
                <img
                  src="https://github.com/shadcn.png"
                  alt=""
                  className="w-[132px] h-[109px] rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-[804px]">
              <div className="flex flex-col gap-2">
                <p className="text-cl font-bold text-[#101828]">
                  โหระพา เคทเทอริ่ง
                </p>
                <p className="line-clamp-2 text-[#667085] leading-relaxed">
                  โหระพาแคทเทอริ่ง ประสบการณ์จัดเลี้ยงมากกว่า 30 ปี
                  พร้อมให้บริการรับจัดเลี้ยงนอกสถานที่ทุกรูปแบบด้วยทีมงานมืออาชีพ
                  ทั้งการจัดเลี้ยง รับจัดเลี้ยง รับจัดเลี้ยงงานทำบุญบ้าน
                  รับจัดเลี้ยงบริษัท รับบุฟเฟ่ต์ ข้าวกล่อง Box set
                  และชุดปิ่นโตถวายพระสงฆ์ ที่สามารถจัดเลี้ยงได้สูงสุดมากกว่า
                  6,000 ท่านต่อวัน
                </p>
                <div className="flex gap-2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#344054]">
                    บริษัท โหระพาแคทเทอริ่ง จำกัด  1649/1  จรัญสนิทวงศ์ 75
                    บางพลัด กทม. 10700
                  </p>
                </div>

                <div className="flex gap-2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#344054]">02-026-3587 081-554-5662 </p>
                </div>

                <div className="flex gap-5">
                  <div className="flex gap-1 justify-center items-center">
                    <Star
                      size={20}
                      className="text-yellow-400 fill-current"
                    ></Star>
                    <p className="text-[#667085]">4.2</p>
                  </div>
                  <p className="text-[#98A2B3]">(18)</p>
                </div>

                <div className="flex gap-[6px]">
                  <Badge
                    variant="secondary"
                    className="border py-[3px] px-2 border-[#EAECF0] bg-white text-xs font-medium flex gap-2"
                  >
                    <HandPlatter size={12} />
                    จัดเลี้ยง
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border py-[3px] px-2 border-[#EAECF0] bg-white text-xs font-medium flex gap-2"
                  >
                    <HandPlatter size={12} />
                    ซุ้มอาหาร
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 px-32 py-10">
          <div className="flex justify-between items-center">
            <h3>จัดโปรโมชั่นขณะนี้</h3>
          </div>

          <div className="flex gap-4">
            <PackageCardPromotion />
            <PackageCardPromotion />
            <PackageCardPromotion />
            <PackageCardPromotion />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-10">
        <div className="flex gap-3 max-w-[1184px] w-full">
          <Button className="bg-gradient py-1 px-4 rounded-sm text-white ">
            ทั้งหมด
          </Button>
          <Button
            variant="outline"
            className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
          >
            Buffet
          </Button>
          <Button
            variant="outline"
            className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
          >
            ซุ้มอาหาร
          </Button>
          <Button
            variant="outline"
            className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
          >
            Snack Box
          </Button>
          <Button
            variant="outline"
            className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
          >
            อาหารเซต
          </Button>
          <Button
            variant="outline"
            className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
          >
            ค้นหาแพคเกจ
          </Button>
        </div>

        <div className="flex flex-col gap-4 py-10 max-w-[1184px]">
          <div className="flex justify-between items-center">
            <h3>Buffet </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
          </div>
        </div>

        <div className="flex flex-col gap-4  py-10 max-w-[1184px]">
          <div className="flex justify-between items-center">
            <h3>ซุ้มอาหาร </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10 max-w-[1184px]">
          <div className="flex justify-between items-center">
            <h3>Snack Box </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10 max-w-[1184px]">
          <div className="flex justify-between items-center">
            <h3>อาหารเซต </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
            <PackageCard2 />
          </div>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default CustomerReservation;

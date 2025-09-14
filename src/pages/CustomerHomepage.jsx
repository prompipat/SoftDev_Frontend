import NavbarCustom from "../components/ui/Navbar-custom";
import CarouselCustom from "../components/ui/Carousel-custom";
import FilterCustom from "../components/ui/Filter-custom";
import RestaurantCard from "../components/ui/RestaurantCard";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function CustomerHomepage() {
  return (
    <>
      <NavbarCustom />
      <CarouselCustom />
      <FilterCustom />

      {/* หมวดหมู่ร้านจัดเลี้ยง */}
      <div className="flex flex-col px-32 py-10 gap-4">
        <h3>หมวดหมู่ร้านจัดเลี้ยง</h3>
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=184&h=140&fit=crop"
            alt="Thai Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=184&h=140&fit=crop"
            alt="Chinese Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=184&h=140&fit=crop"
            alt="Italian Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=184&h=140&fit=crop"
            alt="Seafood Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=184&h=140&fit=crop"
            alt="BBQ Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=184&h=140&fit=crop"
            alt="Italian Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=184&h=140&fit=crop"
            alt="Seafood Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=184&h=140&fit=crop"
            alt="BBQ Restaurant"
            className="rounded-md"
          />
        </div>
      </div>

      {/* วางแผนงานจัดเลี้ยง */}
      <div className="flex gap-4 py-10 px-32 bg-[#F9FAFB]">
        <div className="flex gap-10">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=336&h=288&fit=crop"
            alt="Italian Restaurant"
            className="rounded-md"
          />
          <div className="flex flex-col gap-16 items-stretch justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#101828]">วางแผนงานจัดเลี้ยง</h1>
              <p className="text-lg text-[#344054]">
                ให้ทุกงานสำคัญของคุณสมบูรณ์แบบด้วยการวางแพลนจัดเลี้ยงที่ครอบคลุมทั้งวัน
                คุณสามารถเลือก แพ็กเกจที่หลากหลายจากหลายร้าน
                และรวมไว้ในแผนงานเดียว เพื่อสร้างประสบการณ์ที่ราบรื่นทั้งสำหรับ
                ผู้จัดและผู้ร่วมงาน
              </p>
            </div>
            <Button className="bg-gradient px-8 py-3 text-lg font-bold w-fit h-fit">
              วางแพลนเลย
            </Button>
          </div>
        </div>
      </div>

      {/* โปรโมชั่นเด็ดจากร้านดัง */}
      <div className="flex flex-col px-32 py-10 gap-4">
        <div className="flex justify-between items-center">
          <h3>โปรโมชั่นเด็ดจากร้านดัง</h3>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-gradient">ดูทั้งหมด</p>
            <ArrowRight className="text-[#EB5B0A]" />
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=224&h=248&fit=crop"
            alt="Thai Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=224&h=248&fit=crop"
            alt="Chinese Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=224&h=248&fit=crop"
            alt="Italian Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=224&h=248&fit=crop"
            alt="Seafood Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=224&h=248&fit=crop"
            alt="BBQ Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=224&h=248&fit=crop"
            alt="Italian Restaurant"
            className="rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=224&h=248&fit=crop"
            alt="Seafood Restaurant"
            className="rounded-md"
          />
        </div>
      </div>

      {/*  Top 5 Restaurants */}
      <div className="flex flex-col gap-4 px-32 py-10">
        <div className="flex justify-between items-center">
          <h3>Top 5 ร้านขายดี</h3>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-gradient">ดูทั้งหมด</p>
            <ArrowRight className="text-[#EB5B0A]" />
          </div>
        </div>

        <div className="flex gap-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

export default CustomerHomepage;

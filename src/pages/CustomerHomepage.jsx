import { useNavigate } from "react-router-dom";

import NavbarCustom from "../components/ui/Navbar-custom";
import CarouselCustom from "../components/ui/Carousel-custom";
import FilterCustom from "../components/ui/Filter-custom";
import RestaurantCard from "../components/ui/RestaurantCard";
import PackageCard from "../components/ui/PackageCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import BlogpostCard from "../components/ui/BlogpostCard";
import Footer from "../components/ui/Footer";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function CustomerHomepage() {
  const navigate = useNavigate();

  const goToRestaurant = () => {
    navigate("/customerrestaurant");
  };

  return (
    <>
      <NavbarCustom />
      <CarouselCustom />
      <FilterCustom />

      {/* หมวดหมู่ร้านจัดเลี้ยง */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col px-32 py-10 gap-4">
          <h3>หมวดหมู่ร้านจัดเลี้ยง</h3>
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=184&h=140&fit=crop"
              alt="Thai Restaurant"
              className="rounded-md"
              onClick={goToRestaurant}
            />
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=184&h=140&fit=crop"
              alt="Chinese Restaurant"
              className="rounded-md"
              onClick={goToRestaurant}
            />
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=184&h=140&fit=crop"
              alt="Italian Restaurant"
              className="rounded-md"
              onClick={goToRestaurant}
            />
            <img
              src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=184&h=140&fit=crop"
              alt="Seafood Restaurant"
              className="rounded-md"
              onClick={goToRestaurant}
            />
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=184&h=140&fit=crop"
              alt="BBQ Restaurant"
              className="rounded-md"
              onClick={goToRestaurant}
            />
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=184&h=140&fit=crop"
              alt="Italian Restaurant"
              className="rounded-md"
              onClick={goToRestaurant}
            />
          </div>
        </div>
      </div>

      {/* วางแผนงานจัดเลี้ยง */}
      <div className="flex justify-center bg-[#F9FAFB]">
        <div className="flex gap-4 py-10 max-w-[1184px]">
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
                  และรวมไว้ในแผนงานเดียว
                  เพื่อสร้างประสบการณ์ที่ราบรื่นทั้งสำหรับ ผู้จัดและผู้ร่วมงาน
                </p>
              </div>
              <Button className="bg-gradient px-8 py-3 text-lg font-bold w-fit h-fit">
                วางแพลนเลย
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* โปรโมชั่นเด็ดจากร้านดัง */}
      <div className="flex flex-col items-center">
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
          </div>
        </div>
      </div>

      {/*  Top 5 Restaurants */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 py-10 ">
          <div className="flex justify-between">
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
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>

      {/* เปรียบเทียบแพคเกจ */}
      <div className="flex justify-center bg-[#F9FAFB]">
        <div className="flex gap-4 py-10 max-w-[1184px]">
          <div className="flex flex-row-reverse gap-10">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=336&h=288&fit=crop"
              alt="Italian Restaurant"
              className="rounded-md"
            />
            <div className="flex flex-col gap-16 items-stretch justify-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#101828]">เปรียบเทียบแพคเกจ</h1>
                <p className="text-lg text-[#344054]">
                  เพราะการจัดเลี้ยงไม่ควรเป็นเรื่องซับซ้อน ฟีเจอร์
                  “เปรียบเทียบแพ็กเกจ” จะช่วยให้เห็นทุกข้อมูลที่ต้องการ
                  แบบชัดเจนในครั้งเดียว ทั้งราคา เมนู และความคุ้มค่าของแต่ละร้าน
                  ทำให้วางใจได้ว่าตัดสินใจเลือกสิ่งที่ตรงใจที่สุด
                </p>
              </div>
              <Button className="bg-gradient px-8 py-3 text-lg font-bold w-fit h-fit">
                เปรียบเทียบแพคเกจ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Restaurants */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 px-32 py-10">
          <div className="flex justify-between items-center">
            <h3>ร้านแนะนำจาก CaterLink </h3>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-gradient">ดูทั้งหมด</p>
              <ArrowRight className="text-[#EB5B0A]" />
            </div>
          </div>

          <div className="flex gap-4">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>

      {/* Recommended Package from CaterLink */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 px-32 py-10">
          <div className="flex justify-between items-center">
            <h3>แพคเกจแนะนำจาก CaterLink </h3>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-gradient">ดูทั้งหมด</p>
              <ArrowRight className="text-[#EB5B0A]" />
            </div>
          </div>

          <div className="flex gap-4">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
        </div>
      </div>

      {/* Review from Customers */}
      <div className="flex flex-col gap-3 px-32 py-10 bg-[#F9FAFB]">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1>รีวิวจากผู้ใช้จริง</h1>
          <div className="flex gap-4">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>

      {/* Blog Post */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 py-10">
          <div className="flex justify-between items-center">
            <h3>บทความล่าสุด</h3>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-gradient">ดูทั้งหมด</p>
              <ArrowRight className="text-[#EB5B0A]" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-gradient py-1 px-4 rounded-sm text-white ">
              ทั้งหมด
            </Button>
            <Button
              variant="outline"
              className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
            >
              บทความจากร้าน
            </Button>
            <Button
              variant="outline"
              className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
            >
              บทความจากลูกค้า
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
              จัดเลี้ยง
            </Button>
            <Button
              variant="outline"
              className="py-1 px-4 rounded-sm border-[#EAECF0] text-[#344054]"
            >
              Snack Box
            </Button>
          </div>

          <div className="flex gap-4">
            <BlogpostCard />
            <BlogpostCard />
            <BlogpostCard />
            <BlogpostCard />
            <BlogpostCard />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CustomerHomepage;

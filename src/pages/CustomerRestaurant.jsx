import NavbarCustom from "../components/ui/Navbar-custom";
import FilterCustom from "../components/ui/Filter-custom";
import RestaurantCard from "../components/ui/RestaurantCard";

function CustomerRestaurant() {
  return (
    <>
      <NavbarCustom />
      <FilterCustom />

      {/* Reccommand Restaurant */}
      <div className="flex flex-col gap-4 px-32 py-10">
        <h3>ร้านแนะนำจาก CaterLink</h3>
        <div className="flex gap-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>

      {/* Top 5 Restaurants */}
      <div className="flex flex-col gap-4 px-32 py-10">
        <h3>Top 5 ร้านขายดี</h3>
        <div className="flex gap-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>

      {/* ร้านจัดเลี้ยง */}
      <div className="flex flex-col gap-4 px-32 py-10">
        <h3>ร้านจัดเลี้ยง</h3>
        <div className="flex flex-wrap gap-y-8 gap-x-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

export default CustomerRestaurant;

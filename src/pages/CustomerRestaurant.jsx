import NavbarCustom from "../components/ui/Navbar-custom";
import FilterCustom from "../components/ui/Filter-custom";
import RestaurantCard from "../components/ui/RestaurantCard";
import MiniFooter from "../components/ui/miniFooter";
import { useNavigate } from "react-router-dom";

function CustomerRestaurant() {
  const navigate = useNavigate();

  const goToReservation = () => {
    navigate("/customerreservation");
  };

  return (
    <>
      <NavbarCustom />
      <FilterCustom />

      {/* Reccommand Restaurant */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 py-10">
          <h3>ร้านแนะนำจาก CaterLink</h3>
          <div className="flex gap-4">
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
          </div>
        </div>
      </div>

      {/* Top 5 Restaurants */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 px-32 py-10">
          <h3>Top 5 ร้านขายดี</h3>
          <div className="flex gap-4">
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
          </div>
        </div>
      </div>

      {/* ร้านจัดเลี้ยง */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 py-10 max-w-[1184px]">
          <h3>ร้านจัดเลี้ยง</h3>
          <div className="flex flex-wrap gap-y-8 gap-x-4">
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
            <RestaurantCard onClick={goToReservation} />
          </div>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default CustomerRestaurant;

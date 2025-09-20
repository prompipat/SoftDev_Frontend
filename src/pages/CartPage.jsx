import NavbarCustom from "../components/ui/Navbar-custom";
import Cartbar from "../components/ui/Cartbar";

function CartPage() {
  return (
    <>
      <NavbarCustom />
      <div className="flex flex-col py-10 ">
        <h1>คำสั่งซื้อของฉัน</h1>
        <Cartbar />
      </div>
    </>
  );
}

export default CartPage;

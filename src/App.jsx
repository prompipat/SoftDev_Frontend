import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import CustomerHomepage from "./pages/CustomerHomepage";
import React, { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const LazyCustomerHomepage = lazy(() => import("./pages/CustomerHomepage"));

function MainContent() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/customer-home");
  };

  return (
    <div>
      <p className="logo">CaterLink</p>
      <h1>เปรียบเทียบร้านอาหาร</h1>
      <h2>เข้าสู่ระบบ</h2>
      <h3>ร้านแนะนำจาก CaterLink</h3>
      <p>ยินดีต้อนรับสู่แอปพลิเคชันของเรา</p>
      <Search className="bg-gradient" />
      <Button className="bg-gradient text-white" onClick={goToHomepage}>
        ไปหน้าหลัก
      </Button>
      <h1>Homepage FrontEnd Really Last Time</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/customer-home" element={<CustomerHomepage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

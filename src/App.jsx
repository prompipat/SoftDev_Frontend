import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ui/scrolltotop";
import CustomerHomepage from "./pages/CustomerHomepage";
import CustomerRestaurant from "./pages/CustomerRestaurant";
import CustomerReservation from "./pages/CustomerReservation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CustomerHomepage />} />
        <Route path="/customerrestaurant" element={<CustomerRestaurant />} />
        <Route path="/customerreservation" element={<CustomerReservation />} />
        <Route
          path="/welcome"
          element={
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-4">Welcome to CaterLink</h1>
              <h2 className="text-2xl mb-4">
                ยินดีต้อนรับสู่แอปพลิเคชันของเรา
              </h2>
              <div className="bg-gradient w-16 h-16 rounded"></div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

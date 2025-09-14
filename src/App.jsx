import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerHomepage from "./pages/CustomerHomepage";
import NavbarCustom from "./components/ui/Navbar-custom";

function App() {
  return (
    <Router>
      <NavbarCustom />
      <Routes>
        <Route
          path="/"
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
        <Route path="/customerhomepage" element={<CustomerHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;

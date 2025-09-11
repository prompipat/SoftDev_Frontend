import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function App() {
  return (
    <div>
      <p className="logo">CaterLink</p>
      <h1>เปรียบเทียบร้านอาหาร</h1>
      <h2>เข้าสู่ระบบ</h2>
      <h3>ร้านแนะนำจาก CaterLink</h3>
      <p>ยินดีต้อนรับสู่แอปพลิเคชันของเรา</p>
      <Search className="bg-gradient" />
      <Button className="bg-gradient text-white">คลิกทำไม</Button>
      <h1>Homepage FrontEnd 4</h1>
    </div>
  );
}

export default App;

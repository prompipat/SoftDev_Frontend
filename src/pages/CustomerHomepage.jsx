import React from "react";
import { useNavigate } from "react-router-dom";

function CustomerHomepage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Customer Homepage</h1>
      <p>Welcome to the customer homepage!</p>
      <button
        onClick={goBack}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        กลับหน้าแรก
      </button>
    </div>
  );
}

export default CustomerHomepage;

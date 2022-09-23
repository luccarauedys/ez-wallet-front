import React from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token@ezwallet");
    if (!token) navigate("/");
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

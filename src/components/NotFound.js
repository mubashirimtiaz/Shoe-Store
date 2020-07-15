import React from "react";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default NotFound;

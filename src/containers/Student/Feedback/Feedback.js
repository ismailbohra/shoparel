import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("submit");
  };

  return (
    <>
      <button onClick={handleNavigation}>navigate</button>
      <div>facilityFeedback</div>
    </>
  );
};

export default Feedback;

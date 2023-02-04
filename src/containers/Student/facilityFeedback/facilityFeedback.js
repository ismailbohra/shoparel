import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const FacilityFeedback = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    setIndex(false);
    navigate("submit");
  };
  const [index, setIndex] = useState(true);
  return (
    <>
      {index ? (
        <>
          <button onClick={handleNavigation}>navigate</button>
          <div>facilityFeedback</div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default FacilityFeedback;

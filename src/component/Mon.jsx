import React from "react";

export const Mon = ({ title, city, url }) => {
  const handleTitle = () => {
    alert(`Thanks For Visiting to ${title}`);
  };

  const handleCity=()=>{
    alert(`${city} is Awesome Place for Tourism`);
  }
  return (
    <div className="sub">
      <h3 onClick={handleTitle}>{title}</h3>
      <h5 onClick={handleCity}>{city}</h5>
      <img src={`img/${url}.jpg`} alt=" " />
    </div>
  );
};



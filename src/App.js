import React from "react";
import { Mon } from "./component/Mon";
import "./component/common.css";

function App() {
  return (
    <div className="main">
      <Mon title="Taj Mahal" city="Agra" url="p6" />
      <Mon title="Char Minar" city="Hyderabad" url="p5" />
      <Mon title="India Gate" city="Delhi" url="p4" />
      <Mon title="Lal Quila" city="Delhi" url="p3" />
      <Mon title="Gate Way Of India" city="Agra" url="p2" />
      <Mon title="Mysore Palace" city="Mysore" url="p1" />
      <Mon title="Vicoria's Palace" city="Kolkata" url="p7" />
      <Mon title="Macca Masjid" city="Hyderabad" url="p8" />
    </div>
  );
}

export default App;


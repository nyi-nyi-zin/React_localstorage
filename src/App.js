import React, { useState, useEffect } from "react";
import ACompo from "./components/ACompo";
import BCompo from "./components/BCompo";

const h1_style = {
  color: "red",
  fontWeight: "bold",
};

//Parent root file

function App() {
  return (
    <div className="container">
      <h1 style={h1_style}>Context Api</h1>
      <ACompo />
      <BCompo />
    </div>
  );
}

export default App;

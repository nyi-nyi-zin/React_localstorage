import { useState } from "react";
import Ccompo from "./Ccompo";
import React from "react";

export default function BCompo() {
  const [title, setTitle] = useState("Testing");

  const ChangeTitle = () => {
    let dd = "Testing" + Math.ceil(Math.random(0, 1) * 1000);
    setTitle(dd);
  };
  return (
    <>
      <h1>BComponent Title:{title}</h1>
      <button onClick={ChangeTitle}>Change Title</button>
      <Ccompo />
    </>
  );
}

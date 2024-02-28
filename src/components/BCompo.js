import React, { useState, useContext } from "react";
import Ccompo from "./Ccompo";
import { TitleContext } from "./TestContext";

export default function BCompo() {
  const { title, ChangeTitle } = useContext(TitleContext);

  return (
    <>
      <h1>BComponent Title:{title}</h1>
      <button onClick={ChangeTitle}>Change Title</button>
      <Ccompo />
    </>
  );
}

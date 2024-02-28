import React, { useContext } from "react";
import { TitleContext } from "./TestContext";

export default function Ccompo() {
  const { title } = useContext(TitleContext);
  return (
    <>
      <h1>Ccomponent Title:{title}</h1>
      <strong></strong>
    </>
  );
}

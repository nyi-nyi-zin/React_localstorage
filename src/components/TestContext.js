import React, { createContext, useState } from "react";

export const TitleContext = createContext();

function TitleContextProvider(props) {
  const [title, setTitle] = useState("Testing");

  const ChangeTitle = () => {
    let dd = "Testing" + Math.ceil(Math.random(0, 1) * 1000);
    setTitle(dd);
  };

  const data = { title, ChangeTitle };
  return (
    <TitleContext.Provider value={data}>{props.children}</TitleContext.Provider>
  );
}

export default TitleContextProvider;

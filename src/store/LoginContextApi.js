import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export default function LoginContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState();
  const value = { loggedIn, setLoggedIn };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
}

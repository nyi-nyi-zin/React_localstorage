import React, { useState, useEffect } from "react";
import AddUser from "./components/AddUser";

//Parent root file

function App() {
  const [user, setUser] = useState({});

  const addUserHandler = (newUser) => {
    setUser((previous) => {
      return {
        id: 1,
        name: newUser.name,
        password: newUser.password,
      };
    });
  };

  return (
    <div className="container">
      <h1>Username : {user.name}</h1>
      <h1>Password : {user.password}</h1>
      <AddUser addUser={addUserHandler} />
    </div>
  );
}

export default App;

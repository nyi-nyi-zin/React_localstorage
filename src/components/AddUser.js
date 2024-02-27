import React, { useState } from "react";

export default function AddUser(props) {
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState(" ");

  const addUser = (e) => {
    e.preventDefault();
    let user = {
      name,
      password,
    };
    props.addUser(user);
  };

  return (
    <>
      <form onSubmit={addUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm float-end">
          Add
        </button>
      </form>
    </>
  );
}

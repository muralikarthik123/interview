import React, { useState, useContext } from "react";
import { DataContext1 } from "./middle.jsx";

export default function Pr1() {
  const { setData1 } = useContext(DataContext1);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setData1((prev) => [...prev, data]); // Add data to context
    setData({ username: "", password: "" }); // Reset form
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handle}
          placeholder="Enter Username"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handle}
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

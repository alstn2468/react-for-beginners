import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header />
      <h1>First Screen</h1>
      <button onClick={logUserIn}>User Login</button>
    </div>
  );
};

export default Screen;

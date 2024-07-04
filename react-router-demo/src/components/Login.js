import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleOnLogin = () => {
    auth.login(user);
    navigate("/");
  };
  return (
    <div>
      <label>
        UserName:{" "}
        <input
          type="text"
          placeholder="Enter your UserName"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>

      <button onClick={handleOnLogin}>Login</button>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";


const Login = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="container w-50 h-auto mt-5  rounded-3  border border-3 border-dark">
      <div className="m-3">
        <h3>Welcome Back!!</h3>
        <div class="d-flex justify-content-center align-items-center form-floating mb-3">
          <input
            type="email"
            class="form-control "
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class=" d-flex justify-content-center align-items-center form-floating">
          <input
            type={type}
            name="password"
            placeholder="Password"
            value={password}
            class="form-control "
            id="floatingPassword"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
           
          />
          <span class="flex justify-around items-center" onClick={handleToggle}>
            <Icon class="absolute mr-10" icon={icon} size={25} />
          </span>
          <label for="floatingPassword">Password</label>
        </div>
        <div className="mt-3">
          <button className="align-items-center m-2  p-2 bg-dark text-white rounded-pill">
            Login
          </button>
          <Link to="/signup">
            <button className="align-items-center m-2  p-2 bg-dark text-white  rounded-pill">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

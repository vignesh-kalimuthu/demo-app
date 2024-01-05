import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Registration = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [type1, setType1] = useState("password");
  const [icon1, setIcon1] = useState(eyeOff);

  const handleToggle = (text) => {
    console.log("text", text);

    if (text === "new") {
      console.log("new type", type);

      if (type === "password") {
        setIcon(eye);
        setType("text");
      } else {
        setIcon(eyeOff);
        setType("password");
      }
    }
    if (text === "confirm") {
      console.log("confirm type", type);
      if (type1 === "password") {
        setIcon1(eye);
        setType1("text");
      } else {
        setIcon1(eyeOff);
        setType1("password");
      }
    }
  };

  function validateInput(e) {
    let inputName = e.target.name;
    console.log("inputName", inputName);
    if (inputName === "name") {
      let nameValue = e.target.value;
      if (nameValue) {
        // Regex to check valid
        // MCC code
        let regex = new RegExp(/^[a-zA-Z\s]{4,30}$/);

        // if MCC code
        // is empty return false
        if (nameValue === "") {
          return "";
        }

        // Return true if the PAN NUMBER
        // matched the ReGex
        if (regex.test(nameValue) === true) {
          return "true";
        } else {
          return "false";
        }
      }
    }

    if (inputName === "email") {
      let emailValue = e.target.value;
      let regex = new RegExp(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
      );

      // if MCC code
      // is empty return false
      if (emailValue === "") {
        return "";
      }

      // Return true if the PAN NUMBER
      // matched the ReGex
      if (regex.test(emailValue) === true) {
        return "true";
      } else {
        return "false";
      }
    }
    if (inputName === "mobileno") {
      let mobilenoValue = e.target.value;
      let regex = new RegExp(/^[0-9]{10}$/);

      if (mobilenoValue === "") {
        return "";
      }

      if (regex.test(mobilenoValue) === true) {
        return "true";
      } else {
        return "false";
      }
    }
  }

  return (
    <div className="container w-50 h-auto mt-5  rounded-3  border border-3 border-dark">
      <div className="m-3">
        <h3>User Registration Form</h3>
        <div class="d-flex justify-content-center align-items-center form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingName"
            value={userName}
            name="name"
            placeholder="name"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => {
              setUserName(e.target.value);
              validateInput(e);
            }}
          />
          <label for="floatingName">Name</label>
        </div>
        <div class="d-flex justify-content-center align-items-center form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            value={email}
            name="email"
            placeholder="name@example.com"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => {
              setEmail(e.target.value);
              validateInput(e);
            }}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class=" d-flex justify-content-center align-items-center form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={mobileNo}
            name="mobileno"
            placeholder="MobileNO"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => {
              setMobileNo(e.target.value);
              validateInput(e);
            }}
          />
          <label for="floatingPassword">Mobile NO</label>
        </div>

        <div class=" d-flex justify-content-center align-items-center form-floating mb-3">
          <input
            type={type}
            class="form-control"
            id="floatingPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />

          <span
            class="flex justify-around items-center"
            onClick={() => {
              handleToggle("new");
            }}
          >
            <Icon class="absolute mr-10" icon={icon} size={25} />
          </span>
          <label for="floatingPassword">New Password</label>
        </div>

        <div class=" d-flex justify-content-center align-items-center form-floating mb-3">
          <input
            type={type1}
            class="form-control"
            id="floatingPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <span
            class="flex justify-around items-center"
            onClick={() => {
              handleToggle("confirm");
            }}
          >
            <Icon class="absolute mr-10" icon={icon1} size={25} />
          </span>
          <label for="floatingPassword">Confirm Password</label>
        </div>
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={8}
          value={newPassword}
          valueAgain={confirmPassword}
        />

        <div className="mt-3">
          <button className="align-items-center m-2  p-2 bg-dark text-white rounded-pill">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;

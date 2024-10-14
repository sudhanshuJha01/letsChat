import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Btn, InputBox, Card } from "../../components/index.js";
const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  useEffect(()=>{
    console.log({ firstName, lastName, email, password, gender });
  },[gender])
  

  const handleSignUp = () => {
    try {
      axios
        .post("http://localhost:8000/api/v1/auth/signup", {
          firstName,
          lastName,
          email,
          password,
          gender,
        })
        .then((response) => {
          console.log(response);
          navigate("/");
        })
        .catch((error) => {
          console.log("error in axios inside");
          console.log(error);
        });
    } catch (error) {
      console.log("Error in signup connection");
      console.log("error" + error);
    }
  };
  return (
    <div className="h-screen  w-screen flex  justify-center items-center ">
      <Card>
        <h1 className="md:text-4xl text-3xl font-bold text-white text-center mt-3">
          Sign Up
        </h1>
        <InputBox
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type={"text"}
          placeholder={"nitesh"}
          label={"FirstName :"}
        />
        <InputBox
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type={"text"}
          placeholder={"raj"}
          label={"LastName :"}
        />
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type={"text"}
          placeholder={"demo@gmail.com"}
          label={"Email :"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={"password"}
          placeholder={"1231455"}
          label={"Password :"}
        />
        <div>
          <form className="text-white text-xl flex items-center justify-center gap-4">
            <label>
              <input
                checked={gender === "male"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="radio"
                name="gender"
                value="male"
              />{" "}
              Male
            </label>
            <label>
              <input
                checked={gender === "female"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="radio"
                name="gender"
                value="female"
              />{" "}
              Female
            </label>
            <label>
              <input
                checked={gender === "other"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="radio"
                name="gender"
                value="other"
              />{" "}
              Other
            </label>
          </form>
        </div>
        <Btn onClick={handleSignUp} label={"Sign Up"} />
        <p className="text-white mt-2">
          Already have an account?{" "}
          <span className="underline">
            <Link to={"/login"}>Sign in here.</Link>
          </span>
        </p>
      </Card>
    </div>
  );
};

export default SignUp;

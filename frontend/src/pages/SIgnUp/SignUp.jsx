import React from "react";
import { Link } from "react-router-dom";

import { Btn, InputBox, Card } from "../../components/index.js";
const SignUp = () => {
  return (
    <div className="h-screen  w-screen flex flex-col justify-center items-center ">
      <Card>
        <h1 className="md:text-4xl text-3xl font-bold text-white text-center mt-4">
          Sign Up
        </h1>
        <InputBox type={"text"} placeholder={"nitesh"} label={"FirstName :"} />
        <InputBox type={"text"} placeholder={"raj"} label={"LastName :"} />
        <InputBox
          type={"text"}
          placeholder={"demo@gmail.com"}
          label={"Email :"}
        />
        <InputBox
          type={"password"}
          placeholder={"1231455"}
          label={"Password :"}
        />
        <div>
          <form className="text-white text-xl flex items-center justify-center gap-4">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </form>
        </div>
        <Btn label={"Sign Up"} />
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

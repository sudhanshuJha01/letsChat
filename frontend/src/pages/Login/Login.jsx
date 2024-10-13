import React from "react";
import { Btn, InputBox, Card } from "../../components/index.js";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <Card>
        <h1 className="md:text-4xl text-3xl font-bold text-white text-center">
          Login
        </h1>
        <InputBox
          type={"text"}
          placeholder={"demo@gmail.com"}
          label={"Email :"}
        />
        <InputBox
          type={"password"}
          placeholder={"1334442"}
          label={"Password :"}
        />
        <Btn className={"w-1/3 font-semibold"} label={"LogIn"} />
        <p className="text-white mt-2">
          Don't have an account?{" "}
          <span className="underline">
            <Link to={"/signup"}>Sign up now.</Link>
          </span>
        </p>
      </Card>
    </div>
  );
};

export default Login;

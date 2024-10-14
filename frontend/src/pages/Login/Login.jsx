import React ,{useState} from "react";
import { Btn, InputBox, Card } from "../../components/index.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();


  const handleSignIn = ()=>{
      try {
        axios.post("http://localhost:8000/api/v1/auth/signin",{
          email,
          password
        }).then((response)=>{
          console.log(response.data);
          navigate('/')
        }).catch(()=>{
          console.log('ERROR in inside the axios try in handleSignIn ');
          
        })
       
      } catch (error) {
        console.log('error in login handleSignIn');
        console.log(`error ${error}`)
      }
  }
  return (
    <div className="h-screen flex items-center justify-center ">
      <Card>
        <h1 className="md:text-4xl text-3xl font-bold text-white text-center">
          Login
        </h1>
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
          placeholder={"1334442"}
          label={"Password :"}
        />
        <Btn onClick={handleSignIn} className={"w-1/3 font-semibold"} label={"LogIn"} />
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

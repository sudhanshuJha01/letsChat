import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SignUp, Login, Home } from "./pages/index.js";
const App = () => {
  return (
    <div className=" bg-cyan-500 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

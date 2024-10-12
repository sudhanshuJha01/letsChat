import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import getJwtToken from "../utils/getJwtToken.js";
dotenv.config();

const jwt_key = process.env.JWT_KEY;

const userAuthInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  gender: z.string(),
  profilePic: z.optional(z.string()),
});

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, gender } = req.body;

  const malePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
  const femalePic = `https://avatar.iran.liara.run/public/girl?username=${email}`;
  const profilePic = gender === "male" ? malePic : femalePic;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  let userData = {
    firstName,
    lastName,
    email,
    password: hashPassword,
    gender,
  };

  const userInputValidation = userAuthInput.safeParse(userData);
  if (!userInputValidation.success) {
    return res.status(400).json({
      msg: "Input in the body is worng",
    });
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({
      msg: "User is already in the database",
    });
  }

  userData = { profilePic, ...userData };
  const user = await User.create(userData);
  console.log(user);
  const userId = user._id;
  getJwtToken(userId,jwt_key,res);

  if (user) {
    await user.save();
    res.status(200).json({
      msg: "User created successfully",
    });
  }
};

const userLoginInput = z.object({
  email: z.string(),
  password: z.string(),
});

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const inputCheck = userLoginInput.safeParse({ email, password });

  if (!inputCheck.success) {
    return res.status(400).json({
      msg: "Sign in Input is wrong",
    });
  }
  const user = await User.findOne({ email });
  const isCorrectPassword = await bcrypt.compare(
    password,
    user?.password || ""
  );

  if (user && isCorrectPassword) {
    const userId = user._id;
    getJwtToken(userId,jwt_key,res);
    return res.status(200).json({
      msg: "Signin successfull",
    });
  } else {
    return res.status(400).json({
      msg: "User not found",
    });
  }
};
export const signout = (req, res) => {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({
      msg:"Signout sucessfull"
    })
};

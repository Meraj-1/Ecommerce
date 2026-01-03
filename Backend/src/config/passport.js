import dotenv from "dotenv"
dotenv.config();


import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import { connectDB } from "../utils/db.js";
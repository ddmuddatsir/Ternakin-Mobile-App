// import express from "express";
// import crypto from "crypto";
// import bcrypt from "bcryptjs";
// import User from "../models/user.js";
// import { sendVerificationEmail } from "../config/nodemailerConfig.js";

// const router = express.Router();

// //register
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const exixtingUser = await User.findOne({ email });
//     if (exixtingUser) {
//       console.log("Email already registered:", email);
//       res.status(400).json({ message: "Email already registered" });

//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new User({ name, email, password: hashedPassword });
//       newUser.verificationToken = crypto.randomBytes(20).toString("hex");

//       await newUser.save();
//       await sendVerificationEmail(newUser.email, newUser.verificationToken);

//       res.status(201).json({
//         message:
//           "Registration successful. Please check your email for verification.",
//       });
//     }
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).json({ message: "Registration failed" });
//   }
// });

// //email verify
// router.post("/verify/:token", async (req, res) => {
//   try {
//     const token = req.params.token;
//     const user = await User.findOne({ verificationToken: token });
//     if (!user) {
//       return res.status(404).json({ message: "Invalid verification token" });
//     }

//     user.verified = true;
//     user.verificationToken = undefined;
//     await user.save();

//     res.status(200).json({ message: "Email verified successfully" });
//   } catch (error) {
//     console.error("Error verified email:", error);
//     res.status(500).json({ message: "Email verification failed" });
//   }
// });

// //login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = User.findOne({ email });
//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: "Email or password is not correctly" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res
//         .status(401)
//         .json({ message: "Email or password is not correctly" });
//     }

//     const token = jwt.sign({ userId: user._id }, "your_static_secret_key");
//     res.status(200).json({
//       token,
//       userId: user._id,
//       name: user.name,
//       email: user.email,
//     });
//   } catch (error) {
//     console.error("Error during logi", error);
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// export default router;

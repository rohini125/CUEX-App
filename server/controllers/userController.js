// import bcrypt from 'bcrypt';
// import userModel from '../models/userModel.js';
// import { SendVerificationCode } from "../middlewares/email.js";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";
// dotenv.config();

// // Start Registration - Email & Mobile Verification
// export const startRegister = async (req, res) => {
//   console.log("Initiate registration process", req.body);
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required" });
//     }

//     // Check if user already exists
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already registered with this email" });
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpiration = Date.now() + 120000; // OTP expires in 2 minutes

//     // Temporary registration data
//     const tempUser = new userModel({
//       email,
//       // contactNo,
//       otp,
//       otpExpiration,
//       isVerified: false, // Default state
//     });

//     await tempUser.save();

//     console.log("Generated OTP:", otp);

//     // Send OTP via email
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Verify your email",
//       text: `Your OTP code is: ${otp}. It expires in 2 minutes.`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({
//       message: "OTP sent to email. Please verify to proceed.",
//       tempUserId: tempUser._id, // To track the user later
//     });
//   } catch (error) {
//     console.error("Error during registration initiation:", error.message);
//     res.status(500).json({ error: "Failed to initiate registration." });
//   }
// };
// // registing process 
// // Verify OTP and Complete Registration
// export const verifyAndRegister = async (req, res) => {
//   try {
//     const { tempUserId, otp, password, confirmPassword, firstName, lastName, city } = req.body;

//     // Check if all required data is provided
//     if (!tempUserId || !otp || !password || !confirmPassword || !firstName || !lastName || !city) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Validate password match
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     // Fetch temporary user data
//     const tempUser = await userModel.findById(tempUserId);
//     if (!tempUser || tempUser.otp !== otp || Date.now() > tempUser.otpExpiration) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     // Mark the user as verified and update details
//     tempUser.firstName = firstName;
//     tempUser.lastName = lastName;
//     tempUser.city = city;
//     tempUser.password = await bcrypt.hash(password, 10);
//     tempUser.isVerified = true;
//     tempUser.otp = null; // Clear OTP
//     tempUser.otpExpiration = null;

//     await tempUser.save();

//     res.status(200).json({ message: "Registration successful! Please log in.", tempUser });
//   } catch (error) {
//     console.error("Error during OTP verification and registration:", error.message);
//     res.status(500).json({ error: "Failed to complete registration." });
//   }
// };
// //login process


// export const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       const user = await userModel.findOne({ email }); 
//       if (!user) {
//         return res.status(400).json({ message: "User  Not Found. Please Register  First" });
//       }
  
//       if (!(await bcrypt.compare(password, user.password))) {
//         return res.status(400).json({ message: "Password does not match. Please enter the correct password." });
//       }
  
//       res.status(200).json({ message: "Login Successful" });
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };

 

//   // Send OTP Function
// export const sendOtp = async (req, res) => {
//   console.log("request send to frontend ",req.body);
//   try {
//     const { email } = req.body;
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
//     const otpExpiration = Date.now() + 120000;

//     let user = await userModel.findOne({ email });

//     if (!user) {
//       return res
//         .status(400)
//         .json({ error: "User not found. Please register first." });
//     }

//     user.otp = otp;
//     user.otpExpiration = otpExpiration;
//     await user.save();
//     SendVerificationCode(user.email,otp);

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Your OTP Code",
//       text: `Your OTP code is: ${otp}. It will expire in 3 minute.`
//     };

//     console.log("OTP generated:", otp);
//     res.status(200).json({ message: "OTP sent successfully" ,user});
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: error.message });
//     console.error("Error sending OTP:", error.message);
//   }
// };

  
//  //verify otp

// export const verifyOtp = async (req, res) => {
//   try {
//     const { otp } = req.body;

//     // Check if OTP is provided
//     if (!otp) {
//       return res.status(400).json({ message: "OTP is required." });
//     }

//     // Find the user by OTP
//     const user = await userModel.findOne({ otp });

//     // Validate the OTP and check expiration
//     if (!user || Date.now() > user.otpExpiration) {
//       return res.status(400).json({ message: "Invalid or expired OTP." });
//     }

//     // Mark reset allowed for the user
//     user.resetAllowed = true; // Temporary flag for allowing reset
//     await user.save();

//     res.status(200).json({ message: "OTP verified successfully! You can now reset your password." });
//   } catch (error) {
//     console.error("Error in verifyOtp:", error.message);
//     res.status(500).json({
//       message: "Failed to verify OTP.",
//       error: error.message,
//     });
//   }
// };

// // reset password 
// export const resetPassword = async (req, res) => {
//   try {
//     const { newPassword, confirmNewPassword } = req.body;

//     if (!newPassword || !confirmNewPassword) {
//         return res.status(400).json({ message: "All fields are required." });
//       }
  
//       if (newPassword !== confirmNewPassword) {
//         return res.status(400).json({ message: "Passwords do not match." });
//       }

//     // Debug log to confirm the query
//     const user = await authModel.findOne({ resetAllowed: true });
//     console.log("User found:", user); // Add this line

//     if (!user) {
//       return res.status(400).json({ message: "Reset password not allowed or session expired." });
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     user.resetAllowed = false;
//     user.otp = undefined;
//     user.otpExpiration = undefined;
//     await user.save();

//     res.status(200).json({ message: "Password reset successfully!" });
//   } catch (error) {
//     console.error("Error in resetPassword:", error.message);
//     res.status(500).json({ message: "Failed to reset password.", error: error.message });
//   }
// };


 
 
  



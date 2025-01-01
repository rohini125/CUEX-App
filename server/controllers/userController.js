import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';

// Register User
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, contactNo, city, identificationType, identificationNumber } = req.body;

    // if (!firstName || !lastName || !email || !password || !confirmPassword || !contactNo || !city || !identificationType || !identificationNumber) {
    //   return res.status(400).json({ error: 'All fields are required' });
    // }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const existingUser  = await userModel.findOne({ email });
    if (existingUser ) {
      return res.status(400).json({ error: 'User  already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const registerUser  = new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      contactNo,
      city,
      identificationType,
      identificationNumber,
    });
    
console.log(registerUser);

    await registerUser .save();
    res.status(201).json({
      success: true,
      data: registerUser ,
      message: "User  registered successfully",
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User  Not Found. Please Sign Up First" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Password does not match. Please enter the correct password." });
    }

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//verify otp
export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    // Check if OTP is provided
    if (!otp) {
      return res.status(400).json({ message: "OTP is required." });
    }

    // Find the user by OTP
    const user = await authModel.findOne({ otp });

    // Validate the OTP and check expiration
    if (!user || Date.now() > user.otpExpiration) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    // Mark reset allowed for the user
    user.resetAllowed = true; // Temporary flag for allowing reset
    await user.save();

    res.status(200).json({ message: "OTP verified successfully! You can now reset your password." });
  } catch (error) {
    console.error("Error in verifyOtp:", error.message);
    res.status(500).json({
      message: "Failed to verify OTP.",
      error: error.message,
    });
  }
};

// reset password 
export const resetPassword = async (req, res) => {
  try {
    const { newPassword, confirmNewPassword } = req.body;

    if (!newPassword || !confirmNewPassword) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
      }

    // Debug log to confirm the query
    const user = await authModel.findOne({ resetAllowed: true });
    console.log("User found:", user); // Add this line

    if (!user) {
      return res.status(400).json({ message: "Reset password not allowed or session expired." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetAllowed = false;
    user.otp = undefined;
    user.otpExpiration = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully!" });
  } catch (error) {
    console.error("Error in resetPassword:", error.message);
    res.status(500).json({ message: "Failed to reset password.", error: error.message });
  }
};

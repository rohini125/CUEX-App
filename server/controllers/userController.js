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
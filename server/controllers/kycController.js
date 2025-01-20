// // import { sendOTP, verifyOTP } from '../services/kycService.js';

// // export const sendOtpController = async (req, res) => {
// //   const { documentType, documentNumber, mobileNumber } = req.body;

// //   if (!documentType || !documentNumber || !mobileNumber) {
// //     return res.status(400).json({ message: 'All fields are required' });
// //   }

// //   try {
// //     const response = await sendOTP(documentType, documentNumber, mobileNumber);
// //     res.status(200).json({ message: 'OTP sent successfully!', data: response });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // export const verifyOtpController = async (req, res) => {
// //   const { documentNumber, otp } = req.body;

// //   if (!documentNumber || !otp) {
// //     return res.status(400).json({ message: 'Document number and OTP are required' });
// //   }

// //   try {
// //     const response = await verifyOTP(documentNumber, otp);
// //     res.status(200).json({ message: 'KYC verification successful!', data: response });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };


// import express from 'express';
// import { sendOTP, verifyOTP } from '../services/kycService.js';

// const router = express.Router();

// // Route to send OTP
// router.post('/send-otp', async (req, res) => {
//   const { documentType, documentNumber, mobileNumber } = req.body;

//   if (!documentType || !documentNumber) {
//     return res.status(400).json({ message: 'Document type and number are required.' });
//   }

//   try {
//     const response = await sendOTP(documentType, documentNumber, mobileNumber);  // Pass mobileNumber (optional)
//     res.status(200).json({ message: 'OTP sent successfully!', data: response });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Route to verify OTP
// router.post('/verify-otp', async (req, res) => {
//   const { documentNumber, otp } = req.body;

//   if (!documentNumber || !otp) {
//     return res.status(400).json({ message: 'Document number and OTP are required' });
//   }

//   try {
//     const response = await verifyOTP(documentNumber, otp);
//     res.status(200).json({ message: 'KYC verification successful!', data: response });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// export default router;


// import { sendOTP } from '../services/kycService.js';

// export const handleOTPRequest = async (req, res) => {
//   try {
//     const { documentType, documentNumber, mobileNumber } = req.body;

//     // Validation for Document Number Based on Document Type
//     let isValid = false;
//     switch (documentType) {
//       case 'Aadhar':
//         isValid = /^[0-9]{12}$/.test(documentNumber);  // Aadhar must be 12 digits
//         break;
//       case 'PANCard':
//         isValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(documentNumber);  // PAN format ABCDE1234F
//         break;
//       case 'Passport':
//         isValid = /^[A-Za-z0-9]{8,10}$/.test(documentNumber);  // Passport 8-10 characters
//         break;
//       case 'DriversLicense':
//         isValid = /^[A-Z0-9]{6,16}$/.test(documentNumber);  // License 6-16 characters
//         break;
//       default:
//         throw new Error('Invalid document type.');
//     }

//     if (!isValid) {
//       return res.status(400).send('Invalid document number format.');
//     }

   

//     const result = await sendOTP(documentType, documentNumber, mobileNumber);
//     return res.status(200).json({ message: 'OTP sent successfully', result });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };


// import { sendOTP } from "../services/kycService.js";
// import { fetchMobileNumberFromAPI } from "../services/documentVerificationService.js"; // External API integration

// export const handleOTPRequest = async (req, res) => {
//   try {
//     const { documentType, documentNumber } = req.body;

//     // Validate input fields
//     if (!documentType || !documentNumber) {
//       return res.status(400).json({ error: "Document type and number are required." });
//     }

//     // Validation for Document Number Based on Document Type
//     let isValid = false;
//     switch (documentType) {
//       case "Aadhar":
//         isValid = /^[0-9]{12}$/.test(documentNumber); // Aadhar must be 12 digits
//         break;
//       case "PANCard":
//         isValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(documentNumber); // PAN format ABCDE1234F
//         break;
//       case "Passport":
//         isValid = /^[A-Za-z0-9]{8,10}$/.test(documentNumber); // Passport 8-10 characters
//         break;
//       case "DriversLicense":
//         isValid = /^[A-Z0-9]{6,16}$/.test(documentNumber); // License 6-16 alphanumeric
//         break;
//       default:
//         throw new Error("Invalid document type.");
//     }

//     if (!isValid) {
//       return res.status(400).json({ error: "Invalid document number format." });
//     }

//     // Fetch linked mobile number using an external API
//     const mobileNumber = await fetchMobileNumberFromAPI(documentType, documentNumber);
//     // if (!mobileNumber) {
//     //   return res.status(404).json({
//     //     error: `No linked mobile number found for the provided ${documentType} and number.`,
//     //   });
//     // }

//     // Send OTP to the fetched mobile number
//     const result = await sendOTP(documentType, documentNumber, mobileNumber);
//     return res.status(200).json({
//       message: "OTP sent successfully to the linked mobile number.",
//       result,
//     });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
import KYC from '../models/kycModel.js';
import twilio from 'twilio';
import jwt from 'jsonwebtoken';

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, JWT_SECRET } = process.env;
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Generate random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Verify mobile linked to document and send OTP
export const verifyMobileAndSendOTP = async (req, res) => {
  const { documentType, documentNumber } = req.body;

  
  if (!documentType || !documentNumber) {
    return res.status(400).json({ message: 'Document type and number are required!' });
  }

  try {
    const userKYC = await KYC.findOne({ documentType, documentNumber });

    if (!userKYC) {
      return res.status(404).json({ message: 'No linked mobile found for the provided document.' });
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

    userKYC.otp = otp;
    userKYC.otpExpiresAt = otpExpiry;
    await userKYC.save();
    console.log("reached");
    await client.messages.create({
      body: `Your OTP for KYC verification is: ${otp}`,
      from: TWILIO_PHONE_NUMBER,
      to: userKYC.linkedMobile,
    });

    console.log(`OTP sent to ${userKYC.linkedMobile}: ${otp}`);
    res.status(200).json({ message: 'OTP sent successfully to your linked mobile.' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing your request.', error });
  }
};

// Verify the received OTP
export const verifyOTP = async (req, res) => {
  const { documentType, documentNumber, otp } = req.body;

  if (!documentType || !documentNumber || !otp) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    const userKYC = await KYC.findOne({ documentType, documentNumber });

    if (!userKYC || userKYC.otp !== otp || new Date() > userKYC.otpExpiresAt) {
      return res.status(400).json({ message: 'Invalid or expired OTP!' });
    }

    userKYC.otp = null;
    userKYC.otpExpiresAt = null;
    userKYC.kycStatus = 'Verified';
    await userKYC.save();

    res.status(200).json({ message: 'KYC verified successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying OTP.', error });
  }
};

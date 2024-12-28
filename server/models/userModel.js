import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false, unique: false },
  password: { type: String, required: false },
  confirmPassword:{ type:String ,required:false},
  contactNo: { type: Number, required: false },
  identificationType: { type: String, required: false },
  identificationNumber: { type: String, required: false },
}, { timestamps: true });

const userModel = mongoose.model('registerData', userSchema);

export default userModel;
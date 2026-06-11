const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin', 'software_developer', 'technical_support', 'intern'], default: 'user' },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
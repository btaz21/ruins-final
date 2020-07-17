const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    unique: [true, "Username taken"],
    trim: true,
    minlength: [5, "Username must be at least 5 characters"]
  },
  password: {
    type: String,
    required: [true, "Password required"],
    minlength: [6, "Password must be at least 6 characters"]
  },
  userRuins: Array,
  comments: Array
},
  {timestamps: { currentTime: () => { Math.floor(Date.now() / 1000)} }}
);


const User = mongoose.model('User', userSchema)
module.exports = User;

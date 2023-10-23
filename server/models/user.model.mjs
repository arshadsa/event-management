import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto"

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must is required!"],
    validate: {
      validator: (value) => {
        const regex = /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/;
        return regex.test(value);
      },
      message: "Please provide a valid email",
    },
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password can't be empty!"],
    validate: {
      validator: (value) => {
        const regex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
        return regex.test(value);
      },
      message: "password {VALUE} is not strong enough.",
    },
  },
  role: {
    type: String,
    enum: ["user", "moderator", "admin"],
    default: "user"
  },
  firstName: {
    type: String,
    required: [true, "Please provide a first name"],
    trim: true,
    minLength: [2, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  },
  contactNumber: String,
  userImage: {
    imgUrl: {
      type: String,
      validate: {
        validator: (value)=>{
          const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
          return regex.test(value);
        },
        message: "The image url is invalid"
      },
    },
    cloudinaryId: String
  },
  provider: {
    type: String,
    default: "email",
    enum: ["email", "google"],
  },
  providerId: String,
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive", "blocked"],
  },
  confirmationToken: String,
  passwordResetToken: String,
  confirmationTokenExpires: Date,
  passwordResetExpires: Date,
  passwordChangedAt: Date
},
  { timestamps: true, }
)

// make password hased for security
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const password = this.password;
  const hashPassword = await bcrypt.hash(password, 8);
  this.password = hashPassword;
  this.passwordChangedAt = new Date();
  this.passwordResetToken = undefined;
  this.passwordResetExpires = undefined;
  this.confirmPassword = undefined;
  next()
})

// create method for compare password
userSchema.methods.comparePassword = async function (password, hash) {
  return await bcrypt.compare(password, hash)
}

// create method for user confirmation token
userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomUUID();
  this.confirmationToken = token;
  const date = new Date();
  // get tomorrow / expire date is 1 day.
  date.setDate(date.getDate() + 1);
  this.confirmationTokenExpires = date;
  return token;
};
// create method for user password reset token
userSchema.methods.generatePasswordResetToken = function () {
  const token = crypto.randomUUID();
  this.passwordResetToken = token;
  const date = new Date();
  // get tomorrow / expire date is 1 day.
  date.setDate(date.getDate() + 1);
  this.passwordResetExpires = date;
  return token;
};

// automatically delete inactive user from database after 1 day
// userSchema.index({ confirmationTokenExpires: 1 }, { expireAfterSeconds: 0 });

const User = mongoose.model("User", userSchema);

export default User
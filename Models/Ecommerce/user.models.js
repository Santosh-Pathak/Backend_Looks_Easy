import mongoose, { mongo, trusted } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      typr: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password : {
        type : String,
        required : true,
    },
    
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

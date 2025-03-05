
import mongoose from "mongoose";
import {Document} from "mongoose";
import bcrypt from "bcrypt"


interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

type IUserModel = mongoose.Model<IUser> & {};


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
   
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schema.pre<IUser>("save",async function (next){
  if (!this.isModified("password")) return next();

  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
})

schema.methods.comparePassword = async function(candidatePassword){
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser, IUserModel>("User", schema);

import { Schema, model } from "mongoose";

export interface User extends Document {
    _id:string
    email: string;
    password: string;
}

const userSchema = new Schema<User>({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
});

const userModel = model("User", userSchema, "users");
export default userModel;
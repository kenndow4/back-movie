import { Schema, model } from "mongoose";

export interface Upload {
    title:string;
    description:string;
    year:number;
    poster:string;
    link:string;
}

export const uploadSchema = new Schema<Upload>({
    title:{type:String, required:true},
    description:{type:String, required:true},
    year:{type:Number, required:true},
    poster:{type:String, required:true},
    link:{type:String, required:true},
});

export const uploadModel = model("Upload", uploadSchema, "uploaded");

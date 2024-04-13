import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import 'dotenv/config'
import userModel, { User } from "../models/auth";


export const auth = async (req:Request, res:Response)=>{
    const userData:User = req.body;
    try{

        const user:User | null = await userModel.findOne({ email: userData.email })
        if(user){
           if(userData.password === user.password){
            const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' }); // Aquí debes usar tu clave secreta y definir el tiempo de expiración
    
                    // Enviar la cookie JWT al cliente
                    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });
            return res.json({ok:true, });
           }else{
            
            return res.json({ok:false, message:"Email o contrase incorrecta"});
           }
        }else{
            console.log("no");
        }
    }catch(e){
        console.error('Error al autenticar usuario:', e);
        return res.status(500).json({ ok: false, message: 'Error interno del servidor' });
    
    }

};
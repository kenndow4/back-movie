import { Request, Response } from "express";
import { Upload,uploadModel } from "../models/upload";


export const upload = async (req: Request, res: Response) => {
    try {
        // Extrae los datos recibidos del cuerpo de la solicitud
        const { title, description, year, poster, link }: Upload = req.body;
        
        // Crea una instancia del modelo Upload con los datos recibidos
        const newUpload = new uploadModel({
            title,
            description,
            year,
            poster,
            link
        });
        
        // Guarda el nuevo objeto Upload en la base de datos
        const savedUpload = await newUpload.save();
        
        // Responde con el objeto guardado en la base de datos
        res.json(savedUpload);
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
        res.status(500).json({ error: "error"});
    }
};



export const getUpload = async (req: Request, res: Response) => {
    try {
        const uploads: Upload[] = await uploadModel.find();
        res.status(200).json(uploads);
    } catch (e) {
        res.status(500).json({ error: "Error al obtener los datos" });
    }
};

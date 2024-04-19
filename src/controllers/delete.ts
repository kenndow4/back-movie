import { Request, Response } from "express";


export const deleteU = async (req: Request, res: Response) => {
    try {
     
        const id = req.body;
        console.log(id); 

    } catch (error) {
        res.status(500).json({ error: "Error en la búsqueda" });
    }
};
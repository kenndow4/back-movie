import { Request, Response } from "express";
import { uploadModel } from "../models/upload";

export const search = async (req: Request, res: Response) => {
    try {
        const { search }: { search: string } = req.body;

        const results = await uploadModel.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ]
        }).limit(10);

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Error en la búsqueda" });
    }
};



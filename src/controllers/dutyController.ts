import { Request, Response } from 'express';
import * as dutyService from '../services/dutyService';

export const getDuties = async (req: Request, res: Response) => {
    const duties = await dutyService.getDuties();
    res.json(duties);
};

export const createDuty = async (req: Request, res: Response) => {
    const { name } = req.body;
    const newDuty = await dutyService.createDuty(name);
    res.status(201).json(newDuty);
};

export const updateDuty = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedDuty = await dutyService.updateDuty(id, name);
    res.json(updatedDuty);
};

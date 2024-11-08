import { Request, Response } from 'express';
import * as dutyService from '../services/dutyService';

export const getDuties = async (req: Request, res: Response) => {
    const duties = await dutyService.getDuties();
    res.json(duties);
};

export const createDuty = async (req: Request, res: Response) => {
    console.log(req.body);
    const { name } = req.body;
    const newDuty = await dutyService.createDuty(name);
    res.status(201).json(newDuty);
};

export const updateDuty = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedDuty = await dutyService.updateDuty(id, name);
    res.status(200).json(updatedDuty);
};

export const removeDuty = async (req: Request, res: Response) => {
    const { id } = req.params;
    const removedDuty = await dutyService.removeDuty(id);
    res.status(200).json(Boolean(removedDuty));
};

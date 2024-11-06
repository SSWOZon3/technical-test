import pool from '../db';
import { Duty } from '../models/dutyModel';

export const getDuties = async (): Promise<Duty[]> => {
    const res = await pool.query('SELECT * FROM duties');
    return res.rows;
};

export const createDuty = async (name: string): Promise<Duty> => {
    const res = await pool.query('INSERT INTO duties (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
};

export const updateDuty = async (id: string, name: string): Promise<Duty> => {
    const res = await pool.query('UPDATE duties SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    return res.rows[0];
};

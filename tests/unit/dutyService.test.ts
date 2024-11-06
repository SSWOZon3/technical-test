import * as dutyService from '../../src/services/dutyService';
import pool from '../../src/db';
import { Duty } from '../../src/models/dutyModel';

jest.mock('../../src/db');

describe('Duty Service', () => {
    const mockQuery = pool.query as jest.Mock;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return an array of duties (getDuties)', async () => {
        const duties: Duty[] = [{ id: '1', name: 'Random name' }];
        mockQuery.mockResolvedValue({ rows: duties });

        const result = await dutyService.getDuties();
        expect(result).toEqual(duties);
        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM duties');
    });

    it('should create a new duty and return it (createDuty)', async () => {
        const newDuty: Duty = { id: '2', name: 'Random name' };
        mockQuery.mockResolvedValue({ rows: [newDuty] });

        const result = await dutyService.createDuty('Random name');
        expect(result).toEqual(newDuty);
        expect(mockQuery).toHaveBeenCalledWith(
            'INSERT INTO duties (name) VALUES ($1) RETURNING *',
            ['Random name']
        );
    });

    it('should update the duty and return it (updateDuty)', async () => {
        const updatedDuty: Duty = { id: '1', name: 'Random name' };
        mockQuery.mockResolvedValue({ rows: [updatedDuty] });

        const result = await dutyService.updateDuty('1', 'Random name');
        expect(result).toEqual(updatedDuty);
        expect(mockQuery).toHaveBeenCalledWith(
            'UPDATE duties SET name = $1 WHERE id = $2 RETURNING *',
            ['Random name', '1']
        );
    });
});

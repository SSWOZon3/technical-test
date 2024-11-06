import request from 'supertest';
import express, { Application } from 'express';
import dutyRoutes from '../../src/routes/dutyRoutes';
import pool from '../../src/db';

const app: Application = express();
app.use(express.json());
app.use('/duties', dutyRoutes);

jest.mock('../../src/db');

describe('Duty Routes', () => {
    const mockQuery = pool.query as jest.Mock;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return a list of duties in GET /duties endpoint', async () => {
        const duties = [{ id: '1', name: 'Test Duty' }];
        mockQuery.mockResolvedValue({ rows: duties });

        const response = await request(app).get('/duties');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(duties);
    });

    it('should creat a new duty and return it in POST /duties endpoint', async () => {
        const newDuty = { id: '2', name: 'New Duty' };
        mockQuery.mockResolvedValue({ rows: [newDuty] });

        const response = await request(app)
            .post('/duties')
            .send({ name: 'New Duty' });

        expect(response.status).toBe(201);
        expect(response.body).toEqual(newDuty);
    });

    it('should update an existing duty in PUT /duties/:id endpoint', async () => {
        const updatedDuty = { id: '1', name: 'Updated Duty' };
        mockQuery.mockResolvedValue({ rows: [updatedDuty] });

        const response = await request(app)
            .put('/duties/1')
            .send({ name: 'Updated Duty' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedDuty);
    });
});

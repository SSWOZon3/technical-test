import express from 'express';
import dutyRoutes from './routes/dutyRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use('/duties', dutyRoutes);

app.listen(port, () => {
    console.log(`Server sis running on port ${port}`);
});

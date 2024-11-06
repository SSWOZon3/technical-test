import express from 'express';
import dutyRoutes from './routes/dutyRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/duties', dutyRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

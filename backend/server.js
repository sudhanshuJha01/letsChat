import express from 'express';
import dotenv from 'dotenv';
import rootRouter from './router/index.js'
import connectDB from './db/index.js';
dotenv.config();

const port = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use('/api/v1',rootRouter);

app.get('/test',(req , res)=>{
    res.send("App is working well")
    
})

app.listen(port,()=>{
    console.log(`Our server is running on the port ${port}`);
    connectDB();
})

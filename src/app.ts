import express from 'express';
import * as dotenv from 'dotenv';

// main app
const app = express();

// environment variables
dotenv.config();

// server 
const PORT: number = parseInt(process.env.PORT as string);
const server = app.listen(PORT, () => { console.log("Server is running.") });

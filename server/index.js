import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import Connection from './database/db.js';



const app = express();

// const DP_PATH = "mongodb+srv://user:codeforinterview@cluster0.dd5tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(DP_PATH);

const PORT = 8000;

app.listen(PORT,() => console.log(`Server is running successfully on PORT  ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
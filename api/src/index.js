import 'dotenv/config';

import cors from 'cors';
import express from 'express';

const server =express();
server.use(cors());
server.use(express.json());


const PORT= process.env.PORT();
server.listen(PORT, () => console.log('API Subiu!!!' + PORT));''
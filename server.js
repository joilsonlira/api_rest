import express, { Router } from 'express';
const server = express();
import router from './src/routes.js';

const port = process.env.PORT || 3000;

server.use(express.json());
server.use(router);

server.listen(port, ()=> console.log('RODANDO...'))
import express from 'express';
import { Port } from './config';
import { cardsRouter } from './routers/cards.routers';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello, World!');
});


server.use('/cards', cardsRouter);


server.listen(Port);



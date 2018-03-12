import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { serverPort } from '../etc/config.json';

import * as db from './utils/dbutils';

db.setUpConnection();

const app = express();
//app.use(express.static(path.resolve(__dirname,"..", "public", "index.html")));
app.use( bodyParser.json() );
app.use(cors({origin: '*'}));

app.get('/', (req,res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/', (req,res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req,res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () =>{
    console.log('Server is up and running on port '+ serverPort);
});
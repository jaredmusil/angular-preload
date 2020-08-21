/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

const dogs = [
  { id: '1' , name: 'Rufus'},
  { id: '2' , name: 'Max'},
  { id: '3' , name: 'Fido'},
];

const turtles = [
  { id: '1' , name: 'Donatello'},
  { id: '2' , name: 'AA'},
  { id: '3' , name: 'BB'},
];

const cats = [
  { id: '1' , name: 'Rufus'},
  { id: '2' , name: 'Max'},
  { id: '3' , name: 'Fido'},
];

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });b
});

app.get('/api/dog/:id', (req, res) => {
  res.send(dogs[1]);
});

app.get('/api/dogs', (req, res) => {
  res.send(dogs);
});

app.get('/api/cat/:id', (req, res) => {
  res.send({ id: '1', name: 'Snowball' });
});

app.get('/api/cats', (req, res) => {
  res.send({ id: '1', name: 'Snowball' });
});

app.get('/api/turtles', (req, res) => {
  res.send({ message: 'Dog1' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

import * as express from 'express';

const app = express();

const dogs = [
  { id: '1' , name: 'Rufus'},
  { id: '2' , name: 'Max'},
  { id: '3' , name: 'Fido'},
  { id: '4' , name: 'Barkley'},
  { id: '5' , name: 'Clifford'},
];

const turtles = [
  { id: '1' , name: 'Donatello'},
  { id: '2' , name: 'Raphael'},
  { id: '3' , name: 'Michelangelo'},
  { id: '4' , name: 'Donatello'},
  { id: '5' , name: 'Ricky Tabby'},
];

const cats = [
  { id: '1' , name: 'Snowball'},
  { id: '2' , name: 'Mr. Pickles'},
  { id: '3' , name: 'Jennifurr'},
];

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/dog/:id', (req, res) => {
  res.send(dogs[0]);
});

app.get('/api/dogs', (req, res) => {
  res.send(dogs);
});

app.get('/api/cat/:id', (req, res) => {
  res.send(this.cats[0]);
});

app.get('/api/cats', (req, res) => {
  res.send(this.cats);
});

app.get('/api/turtle/:id', (req, res) => {
  res.send(turtles[0]);
});

app.get('/api/turtles', (req, res) => {
  res.send(this.turtles);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

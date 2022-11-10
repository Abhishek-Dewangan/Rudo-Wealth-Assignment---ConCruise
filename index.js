const express = require('express');
const connection = require('./database');
const { CruiserModel } = require('./model/cruisersModel');
const { CustmerModel } = require('./model/custmerModel');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/addCruiser', (req, res) => {
  const body = req.body;
  const cruiser = new CruiserModel(body);
  cruiser.save();
  res.status(201).send(`${cruiser.name} has been resister successfully`);
});

app.post('/:cruiserId/addCustmer', async (req, res) => {
  const { cruiserId } = req.params;
  const body = req.body;
  // console.log(cruiserId);
  // const cruiser = await CruiserModel.findById({ _id: cruiserId });
  const custmer = new CustmerModel({ ...body, driver: cruiserId });
  custmer.save();
  res.status(201).send(`${body.name} has been added successfully`);
});

app.put('/:cruiserId/updateCustmer', async (req, res) => {
  const { cruiserId } = req.params;
  const custmers = await CustmerModel.find({ driver: cruiserId });
  res.send(custmers);
});

app.listen(port, async () => {
  try {
    await connection;
    console.log('Application is connected to database');
    console.log('App is running on http://localhost:8080');
  } catch {
    console.log('Connection Failed');
  }
});

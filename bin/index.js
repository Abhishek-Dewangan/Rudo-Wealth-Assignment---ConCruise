#! /usr/bin/env node
const express = require('express');
const connection = require('../database');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Bin');
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

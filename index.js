const express = require('express');
const connection = require('./database');
const { CruiserModel } = require('./model/cruisersModel');
const { CustomerModel } = require('./model/customerModel');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to ConCruise World');
});

// To see all cruisers
app.get('/allCruisers', async (req, res) => {
  const cruisers = await CruiserModel.find({}, { _id: 0, name: 1, number: 1 });
  res.status(200).send(cruisers);
});

// To see all customers
app.get('/allCustomers', async (req, res) => {
  const customers = await CustomerModel.find(
    {},
    { name: 1, numberOfRides: 1, cruiserName: 1 }
  );
  res.status(200).send(customers);
});

// To add cruisers
app.post('/addCruiser', async (req, res) => {
  const body = req.body;
  const cruiserExist = await CruiserModel.find({ email: body.email });
  if (cruiserExist.length) {
    res.status(422).send('Email already exist');
  } else {
    const cruiser = new CruiserModel(body);
    cruiser.save();
    res.status(201).send({
      message: `${cruiser.name} has been resister successfully`,
      id: cruiser._id,
    });
  }
});

// To get your customer id
app.post('/getCruiserId', async (req, res) => {
  const cruiserEmail = req.body.email;
  const cruiser = await CruiserModel.find({ email: cruiserEmail });
  res.send(cruiser);
});

// To add customers by cruiser
app.post('/:cruiserId/addCustomer', async (req, res) => {
  const { cruiserId } = req.params;
  const body = req.body;
  const cruiser = await CruiserModel.findById(cruiserId);
  const customer = new CustomerModel({
    ...body,
    driver: cruiserId,
    cruiserName: cruiser.name,
  });
  customer.save();
  res.status(201).send({
    message: `${body.name} has been added successfully`,
    id: customer._id,
  });
});

// To update customer data by cruiser
app.put('/:cruiserId/:customerId/updateCustomer', async (req, res) => {
  const { cruiserId, customerId } = req.params;
  const updatedData = req.body;
  const customer = await CustomerModel.updateOne(
    {
      driver: cruiserId,
      _id: customerId,
    },
    updatedData
  );
  const updatedCusomer = await CustomerModel.findById(customerId);
  if (customer.modifiedCount) {
    res.status(201).send({ message: 'Customer updated', updatedCusomer });
  } else {
    res.status(202).send('Not found any changes to update');
  }
});

// To delete customer by thier cruisers
app.delete('/:cruiserId/deleteCustomer', async (req, res) => {
  const { cruiserId } = req.params;
  const customers = req.body.customers;
  const customer = await CustomerModel.deleteMany({
    _id: { $in: customers },
    driver: cruiserId,
  });
  if (customer.deletedCount) {
    res.status(202).send('Deleted successfully');
  } else {
    res.status(204).send('Customer not found');
  }
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

const cors = require('cors');
const express = require('express');
const { getAllEmployees, getEmployeesById } = require('./controllers');

const app = express();
app.use(cors());
app.use(express.json());

//endpoint to get all employees
app.get('/employees', async (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});

//endpoint to get employee details by id
app.get('/employees/details/:id', async (req, res) => {
  let employee = getEmployeesById(parseInt(req.params.id));

  res.json({
    employee,
  });
});

app.get('/', (req, res) => {
  res.send('BD6.6 - CW');
});

module.exports = { app };

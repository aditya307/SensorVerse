const express = require('express');
const bodyPraser = require('body-parser');
const connectDB = require('./db');
const path = require('path');
const data = require('./dataRoute');

connectDB();
const app = express();
app.use(express.json());

app.use('/node/data', data);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`);
});

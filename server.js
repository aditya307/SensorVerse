const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const path = require('path');
const data = require('./dataRoute');

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/table', async (req, res) => {
  res.sendFile(path.join(__dirname + '/public/table.html'));
});

app.use('/node/data', data);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`);
});

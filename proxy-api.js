const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const BASE_URL = 'https://api.eosnewyork.io/v1';

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser());
app.use(cors());
app.get('/healthcheck', (req, res) => res.send('Proxy is working'));
app.post('/get_abi', async (req, res) => {
  try {
    const { account_name } = req.body;
    const response = await axios.post(`${BASE_URL}/chain/get_abi`, {
      account_name: account_name
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

app.listen(port, () => console.log(`Proxy listening on ${port}`));

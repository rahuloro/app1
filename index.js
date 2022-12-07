const axios = require('axios');
// create a basic node app with express
const app = require('express')();

const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
  console.log(`Its App 1, ${process.env.APPID}`);
  return res.send(`Its App 1, ${process.env.APPID}`);
});

app.get('/call', async (req, res) => {
  const baseURL = process.env.EXTERNAL_APP || 'localhost:2000';
  console.log('In app1 baseUrl', baseURL);

  const config = {
    url: `http://${baseURL}`,
    method: 'get',
  };

  const response = await axios(config);
  console.log(response.data);
  return res.json(`App 1 called app2: ${response.data}`);
});

app.listen(
  process.env.PORT || 2001,
  console.log(`Listen on port: ${process.env.PORT}`)
);

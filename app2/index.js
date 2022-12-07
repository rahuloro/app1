const axios = require('axios');

// create a basic node app with express
const app = require('express')();

app.get('/', (req, res) => {
  console.log(`Its App 2, ${process.env.APPID}`);
  return res.send(`Its App 2, ${process.env.APPID}`);
});

app.get('/call', async (req, res) => {
  const baseURL = process.env.EXTERNAL_APP || 'localhost:2001';
  console.log('In app2 baseUrl', baseURL);

  const config = {
    url: `http://${baseURL}`,
    method: 'get',
  };
  const response = await axios(config);
  console.log(response.data);
  return res.json(`App 2 called app1: ${response.data}`);
});

app.listen(
  process.env.PORT || 2002,
  console.log(`Listen on port: ${process.env.PORT}`)
);

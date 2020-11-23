const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const distances = [];

app.use(bodyParser.json());

app.get('/api/distance', (req, res) => {
   console.log(res,req);
   res.body = { distance : distances}
   res.send(res.body)
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

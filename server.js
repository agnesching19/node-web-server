const express = require('express');
const app = express();

app.get('/', (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  response.send({
    name: 'Agnes',
    sports: [
      'running',
      'swimming'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: '404 - Wrong turn'
  });
});

app.listen(3000);

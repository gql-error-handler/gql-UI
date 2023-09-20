const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlendcoded({ extended: true }));
app.use(express.json());

// serve index.html and static files
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use(express.static(path.resolve(__dirname, '../assets')));


// wildcard end path
app.use('/*', (req, res) => {
  return res.status(400).json('endpoint not found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Uknown Middleware error occurred',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT);

module.exports = app;
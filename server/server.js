const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../build')));
}

// serve index.html and static files
// app.use(express.static(path.resolve(__dirname, '../client/assets')));
app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});


// wildcard end path
app.use('/*', (req, res) => {
  return res.status(404).json('File not found');
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

// module.exports = app;
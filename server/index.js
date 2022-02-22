const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('../apiRoutes'));

// Make sure this is right at the end of your server logic!
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/'));
});

// 500 error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
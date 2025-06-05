// server/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const conn = require('./db/database'); // Your DB connection file

app.use(express.json());

// CORS setup: Allow localhost:3000 for dev, disable or restrict in production
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: 'http://localhost:3000',
  }));
}

// API routes
const login = require('./routes/login');
const register = require('./routes/register');
const Product = require('./routes/product');

app.use('/login', login);
app.use('/register', register);
app.use('/product', Product);

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

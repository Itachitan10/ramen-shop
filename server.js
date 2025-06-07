// server/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const conn = require('./db/database'); 
app.use(express.json());


  app.use(cors({
    origin: 'http://localhost:3000',
  }));

// API routes
const login = require('./routes/login');
const register = require('./routes/register')
const product =require('./routes/product')



app.use('/', login);
app.use('/', register);
app.use('/', product);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on porthttp://localhost:${port}`);
});

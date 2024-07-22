const express = require('express');
const app = express();

// cors
const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
  }

  next();
};

// Use the CORS middleware
app.use(cors);

// body parser
app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const router = require('./routes/routes');

const databaseConnection = require('./config/database');
databaseConnection();

app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
});


app.get('/' , (req , res)=> {
    res.send(`<h1>Api is running on port ${PORT}...</h1>`);
})

app.use('/api/v1' , router);



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const app = express();


app.use(express.json());


const mongoURI = process.env.MONGO_URI;

const db=async ()=>{await mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to database: ', error);
  });
}
db()
app.get('/', (req, res) => {
  res.send('Customer Management System Backend is running');
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
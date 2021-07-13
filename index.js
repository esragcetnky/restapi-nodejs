import express from 'express';
//const express=require('express');

//bodyparser allows take in incoming post request bodies
//import bodyParser from 'body-parser'; 
//const bodyParser=require('body-parser');

import userRoutes from './routes/users.js';


// initialize our express application
const app=express();
const PORT=5000;

// json - javascript object notation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// root route
app.get('/', (req, res) =>{
  console.log('[TEST]!');
  res.send("Hello from Homepage.")
});

// get requets for all users
app.use('/users',userRoutes);

app.listen(PORT, () => console.log(`Server Running on port : http://localhost:${PORT}`));

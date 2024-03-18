const express = require('express');
const app =express();
const cors= require('cors');
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use('/notify',require('./routes/push'))
app.use('/publish',require('./routes/publish'))
app.listen(PORT,()=>{
  console.log(`server started at port ${PORT}`)
})
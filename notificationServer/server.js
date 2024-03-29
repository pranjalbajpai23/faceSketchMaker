/* eslint-disable no-undef */

// imported express js
const express = require("express");

// initilization of express
const app = express();


//cros origin resource sharing
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3500;

//this is used for communicaaton json data, also a middleware
app.use(express.json());


// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//end points we have created
app.use("/notify", require("./routes/push"));
app.use("/publish", require("./routes/publish"));
//     - notify - we are puting the criminal - put
//api-|
//     - publish - we are getting the detials of criminal that we have to find -get
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});



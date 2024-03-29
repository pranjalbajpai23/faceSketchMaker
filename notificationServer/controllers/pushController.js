/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const handlePush = (req, res) => {
  console.log("Request Body:", req.body);
  if (!req?.body?.name || !req?.body?.pic) {
    return res.status(400).json({ message: "Kindly supply all params" });
  }
  const name = req.body.name;
  const pic = req.body.pic;
  const data = `${name},${pic}\n`;
  // Path to the file within the modal folder
  const filePath = path.join(__dirname, "../modal/criminal.txt");

  // Write the name to the file
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error saving data:", err);
      return res.status(500).json({ message: "Error saving data" });
    }
    console.log("Data saved successfully:", name);
    return res.status(200).json({ message: "Data saved successfully" });
  });
};


module.exports = {
  handlePush,
};

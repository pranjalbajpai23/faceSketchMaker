const fs = require("fs");
const path = require("path");

const handlePublish = (req, res) => {
  // Path to the file within the modal folder
  const filePath = path.join(__dirname, "../modal/criminal.txt");

  // Read the content of the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading name from file:", err);
      return res.status(500).json({ message: "Error reading name from file" });
    }
    const detail = data.split(",");
    const name = detail[0].trim(); // Trim whitespace characters
    const pic = detail[1].trim();
    return res.status(200).json({ name: name, pic: pic });
  });
};

module.exports = {
  handlePublish,
};

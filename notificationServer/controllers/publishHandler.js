const fs = require('fs');
const path = require('path');

const handlePublish = (req, res) => {
  // Path to the file within the modal folder
  const filePath = path.join(__dirname, '../modal/name.txt');

  // Read the content of the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading name from file:', err);
      return res.status(500).json({ message: "Error reading name from file" });
    }
    
    const name = data.trim(); // Trim whitespace characters

    return res.status(200).json({ name: name, pic: "image link" });
  });
};

module.exports = {
  handlePublish
};

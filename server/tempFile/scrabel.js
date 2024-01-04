const fs = require("fs");

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Read each JSON file and parse its content
const fileNames = ["apple.json", "samsung.json", "xiaomi.json", "realme.json"];
const allData = [];

fileNames.forEach((fileName) => {
  const fileContent = fs.readFileSync(fileName, "utf8");
  const jsonData = JSON.parse(fileContent);

  // Merge data from each file into one array (or object, depending on your needs)
  allData.push(...jsonData.items);
});

// Shuffle the merged data
const shuffledData = shuffleArray(allData);

// Save the shuffled data to a new JSON file
const shuffledFileName = "items.json";
fs.writeFileSync(shuffledFileName, JSON.stringify(shuffledData, null, 2));

console.log(`Shuffled data saved to ${shuffledFileName}`);

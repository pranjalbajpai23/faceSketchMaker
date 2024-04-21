/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
//Yaha par add karna hai  code
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */

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
    var link=pic.split("\\");
    link=link[1];
    const message = `Hello Officer you have an new notification\n \n Name: ${name}`;
    console.log(link);
    const lastPhotoSent = path.join(__dirname, "../modal/sent.txt");
    fs.readFile(lastPhotoSent, "utf8", (err, data)=>{
      if (data != link) {
        phoneNumbers.map((phoneNumber) => {
          client.messages
            .create({
              body: message,
              from: "whatsapp:+14155238886",
              mediaUrl: `https://pranjalbajpai23.github.io/faceSketchMaker/public/faces/${link}`,
              to: `whatsapp:+91${phoneNumber}`,
            })
            .then((message) => {
              console.log("Message sent successfully", message);
              if (phoneNumber == "6386674090") {
                fs.writeFile(lastPhotoSent, link, (err) => {
                  if (err) {
                    console.error("Error saving data:", err);
                  }
                  console.log("SENT Link saved successfully:", link);
                });
                return res.status(200).json({ name: name, pic: pic });
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({ message: "Internal server error" });
            });
        });
      } else {
        return res.status(200).json({ name: name, pic: pic });
      }
    })
    
  });
};





module.exports = {
  handlePublish,
};

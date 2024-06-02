# Project Setup and Run Instructions

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- Twilio Account (for WhatsApp integration)

## Steps to Setup and Run the Project

1. **Install Frontend Dependencies:**
   Open the project folder in your terminal and run the following command to install the necessary Node.js packages:
   ```bash
   npm install
   ```

2. **Start the Frontend Development Server:**
   Once the dependencies are installed, start the development server by running:
   ```bash
   npm run dev
   ```

3. **Setup and Run the Backend Server:**
   Navigate to the backend folder in your terminal:
   ```bash
   cd backend
   ```
   Run the backend server using Python:
   ```bash
   pip install -r requirement.txt
   python app.py
   ```

4. **Configure Twilio in Notification Server:**
   Navigate to the `notification_server` folder, then go to `controllers > publishHandler.js` and enter your Twilio SID and WhatsApp number in the required places in the code:
   ```j
   //Example entry (replace with your actual credentials)
   const client = require("twilio")(
  "Twilio SID 1",
  "Twilio SID 2"
   );
  const phoneNumbers = ["Phone number of station 1", "Phone number of station 2"]; 
  ```

5. **Start the Notification Server:**
   Open the `notificationServer` folder in your terminal:
   ```bash
   cd notification_server
   npm i
   ```
   Run the server using Node.js:
   ```bash
   node server.js
   ```

6. **Connect WhatsApp to Twilio:**
   To connect your WhatsApp number to Twilio, send a message from your WhatsApp to Twilio with the text "join locate-ordinary":
   - Open WhatsApp
   - Send a message to Twilio's provided number with the text: 
     ``` 
     join locate-ordinary 
     ```

## Summary of Commands
For quick reference, here is a summary of the commands you will need to run:

```bash
# In the project root folder
npm install
npm run dev

# In the backend folder
cd backend
pip install -r requirement.txt
python app.py

# In the notification server folder
cd ../notification_server
npm i
node server.js
```

By following these steps, you should have the project up and running with all servers operational. Ensure you have properly configured your Twilio credentials and connected your WhatsApp number for the notification functionality to work correctly. 
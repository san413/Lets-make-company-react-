const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// The file path where contacts will be saved
const FILE_PATH = './contacts.json';

// POST route to handle form submissions
app.post('/api/contact', (req, res) => {
  const newContact = req.body;

  // Check if the contacts.json file exists, otherwise, initialize an empty array
  const data = fs.existsSync(FILE_PATH) ? JSON.parse(fs.readFileSync(FILE_PATH)) : [];

  // Add the new contact to the existing data
  data.push(newContact);

  // Save the updated contact data back to the JSON file
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

  // Send a success response
  res.status(201).json({ message: 'Contact saved successfully' });
});

// Listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

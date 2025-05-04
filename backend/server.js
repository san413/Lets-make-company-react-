const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const FILE_PATH = './contacts.json';

app.use(cors());
app.use(bodyParser.json());

// POST: Save contact
app.post('/api/contact', (req, res) => {
  const newContact = req.body;
  const data = fs.existsSync(FILE_PATH) ? JSON.parse(fs.readFileSync(FILE_PATH)) : [];
  data.push(newContact);
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  res.status(201).json({ message: 'Contact saved successfully' });
});

// GET: Retrieve all contacts with error logging
app.get('/api/contacts', (req, res) => {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = JSON.parse(fs.readFileSync(FILE_PATH));
      res.json(data);
    } else {
      res.json([]); // Return empty array if no file exists
    }
  } catch (error) {
    console.error('Error reading contacts file:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

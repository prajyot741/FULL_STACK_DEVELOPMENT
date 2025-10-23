const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a POST endpoint to receive form data
app.post('/submit-form', (req, res) => {
  const { name } = req.body;
  console.log('Received name:', name);

  // Here you can add database save logic or other processing
  res.json({ message: `Form data received: ${name}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



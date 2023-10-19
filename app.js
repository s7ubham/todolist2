const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the public directory (where your index.html is located)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server now is running on http://localhost:${PORT}`);
});
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`A szerver fut: http://localhost:${PORT}`);
});
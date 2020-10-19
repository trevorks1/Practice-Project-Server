const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server Running: ${PORT}`);
});

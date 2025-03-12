const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
    res.json({ message: "Hello, world!", status: "success" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
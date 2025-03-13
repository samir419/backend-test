const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

app.get('/data', (req, res) => {
    res.json({ message: "Hello, world!", status: "success" });
});

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

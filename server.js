const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from Day2 directory
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'));
});

app.listen(PORT, () => {
    console.log(`Calculator app running at http://localhost:${PORT}`);
});

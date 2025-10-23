const express = require('express');
const app = express();
const PORT = 4002;


console
app.get('/getteacher', (req, res) => {
    res.json({ users: ['student',],from: 'role service' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
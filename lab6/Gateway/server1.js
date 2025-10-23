const express = require('express');
const app = express();
const PORT = 4001;


console
app.get('/getstudent', (req, res) => {
    res.json({ 
        users: [
            { name: 'Prajyot', age: 21 },
            { name: 'bhabad', age: 21 }
        ],
        from: 'role student service'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
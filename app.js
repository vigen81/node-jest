const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({data: 'Hello world'});
})

app.listen(3003, () => {
    console.log('Server is now runnitng');
})
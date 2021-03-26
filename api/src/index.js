const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('Service api is working')
});

app.listen(3000, () => {
    console.log('Server start')
})
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/test', (req, res) => {
    res.send('Service api is working')
});

app.listen(port, () => {
    console.log(`Server start on port: ${port}`);
})
const express = require('express');
const { port } = require("./configuration");
const { connectDB } = require("./helpers/db");
const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server auth start on port: ${port}`);
    })
}

app.get('/test', (req, res) => {
    res.send('Service auth is working')
});

connectDB()
    .on('error', () => console.log)
    .on('disconnect', connectDB)
    .once('open', startServer)
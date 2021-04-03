const express = require('express');
const { port, authApiUrl } = require("./configuration");
const { connectDB } = require("./helpers/db");
const Mongoose = require('mongoose');
const axios = require('axios');

const app = express();

const postSchema = new Mongoose.Schema({
    name: String,
});
const Post = Mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server start on port: ${port}`);
        const silence = new Post({name: 'Silence'});
        console.log({name: silence});
    })
}

app.get('/test', (req, res) => {
    res.send('Service api is working')
});

app.get('/testWithCurrentUser', (req, res) => {
    axios.get(`${authApiUrl}/currentUser`).then(({ data }) => {
        res.json({
            authApiUrl,
            currentUserFromAuthService: data,
        })
    })
})

connectDB()
    .on('error', () => console.log)
    .on('disconnect', connectDB)
    .once('open', startServer)
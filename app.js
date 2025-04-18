const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const cors = require('cors');
const Parser = require('rss-parser');
const port = 3000;
const parser = new Parser();
const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/feed', async (req, res) => {
    const url = req.query.url;

    try {
        const feed = await parser.parseURL(url);
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});






app.listen(port, ()=>console.log(`app is runnig at port ${port}`));
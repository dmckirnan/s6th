const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));


const server = app.listen(port, () => console.log('Express listening on 8000'));

module.exports = server;

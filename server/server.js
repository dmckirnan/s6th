const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
const server = app.listen(8000, () => console.log('Listening on 8000'));

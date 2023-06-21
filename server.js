const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api',api)


// get method for index route
app.get('/',(req,res) =>
res.sendFile(path.join(__dirname, './public/index.html')));

// get method for /notes
app.get('/notes',(req,res) =>
res.sendFile(path.join(__dirname, './public/notes.html')));

// the wildcard has to be last 
app.get('/*',(req,res) =>
res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
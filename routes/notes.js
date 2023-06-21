const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
// get for notes
notes.get('/',(req,res) =>{
    console.info(`${req.method} received`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/',(req,res) => {
    const {title,text} = req.body;
    if(title && text){
        const newNote ={
            title,
            text,
            id: uuidv4()
        }
        readAndAppend(newNote,'./db/db.json');
        // needs response
        res.json(newNote);
    }else{
        res.status(400).json("Error")
        // send error status code
    }
})
module.exports = notes;
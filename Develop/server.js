const fs = require("fs")
const express = require("express")
const noteapp = express();
noteapp.use(express.static('public'));


noteapp.get("/home", (req, res)=> {
    res.send("HI!");
});

noteapp.get("/notes", (req,res)=> {
    res.sendFile("notes.html");
});














noteapp.listen(3002, () => {
    console.log("API server now on port!");
});
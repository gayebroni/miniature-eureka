//Dependencies
const fs = require("fs")
const path = require("path")
const express = require("express")

// This creates an express server
const noteapp = express();


noteapp.get("/home", (req, res)=> {
    res.send("HI!");
});


noteapp.get("/notes", (req,res)=> {
    res.sendFile(path.resolve() + "/public/notes.html");
});
noteapp.get("/", (req,res)=> {
    res.sendFile(path.resolve() + "/public/index.html");
});

noteapp.get("/api/notes", (req,res)=> 
{
    const data = fs.readFileSync(path.resolve() + "/db/db.json", "utf8");
    res.json(data);
});

noteapp.post("/api/notes", (req, res) => {});



noteapp.listen(3002, () => {
    console.log("API server now on port!");
});

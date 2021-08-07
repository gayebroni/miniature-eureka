//Dependencies
const fs = require("fs")
const path = require("path")
const express = require("express")

// This creates an express server
const noteapp = express();
noteapp.use(express.static("public"));


noteapp.get("/home", (req, res)=> {
    res.send("HI!");
});

// use path module to obtain data from html - use join (joins specified paths into one) or resolve (resolves specified paths into an absolute path (root directory))
noteapp.get("/notes", (req,res)=> {
    res.sendFile(path.resolve() + "/public/notes.html");
});

noteapp.get("/", (req,res)=> {
    res.sendFile(path.resolve() + "/public/index.html");
});

noteapp.get("/api/notes", (req,res)=> 
{
    const data = fs.readFileSync(path.resolve() + "/db/db.json", "utf8");
    const jsonNotes = JSON.parse(data);
    res.json(jsonNotes);
});

noteapp.post("/api/notes", (req, res) => {
    // req.body is where our incoming content will be
    console.log(data);
    res.json(req.data);
});

noteapp.listen(3002, () => {
    console.log("API server now on port!");
});

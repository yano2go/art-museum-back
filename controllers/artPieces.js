const express = require('express');
const router = express.Router();
const ArtPiece = require("../models/artPieces.js");

//Index route

//Create route
router.post("/", (req,res)=>{
    ArtPiece.create(req.body, (error, createdArtPiece)=>{
        error ? res.status(404).json(error) : res.status(200).json(createdArtPiece)
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();
const ArtPiece = require("../models/artPiece");

//Index route
router.get('/', (req, res) => {
    ArtPiece.find({}, (error, allArtPieces) => {
        error ? res.status(404).json(error) : res.status(200).json(allArtPieces); 
    });
});

// New - don't even need you...get outa here

// Delete
router.delete('/:id', (req, res) => {
    ArtPiece.findByIdAndDelete(req.params.id, (error, artPiece) => {
        error ? res.status(404).json(error) : res.status(200).json(artPiece);
    });
});

// Update
router.put('/:id', (req, res) => {
    ArtPiece.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedArtPiece) => {
        error ? res.status(404).json(error) : res.status(200).json(updatedArtPiece);
     } 
   );
});


//Create route
router.post("/", (req,res)=>{
    // let newData = {
    //     culture = req.body.records.culture,
    //     title = req.body.records.title 
    // }
    console.log(req.body);
    ArtPiece.create(req.body, (error, createdArtPiece)=>{
        error ? res.status(404).json(error) : 
        res.status(200).json(createdArtPiece)
    })
})

// Edit - don't even need you...get outa here

// Show
router.get('/:id', (req, res) => {
    ArtPiece.findById(req.params.id, (error, foundArtPiece) => {
        error ? res.status(404).json(error) : res.status(200).json(foundArtPiece); 
    });
});

module.exports = router;
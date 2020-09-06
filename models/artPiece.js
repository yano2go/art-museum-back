const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Now we will create the art piece schema.

const artPieceSchema = new Schema(
    {
        dated: String,
        culture: String,
        period: String,
        style: String,
        artist: String,
        description: String,
        technique: String,
        classification: String,
        medium: String,      
    },
    {timestamps: true}
);

const ArtPiece = mongoose.model("ArtPiece", artPieceSchema)

module.exports = ArtPiece;
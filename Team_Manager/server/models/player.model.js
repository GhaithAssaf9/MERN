const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "required name"
        ],
        minlength: [
            2,
            "Name > 2 characters."
        ]
    },
    position: {
        type: String,
        required: [
            false
        ]
    },
    status: {
        game1: {type: Number},
        game2: {type: Number},
        game3: {type: Number}
    }
}, {timestamps: true});

module.exports.Player = mongoose.model("Player", PlayerSchema);
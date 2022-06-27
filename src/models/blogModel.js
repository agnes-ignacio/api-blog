const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    imageurl: {
        type: String
    },
    categories: {
        type: [String]
    },
    text: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        default: false
    },
    likes: {
        type: Number,
        default: 0
    },
    archived: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Model = mongoose.model("post", postSchema)

module.exports = Model


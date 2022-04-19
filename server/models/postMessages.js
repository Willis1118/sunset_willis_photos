//the file where all models of posts will be kept
//we can run CRUD on this model

import mongoose from "mongoose";

const postSchema = mongoose.Schema({ //what attributes each post have to have
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema) //instantiate a model based on the Schema

export default PostMessage;
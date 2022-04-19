//all the handlers for postRoutes
//in other words, this is the file keeps all logic dealing with req and res related with posts
import PostMessage from "../models/postMessages.js"

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find(); //find all PostMessage model message; async
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//check for HTTP status code for more informations
export const createPosts = async (req,res) => {
    const post = req.body; //the stuff sent to server
    const newPost = new PostMessage(post); //create message based on model

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
//will contain all routes related to posts action
//all handlers are in controller/posts
import express from "express";
import { getPosts,createPost,updatePost } from "../controllers/posts.js"; //need to add .js here

const router = express.Router();

//accessed by localhost:4000/posts

router.get('/', getPosts); //call back function. called when we are at localhost:4000/
//response is something the server sent back to us
router.post('/', createPost); //post to server
router.patch('/:id', updatePost); //updating existing document; we need id here since we need to update a specific element
export default router;
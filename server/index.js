import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

//initialize app, and we can use all sorts of methond on app
const app = express();

//middle ware: executed during the req-res cycle
//in other word, it has access to both req and res from or to server and deals with them
app.use(bodyParser.json({ limit: "30mb", extended: "true"})); //extend means that we can pass json of any type instead of just string or array
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true"}));
app.use(cors()); //use middle ware before we do anything on server

app.use('/posts', postRoutes); //every route inside posts will start with prefix "/posts"

//connect to mongodb atlas
// url we will be using to connect to atlas cluster

const CONNECTION_URL = 'mongodb+srv://withered:QhZUZGE0ZCQ7WreJ@cluster0.4nqrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4000;

//useUnifiedTopology --> using MongoDB connection management engine
//useUrlParser --> as its name suggested, parse url
//mostly to prevent deprecate warning
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //no longer necessary; but sure can keep them there
        .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`))) //asynchorous feature of JS: connect, as an async function, will return a promise, which will have a then function to 
                                                                                      //deal with success and error; each success and error will return a promise as well, in case the next function in chain need to access them
                                                                                      //promise will be dealt (the next function be called) iff request is finished
        .catch((error) => console.log(error.message)) //error handler



import React from 'react'
import { useSelector } from 'react-redux' //select data from store

import Post from './post/Post'
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts) //posts is one of the reducers in the store; check /reducers/index for this

    console.log(posts)
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts
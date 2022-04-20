import axios from 'axios'

const url = 'http://localhost:4000/posts' //url points to our backend

export const fetchPosts = () => axios.get(url);
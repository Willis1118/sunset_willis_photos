import * as api from '../api'

//create actions --> functions that return actions
//thunk enables us to pass a function that returns a function
//once this get passed into App, dispatch will run the function returned by getPosts and thus dispatch the actions
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); //data returned from backend
        const action_fetch = { type: 'FETCH_ALL', payload: data}
        dispatch(action_fetch)
    }catch(error){
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        const action_create = { type: 'CREATE', payload: data }
        dispatch(action_create)
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id,post)
        const action_update = { type: 'UPDATE', payload: data }
        dispatch(action_update)
    }catch(error){
        console.log(error.message)
    }
}
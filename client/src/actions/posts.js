import * as api from '../api'

//create actions --> functions that return actions
//thunk enables us to pass a function that returns a function
//once this get passed into App, dispatch will run the function returned by getPosts and thus dispatch the actions
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); //data returned from backend
        const action = { type: 'FETCH_ALL', payload: data}
        dispatch(action)
    }catch(error){
        console.log(error.message)
    }


}
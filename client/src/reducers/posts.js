//what is reducer?
//a function 

export default (posts = [], action) => { //state marks the current state of posts, and action specifies what we want to do with it
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts
        default:
            return posts
    }
}

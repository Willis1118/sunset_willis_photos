//packages
import React, { useEffect,useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux' 

//images
import memories from './images/memories.png'

//Other component
import Form from './components/form/Form.js'
import Posts from './components/posts/Posts.js'
import { getPosts } from './actions/posts' //will return actions

//styles
import useStyles from './styles'

const App = () => {
    //idea of how to modify existing post: use prop drilling to get the specific id in post, send the id to Form
    //if id is not null, we will dispatch an action of UPDATE to fetch the corresponding post from server to reducers, and save it in store
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]) //if anything in here changes, then useEffect is called. in case of [], useEffect is called everytime we rerender

    return (
        <Container maxidth = 'lg'>
            <AppBar className = {classes.appBar} position = 'static' color = 'inherit'>
                <Typography className = {classes.heading}variant = 'h2' align = 'center'>Memories</Typography>
                <img className = {classes.image}src = {memories} alt = 'memories' height = '60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/> 
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
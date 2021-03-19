
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {CssBaseline, Grid, CardActions} from '@material-ui/core/styles'
import myImg1 from './../assets/images/bulbasaur.png'
import myImg2 from './../assets/images/charmander.png'
import myImg3 from './../assets/images/squirtle.png'
import {Link} from 'react-router-dom'
import {joke} from '../thirdparty/api-dadjokes.js'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'





const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',

  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  image: {
    display: 'block',
    maxWidth: '10%',
    maxHeight: '100%',
  },
  media: {
    minHeight: 300
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))

export default function Home(){
  const classes = useStyles()
  const [jokes, setJokes] = useState({
    joke: 'No joke',
    error: ''
  })
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    joke(signal).then((data) => {
      if (data && data.error) {
        console.log("error in getting jokes")
        console.log(data.error)
        //setJokes(...jokes, error: data.error)
      } else {
      	console.log("Here is the user data")
      	console.log(data)
      	if (data != undefined){
      		console.log("setting the data")
        	setJokes(data)
        }
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])     
    return (


      <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Pokemon Picker
      
      </Typography>
      

      <grid container spacing={2} className={classes.grid}>
      <grid item lg={4} md={12} >
          <Typography variant="h6" className={classes.title2}>
            Charmander
            <CardMedia className={classes.media} image={myImg2} title="Charmander"/>
            
              Pick Charmander
              {jokes.joke}
          
          </Typography>
        </grid>
        <grid item lg={4} md={12} >
          <Typography variant="h6" className={classes.title2}>
            Bulbasaur
            <CardMedia className={classes.media} image={myImg1} title="Bulbasaur"/>
            
              Pick Bulbasaur
              {jokes.joke}
            
          </Typography>
        </grid>

        <grid item lg={4} md={12} >
          <Typography variant="h6" className={classes.title2}>
            Squirtle
            <CardMedia className={classes.media} image={myImg3} title="Squirtle"/>
          
              Pick Squirtle
              {jokes.joke}
          

          </Typography>
        </grid>
      </grid>




    </Card>
    )
}
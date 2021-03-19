
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {CssBaseline, Grid, CardActions} from '@material-ui/core'
import myImg1 from './../assets/images/bulbasaur.png' // picture of bulbasaur
import myImg2 from './../assets/images/charmander.png' // picture of charmander
import myImg3 from './../assets/images/squirtle2.png' // picture of squirtle fist picture of squirtle did not work in heroku 
import {Link} from 'react-router-dom'
import {joke} from '../thirdparty/api-dadjokes.js'
import {charFact} from '../thirdparty/api-Charmander.js'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'





const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 'auto',
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
  media: {      // for the images 
    width: 'auto',
    height: 500,
    resizeMode: 'contain',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  },
  grid :{             // grid layout used
    height: 'auto', 
    width: '100%', 
    margin: '0px'


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
      <Typography variant="h2" className={classes.title}>
        Pokemon Picker
        <Typography variant="h6" className={classes.title}>
       Hello and welcome to Pokemon picker, this website allows for you to pick which of the 3 Kanto starting Pokemon ( Charmader, Bulbasaur or Squirtle ) you would like to see be the main character in an unnamed upcoming Pokemon game. Please create an account and type in your answer. Here is a random joke. {jokes.joke}
      
      </Typography>
      
      </Typography>


      <Grid container spacing={1} className={classes.grid}>
      <Grid item  xs={12} md={4} >
          <Typography variant="h4" className={classes.title2}>
            Charmander
            <CardMedia className={classes.media} image={myImg2} title="Charmander"/>
            <Typography variant="h6" className={classes.title2}>
              Pick Charmander
              {jokes.charFact}
              </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}  >
          <Typography variant="h4" className={classes.title2}>
            Bulbasaur
            <CardMedia className={classes.media} image={myImg1} title="Bulbasaur"/>
              <Typography variant="h6" className={classes.title2}>
                Pick Bulbasaur
                
                </Typography>
            
          </Typography>
        </Grid>

        <Grid itemxs={12} md={4}  >
          <Typography variant="h4" className={classes.title2}>
            Squirtle
            <CardMedia className={classes.media} image={myImg3} title="Squirtle"/>
            <Typography variant="h6" className={classes.title2}>
              Pick Squirtle
              {jokes.charFact}
              </Typography>

          </Typography>
          
        </Grid>

      </Grid>




    </Card>
    )
}
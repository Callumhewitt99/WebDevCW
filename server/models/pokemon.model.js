import mongoose from 'mongoose'
import crypto from 'crypto'

const PokeSchema = new mongoose.Schema({

    charmander_pick:{
      type:Number,
      Default:0,
      min:0
  
    },
    bulbasaur_pick:{
      type:Number,
      Default:0,
      min:0
  
    },
    squirtle_pick:{
      type:Number,
      Default:0,
      min:0
  
    }
  })
  
  export default mongoose.model('Pokemon', PokeSchema)
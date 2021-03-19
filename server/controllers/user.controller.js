import User from '../models/user.model'
import Pokemon from '../models/pokemon.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'


const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id)
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const listadmin = async (req, res) => {
  try {
    let users = await User.find().select('name email about updated created admin')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let user = req.profile
    user = extend(user, req.body)
    user.updated = Date.now()
    user.profileclicks = user.profileclicks + 1
    user.charmander_pick = user.charmander_pick + 1
    await user.save()
    user.hashed_password = undefined
    user.salt = undefined
    res.json(user)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const charmander_update = async (req, res) => {
  try {
    user.charmander_pick = user.charmander_pick + 1
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const bulbasaur_update = async (req, res) => {
  try {
    Pokemon.charmander_pick = Pokemon.charmander_pick + 1
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const squirtle_update = async (req, res) => {
  try {
    Pokemon.charmander_pick = Pokemon.charmander_pick + 1
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const remove = async (req, res) => {
  try {
    let user = req.profile
    let deletedUser = await user.remove()
    deletedUser.hashed_password = undefined
    deletedUser.salt = undefined
    res.json(deletedUser)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  userByID,
  read,
  list,
  listadmin,
  remove,
  update,
  charmander_update,
  bulbasaur_update,
  squirtle_update
}

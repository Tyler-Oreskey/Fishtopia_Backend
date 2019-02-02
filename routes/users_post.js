const express = require('express')
const router = express.Router()
const knex = require('../knex')
const Joi = require('joi')

/* Validates the users_post ID */
const validateUserID = (req, res, next) => {
  knex('users_post').where('id', req.params.id).then(([data]) => {
    if (!data) {
      return res.status(400).json({
        error: {
          message: `Users_post ID ${req.params.id} not found`
        }
      })
    }
    next()
  })
}

/* Uses joi to validate data types */
const validatePostBody = (req, res, next) => {
  const postSchema = Joi.object().keys({
    users_id: Joi.number().integer().required(),
    fish_id: Joi.number().integer().required(),
    fishing_type: Joi.string().required(),
    dry_fly: Joi.string().required(),
    dry_size: Joi.number().integer(),
    wet_fly: Joi.string().required(),
    wet_size: Joi.number().integer(),
    month: Joi.string().required(),
    day: Joi.integer().required(),
    fish_pic: string().required(),
    comments: string().required(),
    lat: Joi.number().integer().required(),
    lng: Joi.number().integer().required()
  })

  const { error } = Joi.validate(req.body, postSchema)

  if (error) {
    return res.status(400).json({ "POST Schema Error": { message: error.details[0].message } })
  }
  next()
}

/* Uses joi to build a patch request */
const buildPatchReq = (req, res, next) => {
  const patchSchema = Joi.object().keys({
    users_id: Joi.number().integer().required(),
    fish_id: Joi.number().integer().required(),
    fishing_type: Joi.string().required(),
    dry_fly: Joi.string().required(),
    dry_size: Joi.number().integer(),
    wet_fly: Joi.string().required(),
    wet_size: Joi.number().integer(),
    month: Joi.string().required(),
    day: Joi.integer().required(),
    fish_pic: string().required(),
    comments: string().required(),
    lat: Joi.number().integer().required(),
    lng: Joi.number().integer().required()
  })

  const { error } = Joi.validate(req.body, patchSchema)
  if (error) {
    return res.status(400).json({ "PATCH Schema Error": { message: error.details[0].message } })
  }

  const allowedPatchKeys = [users_id, fish_id, fishing_type, dry_fly, dry_size, wet_fly, wet_size, month, day, fish_pic, comments, lat, lng]

  // Constructs the patch request object
  let patchReq = {}
  allowedPatchKeys.forEach(key => {
    if (req.body.hasOwnProperty(key)) { patchReq[key] = req.body[key] }
  })

  // If the patch request is empty or has invalid key names, return an error
  if (Object.keys(patchReq).length === 0) {
    return res.status(400).json({ error: { message: `Empty or invalid patch request` } })
  }

  // Every patch update will create a new 'updated_at' timestamp
  patchReq.updated_at = new Date()

  // Stores the patch request-object into next request
  req.patchReq = patchReq
  next()
}

/* GET all users_post record */
router.get('/', (req, res, next) => {
  knex('users_post').then(data => res.status(200).json(data)).catch(err => next(err))
})

/* GET single users_post record */
router.get('/:id', validateUserID, (req, res, next) => {
  knex('users_post').where('id', req.params.id).then(([data]) => res.status(200).json(data)).catch(err => next(err))
})

/* POST new users_post record */
router.post('/', validatePostBody, (req, res, next) => {
  const {users_id, fish_id, fishing_type, dry_fly, dry_size, wet_fly, wet_size, month, day, fish_pic, comments, lat, lng} = req.body

  knex('users_post').insert({users_id, fish_id, fishing_type, dry_fly, dry_size, wet_fly, wet_size, month, day, fish_pic, comments, lat, lng}).returning('*').then(([data]) => res.status(201).json(data)).catch(err => next(err))
})

/* PATCH specified users_post record */
router.patch('/:id', validateUserID, buildPatchReq, (req, res, next) => {
  const {patchReq} = req

  knex('users_post').where('id', req.params.id).first().update(patchReq).returning('*').then(([data]) => {
    res.status(200).json(data)
  }).catch(err => next(err))
})

/* DELETE specified users_post record */
router.delete('/:id', validateUserID, (req, res, next) => {
  knex('users_post').where('id', req.params.id).first().del().returning('*').then(([data]) => {
    console.log('deleted', data)
    res.status(200).json({deleted: data})
  })
})
module.exports = router

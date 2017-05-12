/**
 * Bloods Routes
 * All actions regarding blood result data should be referenced via
 * these routes
 */
const Joi = require('joi')
const BloodsController = require('../controllers/bloodsController')
const controller = new BloodsController()

module.exports = [
  {
    method: 'GET',
    path: '/bloods',
    handler (request, reply) {
      controller.getBloods(request, reply)
    }
  },
  {
    method: 'POST',
    path: '/blood',
    handler (request, reply) {
      controller.postBlood(request, reply)
    },
    config: {
      validate: {
        payload: {
          blood: Joi.number().min(0).max(40).required(),
          carbs: Joi.string().allow(''),
          insulin: Joi.string().allow(''),
          notes: Joi.string().min(1).allow('')
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/blood/{id}',
    handler: (request, reply) => {
      controller.updateBlood(request, reply)
    },
    config: {
      validate: {
        payload: {
          blood: Joi.number().min(0).max(40).required(),
          carbs: Joi.number(),
          insulin: Joi.number(),
          notes: Joi.string().min(1)
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/blood/{id}',
    handler: (request, reply) => {
      controller.deleteBlood(request, reply)
    }
  }
]

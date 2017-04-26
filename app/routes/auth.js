/**
 * Authentication Routes
 */
const firebase = require('firebase')
const Joi = require('joi')
const AuthController = require('../controllers/authController')
const controller = new AuthController()

// const Boom = require('boom')

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler(request, reply) {
      controller.loginUser(request, reply)
    },
    config: {
      validate: {
        payload: {
          email: Joi.string().email().required(),
          password: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/sign-out',
    handler(request, reply) {
      controller.signOutUser(request, reply)
    }
  }
]

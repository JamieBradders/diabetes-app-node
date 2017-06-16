/**
 * Authentication Routes
 */
const firebase = require('firebase')
const admin = require('firebase-admin')
const Joi = require('joi')
const Boom = require('boom')
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
    method: 'POST',
    path: '/get-user',
    handler(request, reply) {
      const idToken = request.payload.token

      admin.auth().verifyIdToken(idToken)
        .then(function (decodedToken) {
          const uid = decodedToken.uid
          // Reply with a success flag
          reply({
            message: 'authenticated',
            success: true
          })
        })
        .catch(function (error) {
          reply(Boom.unauthorized('unauthorized user'))
        });
    }
  },

  {
    method: 'POST',
    path: '/sign-out',
    handler(request, reply) {
      request.yar.reset()
      controller.signOutUser(request, reply)
    }
  }
]

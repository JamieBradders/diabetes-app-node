/**
 * Authentication Routes
 */
const Joi = require('joi')

module.exports = [
  {
    method: 'POST',
    path: '/auth/verify',
    handler(request, reply) {
      console.log('Welcome to the auth layer, here is the payload', request.payload)
      reply({
        'message': 'stuff to follow'
      })
    },
    config: {
      validate: {
        payload: {
          email: Joi.string().email(),
          password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
      }
    }
  }
]

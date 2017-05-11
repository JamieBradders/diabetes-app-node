/**
 * Bloods Controller
 */
const firebase = require('firebase')
const FirebaseHelpers = require('../helpers/firebase')
const helpers = new FirebaseHelpers()

const Boom = require('boom')

const getUser = require('../helpers/getUser')

class BloodsController {
  getBloods(request, reply) {
    helpers.getData('bloods')
      .then((snapshot) => {
        reply(snapshot.val())
      })
  }

  postBlood(request, reply) {
    const token = request.headers['token']

    getUser(request, token)
      .then(() => {
        helpers.postData('bloods', request.payload)
          .then(() => {
            reply({
              'message': 'Blood Sugar Posted Successfully'
            })
          }).catch((error) => {
          reply(Boom.unauthorized(error))
        })

      })
      .catch(function (error) {
        reply(Boom.unauthorized('unauthorized user'))
      });
  }

  updateBlood(request, reply) {
    const id = request.params.id
    const token = request.headers['token']

    getUser(request, token)
      .then(() => {
        helpers.updateData('bloods', id, request.payload)
          .then(() => {
            reply({
              'message': 'Blood Sugar Updated Successfully'
            })
          }).catch((error) => {
          reply(Boom.unauthorized(error))
        })

      })
      .catch(function (error) {
        reply(Boom.unauthorized('unauthorized user'))
      })
  }

  deleteBlood(request, reply) {
    const id = request.params.id
    const token = request.headers['token']

    getUser(request, token)
      .then(() => {
        helpers.deleteData('bloods', id)
          .then(() => {
            reply({
              'message': 'Blood Sugar Deleted Successfully'
            })
          }).catch((error) => {
          reply(Boom.unauthorized(error))
        })

      })
      .catch(function (error) {
        reply(Boom.unauthorized('unauthorized user'))
      })
  }
}

module.exports = BloodsController

/**
 * Bloods Controller
 */
const Boom = require('boom')
const FirebaseHelpers = require('../helpers/firebase')
const Calculations = require('../helpers/calculations')
const getUser = require('../helpers/getUser')
const helpers = new FirebaseHelpers()

class BloodsController {
  getBloods (request, reply) {
    helpers.getData('bloods')
      .then((snapshot) => {
        reply(snapshot.val())
      })
  }

  postBlood (request, reply) {
    const user = request.yar.get('user')
    const token = user.token
    getUser(request, token)
      .then(() => {
        helpers.postData('bloods', request.payload)
          .then(() => {
            request.yar.set('message', {
              message: 'Blood sugar poosted!',
              type: 'success'
            })
            reply.redirect('/dashboard')
          }).catch((error) => {
            // reply(Boom.unauthorized(error))
            request.yar.set('message', {
              message: 'There was an issue posting the Blood!',
              type: 'error'
            })
            reply.redirect('/dashboard')
          })
      })
      .catch(function () {
        reply(Boom.unauthorized('unauthorized user'))
      })
  }

  updateBlood (request, reply) {
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
      .catch(function () {
        reply(Boom.unauthorized('unauthorized user'))
      })
  }

  deleteBlood (request, reply) {
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
      .catch(function () {
        reply(Boom.unauthorized('unauthorized user'))
      })
  }

  getAverages (request, reply) {
    helpers.getData('bloods')
      .then((snapshot) => {
        const CalculationHelper = new Calculations(snapshot.val())

        reply({
          data: {
            metrics: [
              {
                figure: CalculationHelper.getAverage(),
                title: 'Average Reading',
                type: 'average'
              },
              {
                figure: CalculationHelper.getHighest(),
                title: 'Highest Reading',
                type: 'highest'
              },
              {
                figure: CalculationHelper.getLowest(),
                title: 'Lowest Reading',
                type: 'lowest'
              },
              {
                figure: CalculationHelper.getTotalResults(),
                title: 'Total Readings',
                type: 'total'
              },
            ]
          }
        })
      })
  }
}

module.exports = BloodsController

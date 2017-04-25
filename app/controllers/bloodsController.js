/**
 * Bloods Controller
 */
const firebase = require('firebase')
const FirebaseHelpers = require('../helpers/firebase')
const helpers = new FirebaseHelpers()

class BloodsController {
  getBloods(request, reply) {
    helpers.getData('bloods')
      .then((snapshot) => {
        reply(snapshot.val())
      })
  }

  postBlood(request, reply) {
    helpers.postData('bloods', request.payload)

    reply({
      'message': 'Blood Sugar Posted Successfully'
    })
  }

  updateBlood(request, reply) {
    const id = request.params.id
    helpers.updateData('bloods', id, request.payload)

    reply({
      'message': 'Blood Sugar Updated Successfully'
    })
  }

  deleteBlood(request, reply) {
    const id = request.params.id
    helpers.deleteData('bloods', id)

    reply({
      'message': 'Blood Sugar Deleted Successfully'
    })
  }
}

module.exports = BloodsController

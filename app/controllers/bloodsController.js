/**
 * Bloods Controller
 */
const firebase = require('firebase')

class BloodsController {
  getBloods(request, reply) {
    const data = firebase.database().ref('/bloods').once('value').then((snapshot) => {
      reply(snapshot.val())
    })
  }

  postBlood(request, reply) {
    this._postData('/bloods', request.payload)
    reply({
      'message': 'Blood Sugar Posted Successfully'
    })
  }

  // @TODO Maybe move to a firebase service
  _postData(table, payload) {
    const myRef = firebase.database().ref(table).push()
    const key   = myRef.key

    // Assign id and timestamp to the payload
    payload.id = key
    payload.timestamp = Number(new Date())

    myRef.push(payload)
  }
}

module.exports = BloodsController

const Boom = require('boom')
const Yar = require('yar')
const firebase = require('firebase')

class AuthController {
  loginUser (request, reply) {
    const { email, password } = request.payload
    const user = firebase.auth().signInWithEmailAndPassword(email, password)

    user.then((user) => {
      const payload = {
        user: user
      }

      firebase.auth().currentUser.getToken(true).then((idToken) => {
        payload.token = idToken
      }).then(() => {
        // Get the token and persist in session
        request.yar.set('user', { token: payload.token })
        // reply.view('dashboard/index')
        reply.redirect('/dashboard')
      })
    }).catch(() => {
      // Set error message and return to homepage
      request.yar.set('error', {
        message: 'User not found or your credentials were invalid'
      })
      reply.redirect('/')
    })
  }

  signOutUser (request, reply) {
    firebase.auth().signOut().then(() => {
      request.yar.clear('user')
      reply.redirect('/')
    }).catch((error) => {
      reply({ error: error })
    })
  }
}

module.exports = AuthController

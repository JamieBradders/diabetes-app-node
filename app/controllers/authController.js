const Boom = require('boom')
const firebase = require('firebase')

class AuthController {
  loginUser(request, reply) {
    const { email, password } = request.payload
    const user = firebase.auth().signInWithEmailAndPassword(email, password)

    user.then((user) => {
      const payload = {
        user: user
      }

      firebase.auth().currentUser.getToken(true).then((idToken) => {
        payload.token = idToken
      }).then(() => {
        // Store in the cookie token to be retrieved at a later stage.
        reply.redirect('admin-dashboard')
      })
    }).catch((error) => {
      reply(Boom.unauthorized('unauthorized user'))
    })
  }

  verifyUser(request, reply) {
    const user  = firebase.auth().currentUser

    if (user) {
      reply(user)
    } else {
      reply(Boom.unauthorized('unauthorized user'))
    }
  }

  signOutUser(request, reply) {
    firebase.auth().signOut().then(() => {
      // Sign Out Successful
      reply.view('dashboard/logged-out')
    }).catch((error) => {
      reply({ error: error })
    })
  }
}

module.exports = AuthController

const firebase = require('firebase')

class AuthController {
  loginUser(request, reply) {
    const { email, password } = request.payload
    const user = firebase.auth().signInWithEmailAndPassword(email, password)

    user.then((user) => {
      reply.redirect('/admin-dashboard')
    }).catch((error) => {
      reply.view('index', {
        error_message: error.message
      })
    })
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

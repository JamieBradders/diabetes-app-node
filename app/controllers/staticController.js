/**
 * Controller for all Static Pages
 */
const firebase = require('firebase')

class StaticController {
  renderLogin (request, reply) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        reply.redirect('admin-dashboard')
      } else {
        reply.view('pages/index')
      }
    })
  }

  renderDashboard (request, reply) {
    // reply.view('dashboard/index')
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        reply.view('dashboard/index', {
          user: user
        })
      } else {
        reply.redirect('/')
      }
    })
  }
}

module.exports = StaticController

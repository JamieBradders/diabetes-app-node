/**
 * Controller for all Static Pages
 */
const firebase = require('firebase')

class StaticController {
  renderLogin(request, reply) {
    const user = firebase.auth().currentUser
    if (user) {
      reply.redirect('admin-dashboard')
    } else {
      reply.view('index')
    }
  }

  renderDashboard(request, reply) {
    const user = firebase.auth().currentUser
    if (user) {
      reply.view('dashboard/index', {
        user: user
      })
    } else {
      reply.redirect('/')
    }
  }
}

module.exports = StaticController

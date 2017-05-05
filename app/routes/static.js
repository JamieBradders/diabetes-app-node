/**
 * Static Page Routes
 * Render a view based on a route
 */
const firebase = require('firebase')
const StaticController = require('../controllers/staticController')
const controller = new StaticController()

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      controller.renderLogin(request, reply)
    }
  },
  {
    method: 'GET',
    path: '/test-call',
    handler(request, reply) {
      reply({
        'message': 'Sup fool this has worked'
      })
    }
  },
  {
    method: 'GET',
    path: '/admin-dashboard',
    handler(request, reply) {
      controller.renderDashboard(request, reply)
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
  }
]

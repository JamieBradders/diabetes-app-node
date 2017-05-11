/**
 * Static Page Routes
 * Render a view based on a route
 */
const getUser = require('../helpers/getUser')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      const error = request.yar.get('error')
      const user = request.yar.get('user')

      if (user) {
        getUser(request, user.token)
          .then(() => {
            reply.redirect('/dashboard')
          }).catch(() => {
            reply.view('pages/index', error)
          })
      } else {
        reply.view('pages/index', error)
      }
    }
  },

  {
    method: 'GET',
    path: '/dashboard',
    handler(request, reply) {
      const error = request.yar.get('error')
      const user = request.yar.get('user')

      if (user) {
        getUser(request, user.token)
          .then(() => {
            reply.view('dashboard/index')
          }).catch(() => {
            reply.redirect('/')
          })
      } else {
        reply.redirect('/')
      }
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

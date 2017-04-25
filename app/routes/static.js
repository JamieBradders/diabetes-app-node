/**
 * Static Page Routes
 * Render a view based on a route
 */

module.exports = [
  {
    method: 'GET',
    path: '/login',
    handler: (request, reply) => {
      reply.view('index', {
        name: 'Trevor'
      })
    }
  }
]

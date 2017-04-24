// Sprint One
// Simple Hapi Server which communicates with the Firebase Store.

const Hapi   = require('hapi')
const server = new Hapi.Server()

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080
})

// Get Request on Route for now.
server.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({
        'message': 'Welcome to iGulco.co',
        'version': '1.0.0'
      })
    }
  }
])

// Startup the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`)
})

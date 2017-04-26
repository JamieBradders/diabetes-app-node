// Sprint One
// Simple Hapi Server which communicates with the Firebase Store.

const Hapi     = require('hapi')
const firebase = require('firebase')
const server   = new Hapi.Server()

const routes = require('./app/routes')

// Configure Firebase => @NOTE to be moved
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLqLZIxY9275HCgUD4xJ1KGZUR3nSW1Z4",
  authDomain: "igluco-57677.firebaseapp.com",
  databaseURL: "https://igluco-57677.firebaseio.com",
  storageBucket: "igluco-57677.appspot.com",
}
firebase.initializeApp(firebaseConfig);

// Now we need to get a reference to the database service
const database = firebase.database()

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  routes: {
    cors: true
  }
})

// Server views config
const options = { beautify: true }
server.register([require('hapi-error'), require('vision')], (err) => {
  if (err) {
    throw err
  }

  server.views({
    engines: {
      jsx: require('hapi-react')(options)
    },
    relativeTo: __dirname + '/app/views/'
  })
})


// Add all the routes within the routes folder
for (var route in routes) {
  server.route(routes[route])
}

// @NOTE THE PUT REQUEST IS AS PER THE EXAMPLE ON THE WEBSITE FOR FIREBASE

// See if you get the updates...
const bloodRef = firebase.database().ref(`bloods/`)
bloodRef.on('value', (snapshot) => {
  // console.log('Snapshot of database', snapshot.val())
})

// Startup the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`)
})

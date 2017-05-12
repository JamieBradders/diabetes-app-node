// Sprint One
// Simple Hapi Server which communicates with the Firebase Store.

const Hapi = require('hapi')
const Inert = require('inert')
const Nunjucks = require('nunjucks-hapi')
const Path = require('path')
const Vision = require('vision')
const Yar = require('yar')

const firebase = require('firebase')
const admin = require('firebase-admin')
const routes = require('./app/routes')

const server = new Hapi.Server()

// Get the firebase auth
const serviceAccount = require('./serviceAccount.json')

// Configure Firebase => @NOTE to be moved
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCLqLZIxY9275HCgUD4xJ1KGZUR3nSW1Z4',
  authDomain: 'igluco-57677.firebaseapp.com',
  databaseURL: 'https://igluco-57677.firebaseio.com',
  storageBucket: 'igluco-57677.appspot.com'
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://igluco-57677.firebaseio.com'
})

firebase.initializeApp(firebaseConfig)

// Now we need to get a reference to the database service
// const database = firebase.database()

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  routes: {
    cors: true
  }
})

// Server views config
// const options = { beautify: true }

const cookies = {
  storeBlank: false,
  cookieOptions: {
    password: 'the-password-must-be-at-least-32-characters-long',
    isSecure: false
  }
}

// Register cookie jar
server.register({
  register: Yar,
  options: cookies
})

server.register([Vision, Inert], (err) => {
  if (err) {
    throw err
  }
  server.views({
    engines: {
      njk: Nunjucks
    },
    relativeTo: Path.join(__dirname, '/app/views')
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
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})

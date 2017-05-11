/**
 * Get User Helper Method
 * Details to follow...
 */

// const firebase = require('firebase')
const admin = require('firebase-admin')

const getUser = (request, token) => {
  // const idToken = request.payload.token
  const idToken = token
  return admin.auth().verifyIdToken(idToken)
}

module.exports = getUser
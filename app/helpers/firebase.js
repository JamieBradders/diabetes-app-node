/**
 * Data Helper Class
 * Series of Methods for Performing REST Actions
 * against a Firebase instance.
 */
const firebase = require('firebase')

class FirebaseHelpers {
  getData(table) {
    return firebase.database().ref(`${table}/`).once('value')
  }

  postData(table, payload) {
    const tableRef = firebase.database().ref(`${table}/`)

    // Assign timestamp to the payload
    payload.timestamp = Number(new Date())

    tableRef.push(payload)
  }

  updateData(table, id, payload) {
    firebase.database().ref(`${table}/${id}`).update(payload)
  }

  deleteData(table, id) {
    firebase.database().ref(`${table}/${id}`).remove()
  }
}

module.exports = FirebaseHelpers

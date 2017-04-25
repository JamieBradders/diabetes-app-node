const React = require('react')

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Dashboard</h1>
        <a href="/sign-out">Sign out</a>
      </div>
    )
  }
}

module.exports = Dashboard

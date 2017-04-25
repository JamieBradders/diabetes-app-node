const React = require('react')
const ErrorMessage = require('./global/error-message')

class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { error_message } = this.props

    return (
      <div>
        <h1>Login</h1>

        { error_message ? <ErrorMessage message={ error_message } /> : null }

        <form class="IG_Form IG_Form--Login" action="/login" method="POST">
          <input type="email" name="email" placeholder="Your Email Address" autoComplete="off" />
          <input type="password" name="password" placeholder="Your Password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

module.exports = HelloMessage

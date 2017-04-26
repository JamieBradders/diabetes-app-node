const React = require('react')

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { message } = this.props

    return (
      <div className="IG_Form-Error">
        <h2>{ message }</h2>
      </div>
    )
  }
}

module.exports = ErrorMessage

import React from 'react'
import Api from '../Services/Api'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null
    }

    this.loginUser = this.loginUser.bind(this)
  }

  loginUser(event) {
    const { email, password } = this.refs
    const request = new Api()
    let token;
    const body = {
      email: email.value,
      password: password.value
    }

    request.post('/login', body).then((res) => {
      const token = res.data.token
      console.log('here is the token', token)

      // @TODO Store in the local storage...

      window.location.pathname = '/dashboard'
    })
    // .then(() => {
    //   const body = {
    //     token: token
    //   }

    //   request.post('/get-user', body)
    //     .then((res) => {
    //       const isAuth = res.data.authenticated

    //       if (!isAuth) {
    //         window.location = '/'
    //       }

    //     }).catch((err) => {
    //       console.log('there was an error', err)
    //       window.location = '/error'
    //     })
    // })
    .catch((err) => {
      console.log('Here is the err', err)
      this.setState({
        message: err.message
      })
    })

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Welcome to iGluco</h1>
        <p>{this.state.message}</p>
        <form className="IG_Form IG_Form--Login" onSubmit={this.loginUser}>
          <input type="email" ref="email" placeholder="Your Email Address" autoComplete="off" />
          <input type="password" ref="password" placeholder="Your Password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

module.exports = Login

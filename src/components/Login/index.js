import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ContextTheme from '../../Context/ContextTheme'
import {DivCon} from './styledComponent'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPass: false,
    isError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onTogglePassword = () => {
    this.setState(prevState => ({isShowPass: !prevState.isShowPass}))
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    this.setState({username: '', password: ''})
    if (response.ok) {
      const JWT = fetchedData.jwt_token
      Cookies.set('jwt_token', JWT, {expires: 360})
      const {history} = this.props
      history.replace('/')
      this.setState({isError: false})
    } else {
      this.setState({isError: true, errorMsg: fetchedData.error_msg})
    }
  }

  render() {
    const {username, password, isShowPass, isError, errorMsg} = this.state
    const JWT = Cookies.get('jwt_token')
    if (JWT !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight, ChangeTheme} = value
          return (
            <>
              <div className="main-container">
                <img
                  src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672326518/Rectangle_1467_qqm7z8.png"
                  alt=""
                  className="login-img"
                />
                <div className="form-con">
                  <form onSubmit={this.onSubmit}>
                    <DivCon isLight={isLight}>
                      <img
                        src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672330658/Group_7731_logo_krdzru.png"
                        alt=""
                        className="website-logo"
                      />
                      <div className="label-div">
                        <label className="label" htmlFor="username">
                          USERNAME*
                        </label>
                        <input
                          onChange={this.onChangeUsername}
                          value={username}
                          id="username"
                          placeholder="USERNAME"
                          className="input-username"
                        />
                      </div>
                      <div className="label-div">
                        <label className="label" htmlFor="password">
                          PASSWORD*
                        </label>
                        <input
                          onChange={this.onChangePassword}
                          value={password}
                          type={isShowPass ? 'text' : 'password'}
                          id="password"
                          placeholder="PASSWORD"
                          className="input-username"
                        />
                      </div>
                      <div className="check-box-con">
                        <input
                          onChange={this.onTogglePassword}
                          id="checkbox"
                          type="checkbox"
                        />
                        <label className="show-pass" htmlFor="checkbox">
                          Show Password
                        </label>
                      </div>
                      <button type="submit" className="submit-button">
                        Login
                      </button>
                      <div className="toggle-con">
                        {isError ? (
                          <p className="error-msg">{errorMsg}</p>
                        ) : null}
                      </div>
                    </DivCon>
                  </form>
                </div>
              </div>
              <div className="main-container-mb">
                <div className="img-container-login">
                  <img
                    src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672335739/Ellipse_99_img_fde1nh.png"
                    alt=""
                    className="img-login-mb"
                  />
                </div>
                <DivCon isLight={isLight}>
                  <img
                    src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672330658/Group_7731_logo_krdzru.png"
                    alt=""
                    className="website-logo"
                  />
                  <form onSubmit={this.onSubmit}>
                    <div className="label-div">
                      <label className="label" htmlFor="username">
                        USERNAME*
                      </label>
                      <input
                        onChange={this.onChangeUsername}
                        value={username}
                        id="username"
                        placeholder="USERNAME"
                        className="input-username"
                      />
                    </div>
                    <div className="label-div">
                      <label className="label" htmlFor="password">
                        PASSWORD*
                      </label>
                      <input
                        onChange={this.onChangePassword}
                        value={password}
                        type={isShowPass ? 'text' : 'password'}
                        id="password"
                        placeholder="PASSWORD"
                        className="input-username"
                      />
                    </div>
                    <div className="check-box-con">
                      <input
                        onChange={this.onTogglePassword}
                        id="checkbox"
                        type="checkbox"
                      />
                      <label className="show-pass" htmlFor="checkbox">
                        Show Password
                      </label>
                    </div>
                    <button type="submit" className="submit-button">
                      Login
                    </button>
                    <div className="toggle-con">
                      {isError ? <p className="error-msg">{errorMsg}</p> : null}
                    </div>
                  </form>
                </DivCon>
              </div>
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Login

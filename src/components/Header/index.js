import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Nav} from './styledComponent'
import ContextTheme from '../../Context/ContextTheme'

import './index.css'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight, changeTheme} = value
          const onClickChangeTheme = () => {
            changeTheme()
          }
          return (
            <Nav isLight={isLight}>
              <Link style={{textDecoration: 'none'}} to="/">
                <img
                  className="nav-logo"
                  src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672330658/Group_7731_logo_krdzru.png"
                  alt=""
                />
              </Link>
              <div className="link-con">
                <Link style={{textDecoration: 'none'}} to="/">
                  <div>
                    <p className="home-name">Home</p>
                  </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/bookshelves">
                  <div>
                    <p className="bookshelves-name">Bookshelves</p>
                  </div>
                </Link>
                <button onClick={onClickChangeTheme} className="theme-button">
                  {isLight ? (
                    <FaMoon className="moon" />
                  ) : (
                    <FiSun className="sun" />
                  )}
                </button>
                <button className="log-out" onClick={this.onClickLogout}>
                  Logout
                </button>
              </div>
            </Nav>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(Header)

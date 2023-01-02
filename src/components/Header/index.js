import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ul className="Nav">
        <li>
          <Link style={{textDecoration: 'none'}} to="/">
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672330658/Group_7731_logo_krdzru.png"
              alt="website logo"
            />
          </Link>
        </li>

        <li className="link-con">
          <Link style={{textDecoration: 'none'}} to="/">
            <p className="home-name">Home</p>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/shelf">
            <p className="bookshelves-name">Bookshelves</p>
          </Link>
          <button className="log-out" onClick={this.onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    )
  }
}

export default withRouter(Header)

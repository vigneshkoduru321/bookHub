import './index.css'
import Hamburger from 'hamburger-react'
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

class HeaderMb extends Component {
  state = {showHamburger: false}

  toggleHamburger = () => {
    this.setState(prevState => ({showHamburger: !prevState.showHamburger}))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {showHamburger} = this.state
    return (
      <>
        <nav className="nav-container">
          <img
            src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672330658/Group_7731_logo_krdzru.png"
            alt=""
            className="logo"
          />
          <Hamburger onToggle={this.toggleHamburger} />
        </nav>
        {showHamburger ? (
          <div className="links-con">
            <Link className="home-link" to="/" style={{textDecoration: 'none'}}>
              Home
            </Link>
            <Link
              className="books-link"
              to="/"
              style={{textDecoration: 'none'}}
            >
              BookShelves
            </Link>
            <button onClick={this.onClickLogout} className="log-out">
              Logout
            </button>
          </div>
        ) : null}
      </>
    )
  }
}
export default withRouter(HeaderMb)

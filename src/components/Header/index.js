import {Link} from 'react-router-dom'
import {Nav} from './styledComponent'
import ContextTheme from '../../Context/ContextTheme'
import './index.css'

const Header = () => (
  <ContextTheme.Consumer>
    {value => {
      const {isLight} = value
      return (
        <Nav isLight={isLight}>
          <Link to="/">
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672330658/Group_7731_logo_krdzru.png"
              alt=""
            />
          </Link>
          <div>.</div>
        </Nav>
      )
    }}
  </ContextTheme.Consumer>
)

export default Header

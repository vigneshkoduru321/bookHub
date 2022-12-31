import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'
import ContextTheme from '../../Context/ContextTheme'
import {LogoCon} from './styledComponent'

const Footer = () => (
  <ContextTheme.Consumer>
    {value => {
      const {isLight} = value
      return (
        <LogoCon isLight={isLight}>
          <div className="logo-con">
            <FaGoogle className="logos" />
            <FaTwitter className="logos" />
            <FaInstagram className="logos" />
            <FaYoutube className="logos" />
          </div>
          <p className="contact-us">Contact Us</p>
        </LogoCon>
      )
    }}
  </ContextTheme.Consumer>
)

export default Footer

import {Component} from 'react'
import ContextTheme from '../../Context/ContextTheme'
import './index.css'

import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight} = value
          return (
            <div className="home-con">
              <Header />
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}
export default Home

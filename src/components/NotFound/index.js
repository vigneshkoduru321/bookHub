import ContextTheme from '../../Context/ContextTheme'

import {DivNotFound, Heading, Para} from './styledComponent'

import './index.css'

const NotFound = () => (
  <ContextTheme.Consumer>
    {value => {
      const {isLight} = value
      return (
        <DivNotFound isLight={isLight}>
          <img
            src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672657884/Group_7484_jbbleh.png"
            alt=""
            className="not-found"
          />
          <Heading isLight={isLight}>Page Not Found</Heading>
          <Para isLight={isLight}>Page Not Found</Para>
        </DivNotFound>
      )
    }}
  </ContextTheme.Consumer>
)

export default NotFound

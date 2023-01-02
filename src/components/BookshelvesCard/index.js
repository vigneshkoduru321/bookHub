import './index.css'
import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import {Div, Head, Para, Paraa, P} from './styledComponent'
import ContextTheme from '../../Context/ContextTheme'

const BookshelvesCard = props => {
  const {details} = props
  const {id, coverPic, title, authorName, rating, readStatus} = details
  return (
    <ContextTheme.Consumer>
      {value => {
        const {isLight} = value
        return (
          <Link style={{textDecoration: 'none'}} to={`/books/${id}`}>
            <Div isLight={isLight}>
              <img alt={title} src={coverPic} className="cover-bookCard" />
              <div className="content-con">
                <Head isLight={isLight}>{title}</Head>
                <Para isLight={isLight}>{authorName}</Para>
                <Para isLight={isLight}>
                  Avg Rating <BsFillStarFill className="star" />
                  {rating}
                </Para>
                <Paraa isLight={isLight}>
                  <P isLight={isLight}>Status : </P> {readStatus}
                </Paraa>
              </div>
            </Div>
          </Link>
        )
      }}
    </ContextTheme.Consumer>
  )
}
export default BookshelvesCard

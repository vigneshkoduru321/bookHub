import './index.css'

import {Link} from 'react-router-dom'

const BookCard = props => {
  const {details} = props
  const {authorName, coverPic, id, title} = details
  return (
    <Link style={{textDecoration: 'none'}} to="/">
      <div className="book-container">
        <img src={coverPic} alt="" className="cover-pic" />
        <div>
          <h1 className="head">{title}</h1>
          <p className="para">{authorName}</p>
        </div>
      </div>
    </Link>
  )
}

export default BookCard

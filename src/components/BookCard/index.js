import './index.css'

import {Link} from 'react-router-dom'

const BookCard = props => {
  const {details} = props
  const {authorName, coverPic, id, title} = details
  return (
    <li>
      <Link style={{textDecoration: 'none'}} to={`/books/${id}`}>
        <div className="book-container">
          <img src={coverPic} alt={title} className="cover-pic" />
          <div>
            <h1 className="head">{title}</h1>
            <p className="para">{authorName}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BookCard

import './index.css'
import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'

const BookshelvesCard = props => {
  const {details} = props
  const {id, coverPic, title, authorName, rating, readStatus} = details
  return (
    <Link style={{textDecoration: 'none'}} to={`/books/${id}`}>
      <div className="div-card">
        <img alt={title} src={coverPic} className="cover-bookCard" />
        <div className="content-con">
          <h1 className="head-card">{title}</h1>
          <p className="para-card">{authorName}</p>
          <p className="para-card">
            Avg Rating <BsFillStarFill className="star" />
            {rating}
          </p>
          <p className="paraa-card">
            <p className="p">Status : </p> {readStatus}
          </p>
        </div>
      </div>
    </Link>
  )
}
export default BookshelvesCard

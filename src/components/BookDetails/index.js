import {Component} from 'react'
import Cookies from 'js-cookie'

import {BsFillStarFill} from 'react-icons/bs'
import './index.css'
import Loader from 'react-loader-spinner'
import {
  Div,
  Divv,
  Head,
  Para,
  Paraa,
  P,
  Heading,
  Paragraph,
} from './styledComponent'

import Header from '../Header'
import ContextTheme from '../../Context/ContextTheme'
import Footer from '../Footer'

class BookDetails extends Component {
  state = {Data: [], fetchStatus: 'initial'}

  componentDidMount() {
    this.getBookDetails()
  }

  getBookDetails = async () => {
    this.setState({fetchStatus: 'loading'})
    const JWT = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/book-hub/books/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Beaber ${JWT}`,
      },
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const bookdetails = {book: fetchedData.book_details}
      const updatedData = {
        aboutAuthor: bookdetails.book.about_author,
        aboutBook: bookdetails.book.about_book,
        authorName: bookdetails.book.author_name,
        coverPic: bookdetails.book.cover_pic,
        id: bookdetails.book.id,
        rating: bookdetails.book.rating,
        readStatus: bookdetails.book.read_status,
        title: bookdetails.book.title,
      }
      this.setState({Data: updatedData, fetchStatus: 'success'})
    } else {
      this.setState({fetchStatus: 'failure'})
    }
  }

  renderLoading = () => (
    <div className="loading-con">
      <div testid="loader" className="products-loader-container">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    const {
      aboutAuthor,
      aboutBook,
      authorName,
      coverPic,
      id,
      rating,
      readStatus,
      title,
    } = Data
    return (
      <>
        <ContextTheme.Consumer>
          {value => {
            const {isLight} = value
            return (
              <>
                <Divv isLight={isLight}>
                  <div className="img-con">
                    <img src={coverPic} alt="" className="cover-pic-detail" />
                    <div className="content-detail-con">
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
                  </div>
                  <hr className="horizontal-line" />
                  <div className="about-con">
                    <Heading isLight={isLight}>About Author</Heading>
                    <Paragraph>{aboutAuthor}</Paragraph>
                    <Heading isLight={isLight}>About Book</Heading>
                    <Paragraph isLight={isLight}>{aboutBook}</Paragraph>
                  </div>
                </Divv>
                <Footer />
              </>
            )
          }}
        </ContextTheme.Consumer>
      </>
    )
  }

  renderFailure = () => (
    <div>
      <h1>failure</h1>
    </div>
  )

  renderItem = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case 'loading':
        return this.renderLoading()
      case 'success':
        return this.renderSuccess()
      case 'failure':
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight} = value
          return (
            <Div isLight={isLight}>
              <Header />
              {this.renderItem()}
            </Div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default BookDetails

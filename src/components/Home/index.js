import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import BookCard from '../BookCard'
import './index.css'

import Header from '../Header'
import Footer from '../Footer'

class Home extends Component {
  state = {dataState: 'initial'}

  componentDidMount() {
    this.getTopRatedBooksData()
  }

  getTopRatedBooksData = async () => {
    this.setState({dataState: 'loading'})
    const JWT = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const options = {
      method: 'GET',
      headers: {Authorization: `Beaber ${JWT}`},
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const {books} = fetchedData
      const updatedBooks = books.map(each => ({
        authorName: each.author_name,
        coverPic: each.cover_pic,
        id: each.id,
        title: each.title,
      }))
      this.setState({dataState: 'success', Data: updatedBooks})
    } else {
      this.setState({dataState: 'failure'})
    }
  }

  renderLoading = () => (
    <div testid="loader" className="data-con">
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container">
        <ul>
          <Slider {...settings}>
            {Data.map(each => (
              <BookCard details={each} key={each.id} />
            ))}
          </Slider>
        </ul>
      </div>
    )
  }

  renderFailure = () => (
    <div className="wrong-con">
      <img
        className="went-wrong"
        src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672392232/Group_7522_wentwrong_faawgk.png"
        alt="failure view"
      />
      <p className="went-wrong-head">Something went wrong, Please try again.</p>
      <button onClick={this.getTopRatedBooksData} className="find-books">
        Try Again
      </button>
    </div>
  )

  renderItem() {
    const {dataState} = this.state
    switch (dataState) {
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
      <>
        <div className="home-con">
          <Header />
          <div className="banner-con">
            <h1 className="heading">Find Your Next Favorite Books?</h1>
            <p className="paragraph">
              You are in the right place. Tell us what titles or genres you have
              enjoyed in the past, and we will give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div className="div-top">
            <div className="top-head-button">
              <h1 className="head">Top Rated Books</h1>
              <Link to="/shelf">
                <button className="find-books">Find Books</button>
              </Link>
            </div>
            <div className="data-con">{this.renderItem()}</div>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}
export default Home

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ContextTheme from '../../Context/ContextTheme'
import BookCard from '../BookCard'
import './index.css'
import {HomeCon, Heading, ParaGraph, DivTop, Head} from './styledComponent'

import Header from '../Header'
import Footer from '../Footer'
import HeaderMb from '../HeaderMb'

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
    <div testid="loading" className="data-con">
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    const settings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {Data.map(each => (
            <BookCard details={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }

  renderFailure = () => (
    <div className="wrong-con">
      <img
        className="went-wrong"
        src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672392232/Group_7522_wentwrong_faawgk.png"
        alt=""
      />
      <h1 className="went-wrong-head">
        Something went wrong, Please try again.
      </h1>
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
      <ContextTheme.Consumer>
        {value => {
          const {isLight} = value
          const settings = {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
          return (
            <>
              <HomeCon isLight={isLight} className="home-con">
                <Header />
                <div className="banner-con">
                  <Heading isLight={isLight}>
                    Find Your Next Favorite Books?
                  </Heading>
                  <ParaGraph isLight={isLight}>
                    You are in the right place. Tell us what titles or genres
                    you have enjoyed in the past, and we will give you
                    surprisingly insightful recommendations.
                  </ParaGraph>
                </div>
                <DivTop isLight={isLight}>
                  <div className="top-head-button">
                    <Head isLight={isLight}>Top Rated Books</Head>
                    <Link to="/shelf">
                      <button className="find-books">Find Books</button>
                    </Link>
                  </div>
                  <div className="data-con">{this.renderItem()}</div>
                </DivTop>
                <Footer />
              </HomeCon>
              <div className="main-con-mb">
                <HeaderMb />
                <div className="baner-con">
                  <h1 className="heading">Find Your Next Favorite Books?</h1>
                  <p className="paragraph">
                    You are in the right place. Tell us what titles or genres
                    you have enjoyed in the past, and we will give you
                    surprisingly insightful recommendations.
                  </p>
                  <Link style={{textDecoration: 'none'}} to="/shelf">
                    <p className="find-books">Find Books</p>
                  </Link>
                </div>
                <div className="data-con">{this.renderItem()}</div>
                <Footer />
              </div>
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}
export default Home

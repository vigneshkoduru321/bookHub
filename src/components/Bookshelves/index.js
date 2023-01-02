import Cookies from 'js-cookie'
import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import {
  DivMain,
  Div,
  Heading,
  ShowData,
  Divv,
  Button,
  Headd,
} from './styledComponent'

import ContextTheme from '../../Context/ContextTheme'
import BookshelvesCard from '../BookshelvesCard'
import Footer from '../Footer'

import './index.css'
import Header from '../Header'

const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

class Bookshelves extends Component {
  state = {
    selectedBook: 'ALL',
    searchText: '',
    fetchStatus: 'initial',
    Data: [],
    booksNotFound: false,
  }

  componentDidMount() {
    this.getDataSelectedBooks()
  }

  getDataSelectedBooks = async () => {
    const {searchText, selectedBook} = this.state
    this.setState({fetchStatus: 'loading'})
    const JWT = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/book-hub/books?shelf=${selectedBook}&search=${searchText}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Beaber ${JWT}`},
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const {books} = fetchedData
      if (books.length === 0) {
        this.setState({booksNotFound: true})
      } else {
        this.setState({booksNotFound: false})
      }
      const updatedData = books.map(each => ({
        authorName: each.author_name,
        coverPic: each.cover_pic,
        rating: each.rating,
        readStatus: each.read_status,
        title: each.title,
        id: each.id,
      }))
      this.setState({Data: updatedData, fetchStatus: 'success'})
    } else {
      this.setState({fetchStatus: 'failure'})
    }
  }

  onSetAll = () => {
    this.setState({selectedBook: 'ALL'}, this.getDataSelectedBooks)
  }

  onSetReading = () => {
    this.setState({selectedBook: 'READ'}, this.getDataSelectedBooks)
  }

  onSetCurrent = () => {
    this.setState(
      {selectedBook: 'CURRENTLY_READING'},
      this.getDataSelectedBooks,
    )
  }

  onSetWant = () => {
    this.setState({selectedBook: 'WANT_TO_READ'}, this.getDataSelectedBooks)
  }

  onChangeSearch = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearch = () => {
    this.getDataSelectedBooks()
  }

  renderHeading = () => {
    const {selectedBook} = this.state
    switch (selectedBook) {
      case 'ALL':
        return 'All Books'
      case 'READ':
        return 'Read Books'
      case 'CURRENTLY_READING':
        return 'Currently Reading Books'
      case 'WANT_TO_READ':
        return 'Want to Read Books'
      default:
        return null
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
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight} = value
          return (
            <>
              <Divv isLight={isLight}>
                {Data.map(each => (
                  <BookshelvesCard details={each} key={each.id} />
                ))}
              </Divv>
              <Footer />
            </>
          )
        }}
      </ContextTheme.Consumer>
    )
  }

  getBookShelvesDataAgain = () => {
    this.getDataSelectedBooks()
  }

  renderFailure = () => (
    <div className="wrong-con-bookshelves">
      <img
        className="went-wrong-bookshelves"
        src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672392232/Group_7522_wentwrong_faawgk.png"
        alt=""
      />
      <h1 className="went-wrong-head-bookshelves">
        Something went wrong, Please try again.
      </h1>
      <button onClick={this.getBookShelvesDataAgain} className="find-books">
        Try Again
      </button>
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
    const {booksNotFound, searchText} = this.state
    return (
      <ContextTheme.Consumer>
        {value => {
          const {selectedBook} = this.state
          const {isLight} = value
          return (
            <DivMain isLight={isLight} className="">
              <Header />
              <Div isLight={isLight} className="container">
                <div className="side-bar">
                  <h1 className="BooksShelves">BooksShelves</h1>
                  <Button
                    stateValue={selectedBook}
                    value="ALL"
                    isLight={isLight}
                    onClick={this.onSetAll}
                  >
                    ALL
                  </Button>
                  <Button
                    stateValue={selectedBook}
                    value="READ"
                    isLight={isLight}
                    onClick={this.onSetReading}
                  >
                    Read
                  </Button>
                  <Button
                    stateValue={selectedBook}
                    value="CURRENTLY_READING"
                    isLight={isLight}
                    onClick={this.onSetCurrent}
                  >
                    Currently Reading
                  </Button>
                  <Button
                    stateValue={selectedBook}
                    value="WANT_TO_READ"
                    isLight={isLight}
                    onClick={this.onSetWant}
                  >
                    Want to Read
                  </Button>
                </div>
                <div className="books-container">
                  <div className="search-head-con">
                    <Heading isLight={isLight}>{this.renderHeading()}</Heading>
                    <div className="search-con">
                      <input
                        onChange={this.onChangeSearch}
                        placeholder="SEARCH"
                        className="search-input"
                        type="search"
                      />
                      <button
                        onClick={this.onClickSearch}
                        className="search-btn"
                        testid="searchButton"
                      >
                        <BsSearch />
                      </button>
                    </div>
                  </div>
                  {booksNotFound ? (
                    <div className="no-match-con">
                      <img
                        src="https://res.cloudinary.com/dzn2lfoqa/image/upload/v1672656655/Asset_1_1_1_ounbbm.png"
                        alt=""
                        className="no-match-img"
                      />
                      <Headd isLight={isLight}>
                        Your search for {searchText} did not find any matches.
                      </Headd>
                    </div>
                  ) : (
                    <ShowData isLight={isLight}>{this.renderItem()}</ShowData>
                  )}
                </div>
              </Div>
            </DivMain>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Bookshelves

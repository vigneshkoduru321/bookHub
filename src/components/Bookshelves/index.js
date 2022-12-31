import Cookies from 'js-cookie'
import {Component} from 'react'
import {FcSearch} from 'react-icons/fc'
import {DivMain, Div} from './styledComponent'
import ContextTheme from '../../Context/ContextTheme'

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
  state = {selectedBook: 'ALL', searchText: ''}

  componentDidMount() {
    const JWT = Cookies.get('jwt_token')
    const {searchText, selectedBook} = this.state
    const url = `https://apis.ccbp.in/book-hub/books?shelf=${selectedBook}&search=${searchText}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Beaber ${JWT}`},
    }
  }

  onSetAll = () => {
    this.setState({selectedBook: 'ALL'})
  }

  onSetReading = () => {
    this.setState({selectedBook: 'READ'})
  }

  onSetCurrent = () => {
    this.setState({selectedBook: 'CURRENTLY_READING'})
  }

  onSetWant = () => {
    this.setState({selectedBook: 'WANT_TO_READ'})
  }

  render() {
    const {selectedBook} = this.state
    console.log(selectedBook)
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight} = value
          return (
            <DivMain isLight={isLight} className="">
              <Header />
              <Div isLight={isLight} className="container">
                <div className="side-bar">
                  <h1 className="BooksShelves">BooksShelves</h1>
                  <button onClick={this.onSetAll} className="btn-books">
                    ALL
                  </button>
                  <button onClick={this.onSetReading} className="btn-books">
                    Read
                  </button>
                  <button onClick={this.onSetCurrent} className="btn-books">
                    Currently Reading
                  </button>
                  <button onClick={this.onSetWant} className="btn-books">
                    Want to Read
                  </button>
                </div>
                <div className="books-container">
                  <div className="search-con">
                    <input
                      placeholder="SEARCH"
                      className="search-input"
                      type="search"
                    />
                    <button className="search-btn">
                      <FcSearch />
                    </button>
                  </div>
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

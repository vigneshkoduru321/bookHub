import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ContextTheme from './Context/ContextTheme'

import './App.css'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'

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

class App extends Component {
  state = {isLight: true}

  changeTheme = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state
    return (
      <ContextTheme.Provider value={{isLight, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/bookshelves" component={Bookshelves} />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App

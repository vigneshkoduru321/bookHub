import React from 'react'

const ContextTheme = React.createContext({
  isLight: false,
  changeTheme: () => {},
})

export default ContextTheme

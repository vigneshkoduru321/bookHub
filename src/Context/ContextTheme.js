import React from 'react'

const ContextTheme = React.createContext({
  isLight: true,
  changeTheme: () => {},
})

export default ContextTheme

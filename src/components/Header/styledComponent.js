import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  height: 70px;
  width: 100%;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export default Nav

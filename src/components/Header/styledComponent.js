import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  color: ${props => (props.isLight ? 'black' : 'white')};
  height: 55px;
  width: 100%;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  border-color: ${props => (props.isLight ? 'black' : 'white')};
`
export default Nav

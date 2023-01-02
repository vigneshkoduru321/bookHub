import styled from 'styled-components'

export const DivNotFound = styled.div`
  height: 100vh;
  width:100vw;
  background-color:${props => (props.isLight ? 'white' : 'black')}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
`
export const Para = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
  font-size: 15px;
`

import styled from 'styled-components'

export const LogoCon = styled.div`
  color: ${props => (props.isLight ? 'black' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export default LogoCon

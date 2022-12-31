import styled from 'styled-components'

export const HomeCon = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  height: 100vh;
`
export const Heading = styled.h1`
  color: ${props => (props.isLight ? '#1E293B' : '#0284c7')};
  font-size: 30px;
`

export const ParaGraph = styled.p`
  color: ${props => (props.isLight ? '#475569' : '#475569')};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 32px;
`
export const DivTop = styled.div`
  border-style: solid;
  height: 300px;
  width: 80%;
  border-color: ${props => (props.isLight ? '#1E293B' : '#475569')};
  border-width: 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Head = styled.h1`
  color: ${props => (props.isLight ? '#1E293B' : '#475569')};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  font-family: 'Roboto';
  margin-left: 30px;
`

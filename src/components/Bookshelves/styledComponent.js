import styled from 'styled-components'

export const DivMain = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`
export const Div = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`
export const Heading = styled.div`
  color: ${props => (props.isLight ? '#0284C7' : '#0284C7')};
  font-weight: 500;
  font-size: 25px;
  font-family: 'Roboto';
`
export const ShowData = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`
export const Divv = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
export const Button = styled.button`
  margin: 15px;
  width: 200px;
  height: 40px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Roboto';
  border-width: 0px;
  opacity: ${props => (props.stateValue === props.value ? '1px' : '0.7')};
  font-size: ${props => (props.stateValue === props.value ? '17px' : '16px')};
  color: ${props => (props.stateValue === props.value ? '#0284C7' : '#475569')};
`
export const Headd = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
  font-size: 15px;
  font-weight: 500;
`

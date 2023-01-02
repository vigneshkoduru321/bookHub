import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  height: 180px;
  width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Head = styled.h1`
  color: ${props => (props.isLight ? '#1E293B' : 'white')};
  text-align: left;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`
export const Para = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: 'Roboto';
`
export const Paraa = styled.h1`
  color: ${props => (props.isLight ? '#0284C7' : '#0284C7')};
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const P = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  font-family: 'Roboto';
`

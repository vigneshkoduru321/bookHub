import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Divv = styled.div`
  background-color: ${props => (props.isLight ? 'white' : 'black')};
  width: 80%;
  height: 473px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Head = styled.h1`
  color: ${props => (props.isLight ? '#1E293B' : 'white')};
  font-weight: 700;
  font-size: 25px;
  line-height: 24px;
`
export const Heading = styled.h1`
  color: ${props => (props.isLight ? '#1E293B' : 'white')};
  font-weight: 700;
  font-size: 25px;
  line-height: 24px;
`
export const Para = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: 'Roboto';
`

export const Paragraph = styled.h1`
  color: ${props => (props.isLight ? '#334155' : '#475569')};
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const Paraa = styled.h1`
  color: ${props => (props.isLight ? '#0284C7' : '#0284C7')};
  font-weight: 600;
  font-size: 14px;
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
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto';
`

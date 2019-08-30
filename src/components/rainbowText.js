import React from 'react'
import styled, {keyframes} from 'styled-components'

const lightshow = keyframes`
  0% {
    color: #35c9a4;
  }
  25% {
    color: #DA4453;
  }
  50% {
    color: #FFCE54;
  }
  75% {
    color: #3caee5;
  }
  100% {
    color: #35c9a4;
  }
`

export const Char = styled.span`
  animation: ${lightshow} ease-in-out ${({time = 0.85}) => time}s infinite
    backwards ${({delay = 0}) => delay}s;
`

export const CharContainer = styled.div`
  /* background: var(--theme-surface); */
  /* box-shadow: 0 0 0 1rem var(--theme-surface); */
  display: inline;
`

const RainbowText = props => {
  const chars = props.text.split('')
  const time = 30
  const {length} = chars
  const style = props.style
  return (
    <React.Fragment>
      <CharContainer style={style}>
        {chars.map((char, i) => {
          const delay = (props.time / length) * (length - i) * -1
          return (
            <Char key={i} time={props.time} delay={delay}>
              {char}
            </Char>
          )
        })}
      </CharContainer>
    </React.Fragment>
  )
}

RainbowText.defaultProps = {
  time: 30
}

export default RainbowText

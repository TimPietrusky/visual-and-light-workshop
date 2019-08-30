import React from 'react'
import styled, {css} from 'styled-components'

export const ImportantLink = styled.a`
  color: var(--theme-on-primary);
  background: var(--theme-primary);
  border-radius: 0.5rem;
  box-shadow: 0 0 0 0.75rem var(--theme-primary);
  line-height: 1em;
  display: inline-block;
  text-decoration: none;
  font-size: 0.95em;

  :hover {
    filter: invert(100%);
  }

  &.medium {
    font-size: 1.45em;
  }

  &.big {
    font-size: 1.65em;
  }
`
